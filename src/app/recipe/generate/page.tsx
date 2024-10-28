import model from "@/model/model";
import MarkdownRender from "./MarkdownRender";
import { CustomButton } from "@/components/ui";

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

  const prompt = `
Generate 5 unique and detailed recipes based on the following preferences:
- **Available Ingredients**: ${params.availableIngredients}
- **Cuisine Type**: ${params.cuisine}
- **Dietary Preference**: ${params.dietaryPreference}
- **Meal Type**: ${params.mealType}
- **Cooking Time**: ${params.cookingTime}
- **Spiciness Level**: ${params.spicinessLevel}
- **Serving Size**: ${params.servingSize}

Each recipe should include:
1. A creative and appealing title with large size.
2. A brief description of the dish.
3. A list of ingredients with specific quantities.
4. Step-by-step cooking instructions.
5. Any additional tips or variations that might enhance the dish.

Ensure that the recipes are distinct from each other and cater to the specified preferences. The output should be formatted in Markdown for easy reading and presentation.
`;

  const recipes = await model.generateContent(prompt);
  const content = recipes.response.text();
  console.log(content);
  return (
    <div className="bg-customSecondary p-10 font-urbanist">
      <CustomButton link="/recipe">Go Back</CustomButton>

      <h1 className="font-space text-2xl font-bold my-5">
        Here are some recipes you might like based on your preferences:
      </h1>
      <div className="text-lg font-medium font-urbanist">
        {content && <MarkdownRender content={content} />}
      </div>
    </div>
  );
};

export default GenerateRecipe;
