"use client";
import {
  CustomButton,
  NeubrutalismInput,
  NeubrutalismSelect,
} from "@/components/ui";
import Form from "next/form";
import { useParams } from "next/navigation";

const RecipeMood = () => {
  const mood = useParams().mood;

  const cuisineOptions = [
    { label: "Italian", value: "Italian" },
    { label: "Mexican", value: "Mexican" },
    { label: "Asian", value: "Asian" },
    { label: "Mediterranean", value: "Mediterranean" },
  ];

  const dietaryOptions = [
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Vegan", value: "Vegan" },
    { label: "Gluten-Free", value: "Gluten-Free" },
    { label: "Keto", value: "Keto" },
    { label: "Dairy-Free", value: "Dairy-Free" },
  ];

  const mealTypeOptions = [
    { label: "Breakfast", value: "Breakfast" },
    { label: "Lunch", value: "Lunch" },
    { label: "Dinner", value: "Dinner" },
    { label: "Snack", value: "Snack" },
    { label: "Dessert", value: "Dessert" },
  ];

  const cookingTimeOptions = [
    { label: "15 min", value: "15 min" },
    { label: "30 min", value: "30 min" },
    { label: "45 min", value: "45 min" },
    { label: "1 hour", value: "1 hour" },
  ];

  const spicinessOptions = [
    { label: "Mild", value: "Mild" },
    { label: "Medium", value: "Medium" },
    { label: "Spicy", value: "Spicy" },
    { label: "Very Spicy", value: "Very Spicy" },
  ];

  const servingSizeOptions = [
    { label: "Single", value: "Single" },
    { label: "Couple", value: "Couple" },
    { label: "Family", value: "Family" },
    { label: "Party", value: "Party" },
  ];

  return (
    <div className="bg-customSecondary min-h-screen p-10">
      <h1 className="text-center text-3xl lg:text-4xl font-bold font-space">
        Customize Your Recipe
      </h1>
      <p className="text-center text-base lg:text-lg font-medium font-urbanist mt-3">
        Customize your recipe based on your preferences
      </p>

      <Form
        action="/recipe/generate"
        className="max-w-md mx-auto mt-10 space-y-5"
      >
        <CustomButton link="/recipe">Go Back</CustomButton>
        <NeubrutalismInput
          label="Mood"
          placeholder="Mood"
          name="currentMood" // Use name attribute
          value={(mood as string) || ""}
        />

        <NeubrutalismInput
          label="Available Ingredients"
          placeholder="Include or avoid ingredients"
          name="availableIngredients" // Use name attribute
        />

        <div>
          <label className="block font-semibold my-2 font-urbanist">
            Cuisine Type
          </label>
          <NeubrutalismSelect
            options={cuisineOptions}
            placeholder="Select Cuisine"
            name="cuisine" // Use name attribute
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Dietary Preference
          </label>
          <NeubrutalismSelect
            options={dietaryOptions}
            placeholder="Select Preference"
            name="dietaryPreference" // Use name attribute
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">Meal Type</label>
          <NeubrutalismSelect
            options={mealTypeOptions}
            placeholder="Select Meal Type"
            name="mealType" // Use name attribute
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Cooking Time
          </label>
          <NeubrutalismSelect
            options={cookingTimeOptions}
            placeholder="Select Cooking Time"
            name="cookingTime" // Use name attribute
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Spiciness Level
          </label>
          <NeubrutalismSelect
            options={spicinessOptions}
            placeholder="Select Spiciness Level"
            name="spicinessLevel" // Use name attribute
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Serving Size
          </label>
          <NeubrutalismSelect
            options={servingSizeOptions}
            placeholder="Select Serving Size"
            name="servingSize" // Use name attribute
          />
        </div>
        <div className="flex justify-center">
          <CustomButton type="submit" variant="secondary">
            Generate Recipe
          </CustomButton>
        </div>
      </Form>
    </div>
  );
};

export default RecipeMood;
