// Fetch search.json and perform search
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');
  
  if (query) {
    document.getElementById('query').textContent = query;
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        const results = data.docs.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) || 
          item.content.toLowerCase().includes(query.toLowerCase())
        );
        displayResults(results);
      });
  }
});

function displayResults(results) {
  const resultsList = document.getElementById('results-list');
  if (results.length === 0) {
    resultsList.innerHTML = '<li>No results found.</li>';
  } else {
    resultsList.innerHTML = results.map(item => `
      <li>
        <a href="${item.url}">${item.title}</a>
        <p>${item.content.substring(0, 150)}...</p>
      </li>
    `).join('');
  }
}
