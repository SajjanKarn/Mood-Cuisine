import { CustomButton } from "@/components/ui";
import { LucideMenu, LucideSearch } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <>
      <div className="flex justify-between items-center p-5 border-black border-[3px] bg-white">
        <div>
          <h1 className="font-space text-2xl font-bold">MoodCuisine</h1>
        </div>
        <nav>
          <ul className="hidden md:flex items-center gap-x-8 font-urbanist font-medium text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <LucideMenu size={24} />
            </SheetTrigger>
            <SheetContent className="bg-customPrimary border-black border-[3px]">
              <SheetHeader>
                <SheetTitle className="font-space text-lg underline">
                  Menu
                </SheetTitle>
                {/* navbar links */}
                <ul className="flex flex-col items-start gap-3 mt-5 font-urbanist font-semibold">
                  {links.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link href={link.href} className="hover:underline">
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center justify-between gap-3">
          <CustomButton>Login</CustomButton>
          <LucideSearch size={24} />
        </div>
      </div>
    </>
  );
};
export default Navbar;
