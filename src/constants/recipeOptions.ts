// src/constants/recipeOptions.ts

export type Option = {
  label: string;
  value: string;
};

export const cuisineOptions: Option[] = [
  { label: "Italian", value: "Italian" },
  { label: "Mexican", value: "Mexican" },
  { label: "Asian", value: "Asian" },
  { label: "Mediterranean", value: "Mediterranean" },
  { label: "Indian", value: "Indian" }, // Added option
  { label: "French", value: "French" }, // Added option
  { label: "Thai", value: "Thai" }, // Added option
  { label: "American", value: "American" }, // Added option
];

export const dietaryOptions: Option[] = [
  { label: "Vegetarian", value: "Vegetarian" },
  { label: "Vegan", value: "Vegan" },
  { label: "Gluten-Free", value: "Gluten-Free" },
  { label: "Keto", value: "Keto" },
  { label: "Dairy-Free", value: "Dairy-Free" },
  { label: "Paleo", value: "Paleo" }, // Added option
  { label: "Low-Carb", value: "Low-Carb" }, // Added option
];

export const mealTypeOptions: Option[] = [
  { label: "Breakfast", value: "Breakfast" },
  { label: "Lunch", value: "Lunch" },
  { label: "Dinner", value: "Dinner" },
  { label: "Snack", value: "Snack" },
  { label: "Dessert", value: "Dessert" },
  { label: "Brunch", value: "Brunch" }, // Added option
  { label: "Appetizer", value: "Appetizer" }, // Added option
];

export const cookingTimeOptions: Option[] = [
  { label: "15 min", value: "15 min" },
  { label: "30 min", value: "30 min" },
  { label: "45 min", value: "45 min" },
  { label: "1 hour", value: "1 hour" },
  { label: "1.5 hours", value: "1.5 hours" }, // Added option
  { label: "2 hours", value: "2 hours" }, // Added option
];

export const spicinessOptions: Option[] = [
  { label: "Mild", value: "Mild" },
  { label: "Medium", value: "Medium" },
  { label: "Spicy", value: "Spicy" },
  { label: "Very Spicy", value: "Very Spicy" },
  { label: "Extra Spicy", value: "Extra Spicy" }, // Added option
];

export const servingSizeOptions: Option[] = [
  { label: "Single", value: "Single" },
  { label: "Couple", value: "Couple" },
  { label: "Family", value: "Family" },
  { label: "Party", value: "Party" },
  { label: "Buffet", value: "Buffet" }, // Added option
];

export const cookingMethodOptions: Option[] = [
  { label: "Baking", value: "Baking" },
  { label: "Grilling", value: "Grilling" },
  { label: "Frying", value: "Frying" },
  { label: "Boiling", value: "Boiling" },
  { label: "Steaming", value: "Steaming" },
  { label: "Roasting", value: "Roasting" }, // Added option
  { label: "Sautéing", value: "Sautéing" }, // Added option
];

export const allergyOptions: Option[] = [
  { label: "Nuts", value: "Nuts" },
  { label: "Shellfish", value: "Shellfish" },
  { label: "Dairy", value: "Dairy" },
  { label: "Gluten", value: "Gluten" },
  { label: "Eggs", value: "Eggs" }, // Added option
  { label: "Soy", value: "Soy" }, // Added option
];

export const flavorProfileOptions: Option[] = [
  { label: "Sweet", value: "Sweet" },
  { label: "Savory", value: "Savory" },
  { label: "Spicy", value: "Spicy" },
  { label: "Sour", value: "Sour" },
  { label: "Bitter", value: "Bitter" },
  { label: "Umami", value: "Umami" }, // Added option
];

export const timeOfDayOptions: Option[] = [
  { label: "Morning", value: "Morning" },
  { label: "Afternoon", value: "Afternoon" },
  { label: "Evening", value: "Evening" },
  { label: "Night", value: "Night" }, // Added option
];

export const skillLevelOptions: Option[] = [
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Advanced", value: "Advanced" },
  { label: "Expert", value: "Expert" }, // Added option
];
