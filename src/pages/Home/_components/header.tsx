import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="border-b-1 fixed top-0 z-10 flex h-16 w-full items-center justify-between border px-7 shadow-sm">
      <div className="flex items-center justify-center ">
        <div className="">
          <img src="./logo.png" alt="Logo" className="h-7 w-7 cursor-pointer" />
        </div>
        <NavigationMenu className="ml-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Download</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/document">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Document
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex space-x-2 font-semibold">
        <Button size={"default"} variant="ghost">
          Login
        </Button>
        <Button size={"default"}>Get free account</Button>
      </div>
    </div>
  );
};
