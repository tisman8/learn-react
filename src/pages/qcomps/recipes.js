export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientList() {
  const listItems = recipes.map(recipe =>
    <li key={recipe.id}>
      {Array.from(recipe.ingredients).join(", ")}
    </li>
  );
  return <ul>{listItems}</ul>;
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {IngredientList()}
    </div>
  );
}