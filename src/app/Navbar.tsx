import { CustomButton } from "@/components/ui";
import { LucideSearch } from "lucide-react";
import Link from "next/link";

type NavbarLink = {
  href: string;
  label: string;
};

const links: NavbarLink[] = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 border-black border-[3px] bg-white">
      <div>
        <h1 className="font-space text-2xl font-bold">MoodCuisine</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-x-8 font-urbanist font-medium text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-3">
        <CustomButton>Login</CustomButton>
        <LucideSearch size={24} />
      </div>
    </div>
  );
};
export default Navbar;
