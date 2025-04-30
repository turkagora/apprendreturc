async function loadSearch() {
  const response = await fetch('/search.json');
  const indexData = await response.json();

  const idx = lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('content');

    indexData.forEach(doc => {
      this.add(doc);
    });
  });

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function () {
    const query = this.value;
    const results = idx.search(query);
    displayResults(results, indexData);
  });

  function displayResults(results, data) {
    searchResults.innerHTML = '';
    if (results.length) {
      results.forEach(result => {
        const item = data.find(d => d.url === result.ref);
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        searchResults.appendChild(li);
      });
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }
}

document.addEventListener('DOMContentLoaded', loadSearch);
