const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-customSecondary">
      <div className="p-10 rounded-lg bg-customPrimary neubrutalism-shadow neubrutalism-border">
        <h1 className="text-3xl font-bold font-space mb-5">
          Generating Recipe 🍳
        </h1>
        <div className="animate-spin border-4 border-gray-300 border-t-4 border-t-black rounded-full h-16 w-16 mx-auto"></div>
      </div>
    </div>
  );
};

export default Loading;
