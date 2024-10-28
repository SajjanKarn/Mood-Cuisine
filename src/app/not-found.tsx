import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-100 p-5">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-space text-black neubrutalism-border neubrutalism-shadow p-4 mb-5">
          404
        </h1>
        <p className="text-2xl font-urbanist text-black neubrutalism-border neubrutalism-shadow p-2">
          Oops! Page not found
        </p>
        <p className="mt-3 text-lg text-gray-700 font-medium font-urbanist">
          We can&apos;t seem to find the page you&apos;re looking for.
        </p>
      </div>
      <div className="mt-10">
        <Link
          href="/"
          className="text-lg font-space font-bold text-white bg-black neubrutalism-border neubrutalism-shadow py-2 px-6 rounded hover:bg-gray-800"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
