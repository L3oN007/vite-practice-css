import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  return (
    <div className="border-b-1 fixed top-0 z-10 flex h-12 w-full items-center justify-between border px-7 shadow-sm">
      <div className="flex items-center justify-center ">
        <div className="">
          <img src="./logo.png" alt="Logo" className="h-5 w-5 cursor-pointer" />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link2</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex space-x-2">
        <Button size={"sm"} variant="ghost">
          Register
        </Button>
        <Button size={"sm"}>Login</Button>
      </div>
    </div>
  );
};
