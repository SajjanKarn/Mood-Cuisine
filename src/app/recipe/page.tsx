import {
  LucideSmile,
  LucideFrown,
  LucideZap,
  LucideStar,
  LucideCoffee,
  LucideLightbulb,
  LucideMeh,
  LucideActivity,
  LucideSearch,
  LucideHeart,
  LucideTarget,
  LucideClock,
} from "lucide-react";

type MoodCard = {
  mood: string;
  image: string | React.ReactNode;
  backgroundColor?: string;
};

const moods: MoodCard[] = [
  { mood: "Happy", image: <LucideSmile />, backgroundColor: "#FFD700" },
  { mood: "Sad", image: <LucideFrown />, backgroundColor: "#AEC6CF" },
  { mood: "Angry", image: <LucideZap />, backgroundColor: "#FF6961" },
  { mood: "Excited", image: <LucideStar />, backgroundColor: "#FFB347" },
  { mood: "Relaxed", image: <LucideCoffee />, backgroundColor: "#77DD77" },
  { mood: "Inspired", image: <LucideLightbulb />, backgroundColor: "#CFCFC4" },
  { mood: "Bored", image: <LucideMeh />, backgroundColor: "#B39EB5" },
  { mood: "Energetic", image: <LucideActivity />, backgroundColor: "#FF6347" },
  { mood: "Curious", image: <LucideSearch />, backgroundColor: "#87CEEB" },
  { mood: "Romantic", image: <LucideHeart />, backgroundColor: "#FFC0CB" },
  { mood: "Focused", image: <LucideTarget />, backgroundColor: "#DDA0DD" },
  { mood: "Nostalgic", image: <LucideClock />, backgroundColor: "#F4A460" },
];

const RecipePage = () => {
  return (
    <div className="bg-customSecondary lg:h-screen px-5 py-10 lg:p-10">
      <h1 className="text-center text-4xl font-bold font-space">
        Generate Recipe
      </h1>{" "}
      <p className="text-center text-base lg:text-lg font-medium font-urbanist mt-3">
        With our smart AI, we can generate a recipe for you based on your mood
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-auto-fill-200 gap-5 lg:gap-10 mt-10">
        {moods.map((mood) => (
          <MoodCard key={mood.mood} mood={mood} />
        ))}
      </div>
    </div>
  );
};

type MoodCardProps = {
  mood: MoodCard;
};

const MoodCard = ({ mood }: MoodCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-5 neubrutalism-border neubrutalism-shadow hover:neubrutalism-hover cursor-pointer`}
      style={{ backgroundColor: mood.backgroundColor }}
    >
      {typeof mood.image === "string" ? (
        <img
          src={mood.image}
          alt={mood.mood}
          className="w-32 h-32 rounded-full"
        />
      ) : (
        mood.image
      )}
      <p className="text-xl font-bold font-space mt-3">{mood.mood}</p>
    </div>
  );
};

export default RecipePage;
