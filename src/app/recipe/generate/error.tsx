"use client"; // Error boundaries must be Client Components
import { CustomButton } from "@/components/ui";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="p-5 bg-customPrimary h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-space font-bold text-[30px] lg:text-[50px]">
          Oops! Something went wrong!
        </h2>
        <CustomButton
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </CustomButton>
      </div>
    </div>
  );
}
