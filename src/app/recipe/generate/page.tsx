type SearchRecipeProps = {
  availableIngredients: string;
  cuisine: string;
  dietaryPreference: string;
  mealType: string;
  cookingTime: string;
  spicinessLevel: string;
  servingSize: string;
};

const GenerateRecipe = async ({
  searchParams,
}: {
  searchParams: Promise<SearchRecipeProps>;
}) => {
  const params = await searchParams;
  return (
    <div>
      <h1>Generate Recipe</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};
export default GenerateRecipe;
