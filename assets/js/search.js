document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-box");
  const resultsContainer = document.getElementById("search-results");

  fetch("/search.json")
    .then(response => response.json())
    .then(data => {
      const docs = data.docs.filter(doc => doc.url.startsWith("/apprendreturc/docs/"));

      const idx = lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("content");

        docs.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      function runSearch(query) {
        resultsContainer.innerHTML = "";

        if (!query || query.length < 2) {
          resultsContainer.style.display = "none";
          return;
        }

        const results = idx.search(query);
        resultsContainer.style.display = results.length ? "block" : "none";

        if (results.length === 0) {
          resultsContainer.innerHTML = "<p>Aucun résultat trouvé.</p>";
          return;
        }

        results.forEach(result => {
          const doc = docs.find(d => d.url === result.ref);
          const el = document.createElement("div");
          el.innerHTML = `
            <div style="margin-bottom: 1em;">
              <a href="${doc.url}" style="font-weight:bold;">${doc.title}</a>
              <p>${doc.content.substring(0, 150)}...</p>
            </div>`;
          resultsContainer.appendChild(el);
        });
      }

      searchInput.addEventListener("input", function () {
        runSearch(this.value.trim());
      });

      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          runSearch(this.value.trim());
        }
      });

      document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
          resultsContainer.style.display = "none";
        }
      });
    });
});
