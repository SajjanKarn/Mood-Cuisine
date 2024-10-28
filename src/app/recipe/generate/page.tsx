import axios from "axios";
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

  // check if required fields are missing
  if (!params.currentMood || !params.cuisine || !params.mealType) {
    throw new Error("Missing required fields");
  }

  const res = await axios.post(
    (process.env.PUBLIC_URL as string) + "/api/recipe/generate",
    params,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const content = res.data;

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
