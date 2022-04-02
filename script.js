const apiKey = "95e4742b527a49959388cde2900134a5";
async function getAllRecipes(apiKey) {
  const url = `https://api.spoonacular.com/food/search?apiKey=${apiKey}`;
  console.log(url);

  const food = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((recipes) => {});
}
getAllRecipes(apiKey);
