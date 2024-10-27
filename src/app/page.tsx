import { CustomButton } from "@/components/ui";

const Home = () => {
  return (
    <div className="bg-customPrimary h-screen px-7 py-14">
      <div className="max-w-2xl flex flex-col gap-5">
        <h1 className="text-[35px] font-space capitalize font-medium md:text-[50px] leading-tight">
          Your ultimate <br />
          <span className="text-white">recipe</span> destination!
        </h1>
        <p className="font-urbanist text-base md:text-xl font-medium">
          Whether you&apos;r seeking quick and easy meals or full course dinner
          recipes, we have it all. Browse through our collection of recipes and
          find the perfect dish for you. We have a wide range of recipes from
          different cuisines and cultures. Our recipes are easy to follow and
          are perfect for beginners and experienced cooks alike.
        </p>
        <div className="flex items-center gap-5 mt-4">
          <CustomButton>Explore Recipes</CustomButton>
          <CustomButton variant="secondary">Join Community</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Home;
