// Article filenames in the articles folder
const articles = [
  { title: "Comprendre la culture turque", file: "articles/article-1.html" },
  { title: "L'apprentissage du turc pour les francophones", file: "articles/article-2.html" },
  { title: "La cuisine turque : un voyage gustatif", file: "articles/article-3.html" },
  // Add more articles here
];

// Function to generate the sidebar links
function generateSidebar() {
  const articleList = document.getElementById('article-list');
  
  articles.forEach((article, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = "#";
    link.textContent = article.title;
    link.onclick = () => loadArticle(index);
    listItem.appendChild(link);
    articleList.appendChild(listItem);
  });
}

// Function to load the article from the file
function loadArticle(index) {
  const article = articles[index];
  const articleContent = document.getElementById('article-content');
  
  // Clear current content
  articleContent.innerHTML = `<h2>Loading...</h2>`;
  
  // Fetch the article HTML file and display its content
  fetch(article.file)
    .then(response => response.text())
    .then(data => {
      articleContent.innerHTML = data;
    })
    .catch(error => {
      articleContent.innerHTML = `<p>Erreur de chargement de l'article. Veuillez réessayer plus tard.</p>`;
    });
}

// Initialize the sidebar and load the first article
generateSidebar();
loadArticle(0); // Load the first article by default
