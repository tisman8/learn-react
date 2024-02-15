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
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {Array.from(recipe.ingredients).map((ingredient, index) => (
          <li key={`${recipe.id}-${index}`}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
  return listItems;
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {IngredientList()}
    </div>
  );
}