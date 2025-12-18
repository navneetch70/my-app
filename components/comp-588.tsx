"use client";

import {
  BellDot,
  Bot,
  CircleQuestionMark,
  Grip,
  HardDrive,
  HeartHandshake,
  Search,
  Slack,
  UserSearch,
} from "lucide-react";

import Logo from "@/components/navbar-components/logo";
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
import { theme } from "@/app/theme/theme";
/* Navigation links */
const navigationLinks = [
  { active: true, href: "#", icon: BellDot },
  { active: true, href: "#", icon: HardDrive },
  { active: true, href: "#", icon: UserSearch },
  { active: true, href: "#", icon: Slack },
  { active: true, href: "#", icon: Bot },
  { active: true, href: "#", icon: Search },
  { active: true, href: "#", icon: CircleQuestionMark },
  { active: true, href: "#", icon: HeartHandshake },
  { active: false, href: "#", icon: Grip },
];

export default function NavBarMainComponent() {
  return (
    <header
      className="w-full px-4 md:px-6"
      style={{
        backgroundColor: theme.surface.card,
        borderBottom: `1px solid ${theme.border.default}`,
      }}
    >
      <div className="flex h-16 items-center justify-between gap-4">
        {/* LEFT */}
        <div
          className="flex items-center gap-2 text-lg font-medium"
          style={{ color: theme.text.primary }}
        >
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          <span style={{ color: theme.text.secondary }}>
            monday work management
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {/* MOBILE MENU */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                style={{ color: theme.icon.primary }}
              >
                <svg
                  fill="none"
                  height={16}
                  width={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 12L20 12" />
                  <path d="M4 6H20" />
                  <path d="M4 18H20" />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-36 p-1 md:hidden"
              style={{
                backgroundColor: theme.surface.modal,
                border: `1px solid ${theme.border.default}`,
              }}
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={i} className="w-full">
                        <NavigationMenuLink
                          active={link.active}
                          href={link.href}
                          className="flex items-center gap-2 py-1.5"
                          style={{
                            color: theme.text.secondary,
                          }}
                        >
                          <Icon size={16} style={{ opacity: 0.7 }} />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* DESKTOP MENU */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <NavigationMenuItem key={i}>
                    <NavigationMenuLink
                      active={link.active}
                      href={link.href}
                      className="flex items-center gap-2 py-1.5"
                      style={{
                        color: link.active
                          ? theme.text.primary
                          : theme.text.secondary,
                      }}
                    >
                      <Icon size={16} style={{ opacity: 0.7 }} />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* USER */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
