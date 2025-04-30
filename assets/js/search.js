(function () {
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
      }
    }
  }

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById("search-results");

    if (results.length) {
      var appendString = "";
      for (var i = 0; i < results.length; i++) {
        var ref = results[i].ref;
        var item = store[ref];
        appendString += `<li><a href="${item.url}"><h3>${item.title}</h3></a>`;
        appendString += `<p>${item.content.substring(0, 160)}...</p></li>`;
      }
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = "<li>No results found</li>";
    }
  }

  var searchTerm = getQueryVariable("query");

  if (searchTerm) {
    document.getElementById("search-box").value = searchTerm;

    var idx = lunr(function () {
      this.ref("id");
      this.field("title", { boost: 10 });
      this.field("content");
      for (var key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          content: window.store[key].content,
        });
      }
    });

    var results = idx.search(searchTerm);
    displaySearchResults(results, window.store);
  }
})();
