import { CustomButton } from "@/components/ui";

const Home = () => {
  return (
    <div className="bg-customPrimary px-7 py-20 grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center">
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
        <img
          src="https://cdn-icons-png.flaticon.com/512/64/64788.png"
          alt="chef"
          className="w-20"
        />
      </div>
      <div>
        <img
          src="https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg"
          alt="chef"
          className="w-auto h-[250px] neubrutalism-shadow md:rotate-[-10deg] md:h-[300px]"
        />
        <img
          src="https://thesoutherntable.wordpress.com/wp-content/uploads/2014/01/wpid-7-up-recipe-book-5.jpg?w=558"
          alt="chef"
          className="mt-5 md:mt-0 w-auto h-[250px] neubrutalism-shadow md:rotate-[-10deg] md:h-[300px]"
        />
      </div>
    </div>
  );
};
export default Home;
