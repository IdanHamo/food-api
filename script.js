const appId = "96346f3c";
const appKey = "8e5cd4de26651cc6cb1024b367f2ba16";
const searchInp = document.getElementById("inp");
const recipeContainer = document.getElementById("item");

searchInp.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    recipeContainer.innerHTML = "";
    fetchAPI();
  }
});

async function fetchAPI() {
  const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInp.value}&app_id=${appId}&app_key=${appKey}`;

  const recipe = await fetch(baseUrl);
  const data = await recipe.json();

  renderToHTML(data.hits);
  console.log(data.hits);
}
function renderToHTML(searchResults) {
  let html = "";
  searchResults.forEach((result) => {
    html += `<div class="card " style="width: 18rem;">
  <img src="${result.recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.recipe.label}</h5>
    <p class="card-text">calories ${result.recipe.calories.toFixed(2)}</p>
  </div>
  <ul class="list-group list-group-flush">
  ${result.recipe.ingredientLines.forEach((ingredient) => {
    `<li class="list-group-item">${ingredient}</li>`;
  })}

    </ul>
  <div class="card-body">
    <a href="${result.recipe.url}" class="card-link" target="_blank">Recipe</a>
  </div>
</div>`;
  });
  recipeContainer.innerHTML += html;
}
