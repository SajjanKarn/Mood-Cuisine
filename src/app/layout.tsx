import type { Metadata } from "next";
import { Space_Grotesk, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "MoodCuisine: Discover Recipes to Match Your Mood | Recipe Inspiration for Every Emotion",
  description:
    "MoodCuisine brings tailored recipes to your fingertips, offering meal ideas that match your mood. Whether you're feeling adventurous, comforted, or energized, find the perfect dish for every occasion. Explore our mood-based recipe generator to make cooking enjoyable and personalized.",
  keywords:
    "recipe generator, mood-based recipes, mood cuisine, recipe inspiration, cooking based on mood, personalized recipes, food recommendations, meal suggestions, emotional cooking, mood matching meals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${urbanist.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
