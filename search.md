---
layout: page
title: Search Results
permalink: /search/
---

<div class="search-results">
  <h1>Search Results</h1>
  <div id="search-results-container"></div>
</div>

<script>
// Get search query from URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

if (query) {
  // Fetch search.json
  fetch('/search.json')
    .then(response => response.json())
    .then(data => {
      const results = data.docs.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        (item.content && item.content.toLowerCase().includes(query.toLowerCase()))
      );
      
      const container = document.getElementById('search-results-container');
      
      if (results.length === 0) {
        container.innerHTML = `<p>No results found for "${query}"</p>`;
      } else {
        container.innerHTML = `
          <p>Showing results for "${query}":</p>
          <ul class="search-results-list">
            ${results.map(item => `
              <li>
                <a href="${item.url}">${item.title}</a>
                <div class="search-snippet">${getSnippet(item.content, query)}</div>
              </li>
            `).join('')}
          </ul>
        `;
      }
    });
}

function getSnippet(content, query) {
  if (!content) return '';
  const start = Math.max(0, content.toLowerCase().indexOf(query.toLowerCase()) - 50);
  return '...' + content.substr(start, 150) + '...';
}
</script>

<style>
.search-results {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.search-results-list li {
  margin-bottom: 20px;
}
.search-snippet {
  color: #666;
  font-size: 0.9em;
}
</style>
