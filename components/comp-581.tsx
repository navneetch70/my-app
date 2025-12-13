import InfoMenu from "@/components/navbar-components/info-menu";
import Logo from "@/components/navbar-components/logo";
import NotificationMenu from "@/components/navbar-components/notification-menu";
import UserMenu from "@/components/navbar-components/user-menu";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Ellipsis, MessageCircle, Star, Plug, Bot } from "lucide-react";
import InviteBtnComponent from "./comp-114";

// Navigation links array
const navigationLinks = [
  { href: "#", icon: Star, label: "Sidekick" },
  { href: "#", icon: Plug, label: "Integrate" },
  { href: "#", icon: Bot, label: "Automate" },
];

export default function NavComponent() {
  return (
    <header>
      <div className="flex h-16 items-center gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2 flex">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="py-1.5 font-medium text-muted-foreground hover:text-primary flex flex-row items-center gap-2"
                    >
                      <Icon size={16} className="opacity-70" />
                      <span>{link.label}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <MessageCircle />
            <UserMenu />
            <InviteBtnComponent />
            <Ellipsis />
          </div>
        </div>
      </div>
    </header>
  );
}
