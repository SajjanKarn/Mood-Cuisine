import model from "@/model/model";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  currentMood: z.string(),
  availableIngredients: z.string().optional(),
  cuisine: z.string(),
  dietaryRestrictions: z.string().optional(),
  mealType: z.string().optional(),
  cookingTime: z.string().optional(),
  spiciness: z.string().optional(),
  servingSize: z.string().optional(),
  cookingMethod: z.string().optional(),
  allergies: z.string().optional(),
  flavorProfile: z.string().optional(),
  timeOfDay: z.string().optional(),
  skillLevel: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { errors: validation.error.format() },
        { status: 400 }
      );
    }

    // Generate recipe based on the body
    const prompt = `
    Generate 5 unique and detailed recipes based on the following preferences and mood:
    - **Mood**: ${body.currentMood}
    - **Available Ingredients**: ${body.availableIngredients || "None"}
    - **Cuisine Type**: ${body.cuisine}
    - **Dietary Preference**: ${body.dietaryPreference || "None"}
    - **Meal Type**: ${body.mealType}
    - **Cooking Time**: ${body.cookingTime || "Any"}
    - **Spiciness Level**: ${body.spicinessLevel}
    - **Serving Size**: ${body.servingSize}
    - **Cooking Method**: ${body.cookingMethod || "Any"}  
    - **Allergies**: ${body.allergies || "None"} 
    - **Flavor Profile**: ${body.flavorProfile || "Any"} 
    - **Time of Day**: ${body.timeOfDay || "Any"} 
    - **Cooking Skill Level**: ${body.skillLevel || "Any"} 
    
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
    if (!recipes) {
      throw new Error("No recipes found");
    }

    const content = recipes.response.text();

    return NextResponse.json(content, { status: 200 });

    // eslint-disable-next-line
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred while generating the recipe",
      },
      { status: 500 }
    );
  }
}
