"use client";
import {
  CustomButton,
  NeubrutalismInput,
  NeubrutalismSelect,
} from "@/components/ui";
import Form from "next/form";
import { useParams } from "next/navigation";
import {
  cuisineOptions,
  dietaryOptions,
  mealTypeOptions,
  cookingTimeOptions,
  spicinessOptions,
  servingSizeOptions,
  cookingMethodOptions,
  allergyOptions,
  flavorProfileOptions,
  timeOfDayOptions,
  skillLevelOptions,
} from "@/constants/recipeOptions";

const RecipeMood = () => {
  const mood = useParams().mood;

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
          name="currentMood"
          value={(mood as string) || ""}
          required // Required field
        />

        <NeubrutalismInput
          label="Available Ingredients"
          placeholder="Include or avoid ingredients"
          name="availableIngredients"
        />

        <div>
          <label className="block font-semibold my-2 font-urbanist">
            Cuisine Type
          </label>
          <NeubrutalismSelect
            options={cuisineOptions}
            placeholder="Select Cuisine"
            name="cuisine"
            required // Required field
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Dietary Preference
          </label>
          <NeubrutalismSelect
            options={dietaryOptions}
            placeholder="Select Preference"
            name="dietaryPreference"
            required // Required field
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">Meal Type</label>
          <NeubrutalismSelect
            options={mealTypeOptions}
            placeholder="Select Meal Type"
            name="mealType"
            required // Required field
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Cooking Time
          </label>
          <NeubrutalismSelect
            options={cookingTimeOptions}
            placeholder="Select Cooking Time"
            name="cookingTime"
            required // Required field
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Spiciness Level
          </label>
          <NeubrutalismSelect
            options={spicinessOptions}
            placeholder="Select Spiciness Level"
            name="spicinessLevel"
            required // Required field
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Serving Size
          </label>
          <NeubrutalismSelect
            options={servingSizeOptions}
            placeholder="Select Serving Size"
            name="servingSize"
            required // Required field
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Cooking Method
          </label>
          <NeubrutalismSelect
            options={cookingMethodOptions}
            placeholder="Select Cooking Method"
            name="cookingMethod"
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">Allergies</label>
          <NeubrutalismSelect
            options={allergyOptions}
            placeholder="Select Allergies"
            name="allergies"
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Flavor Profile
          </label>
          <NeubrutalismSelect
            options={flavorProfileOptions}
            placeholder="Select Flavor Profile"
            name="flavorProfile"
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Time of Day
          </label>
          <NeubrutalismSelect
            options={timeOfDayOptions}
            placeholder="Select Time of Day"
            name="timeOfDay"
          />
        </div>

        <div>
          <label className="block font-semibold font-urbanist">
            Cooking Skill Level
          </label>
          <NeubrutalismSelect
            options={skillLevelOptions}
            placeholder="Select Skill Level"
            name="skillLevel"
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
