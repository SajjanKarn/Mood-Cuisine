import model from "@/model/model";
import MarkdownRender from "./MarkdownRender";
import { CustomButton } from "@/components/ui";

type SearchRecipeProps = {
  currentMood: string;
  availableIngredients: string;
  cuisine: string;
  dietaryPreference: string;
  mealType: string;
  cookingTime: string;
  spicinessLevel: string;
  servingSize: string;
  cookingMethod?: string; // Optional
  allergies?: string; // Optional
  flavorProfile?: string; // Optional
  timeOfDay?: string; // Optional
  skillLevel?: string; // Optional
};

const GenerateRecipe = async ({
  searchParams,
}: {
  searchParams: Promise<SearchRecipeProps>;
}) => {
  const params = await searchParams;
  const prompt = `
Generate 5 unique and detailed recipes based on the following preferences and mood:
- **Mood**: ${params.currentMood}
- **Available Ingredients**: ${params.availableIngredients}
- **Cuisine Type**: ${params.cuisine}
- **Dietary Preference**: ${params.dietaryPreference}
- **Meal Type**: ${params.mealType}
- **Cooking Time**: ${params.cookingTime}
- **Spiciness Level**: ${params.spicinessLevel}
- **Serving Size**: ${params.servingSize}
- **Cooking Method**: ${params.cookingMethod || "Any"}  
- **Allergies**: ${params.allergies || "None"} 
- **Flavor Profile**: ${params.flavorProfile || "Any"} 
- **Time of Day**: ${params.timeOfDay || "Any"} 
- **Cooking Skill Level**: ${params.skillLevel || "Any"} 

Each recipe should include:
1. A creative and appealing title with large size.
2. A brief description of the dish.
3. A list of ingredients with specific quantities.
4. Step-by-step cooking instructions.
5. Any additional tips or variations that might enhance the dish.
6. Based on the mood and preferences, suggest a suitable drink or side dish to complement the meal.

Ensure that the recipes are distinct from each other and cater to the specified preferences. The output should be formatted in Markdown for easy reading and presentation.
`;

  const recipes = await model.generateContent(prompt);
  const content = recipes.response.text();

  return (
    <div className="bg-customSecondary p-10 font-urbanist">
      <CustomButton link="/recipe">Go Back</CustomButton>

      <h1 className="font-space text-2xl font-bold my-5">
        Here are some recipes you might like based on your preferences:
      </h1>
      <div className="text-lg font-medium font-urbanist">
        {content ? (
          <MarkdownRender content={content} />
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default GenerateRecipe;
