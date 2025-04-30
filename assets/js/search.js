(function () {
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, " "));
      }
    }
    return null;
  }

  var searchTerm = getQueryVariable("query");
  var searchResults = document.getElementById("search-results");

  if (searchTerm) {
    document.getElementById("search-box").value = searchTerm;

    var idx = lunr(function () {
      this.ref("url");
      this.field("title");
      this.field("author");
      this.field("category");
      this.field("content");

      for (var key in window.store) {
        this.add(window.store[key]);
      }
    });

    var results = idx.search(searchTerm);

    if (results.length > 0) {
      results.forEach(function (result) {
        var item = window.store[result.ref];
        var li = document.createElement("li");
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        searchResults.appendChild(li);
      });
    } else {
      searchResults.innerHTML = "<li>Aucun résultat</li>";
    }
  }
})();
