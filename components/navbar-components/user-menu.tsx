import {
  BoltIcon,
  BookOpenIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avataar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { theme } from "@/app/theme/theme";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/app/api/user.api";

export default function UserMenu() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  useEffect(() => {
    getUserProfile().then((response) => {
      setUser(response.data);
    });
  }, []);
  const name = user ? `${user.first_name} ${user.last_name}` : "Loading...";
  const email = user ? user.email : "Loading...";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 rounded-full"
          style={{
            backgroundColor: "transparent",
            color: theme.icon.primary,
          }}
        >
          <Avatar
            className="rounded-full"
            style={{
              border: `1px solid ${theme.border.default}`,
              backgroundColor: theme.surface.card,
            }}
          >
            <AvatarImage alt="Profile image" src="" />
            <AvatarFallback
              style={{
                color: theme.text.primary,
                backgroundColor: theme.surface.card,
              }}
            >
              {name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="max-w-64"
        style={{
          backgroundColor: theme.surface.modal,
          border: `1px solid ${theme.border.default}`,
          color: theme.text.primary,
        }}
      >
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span
            className="truncate text-sm font-medium"
            style={{ color: theme.text.primary }}
          >
            {name}
          </span>
          <span
            className="truncate text-xs"
            style={{ color: theme.text.muted }}
          >
            {email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator
          style={{ backgroundColor: theme.border.subtle }}
        />

        {/* <DropdownMenuGroup>
          <DropdownMenuItem style={{ color: theme.text.secondary }}>
            <BoltIcon size={16} style={{ opacity: 0.6 }} />
            <span>Option 1</span>
          </DropdownMenuItem>

          <DropdownMenuItem style={{ color: theme.text.secondary }}>
            <Layers2Icon size={16} style={{ opacity: 0.6 }} />
            <span>Option 2</span>
          </DropdownMenuItem>

          <DropdownMenuItem style={{ color: theme.text.secondary }}>
            <BookOpenIcon size={16} style={{ opacity: 0.6 }} />
            <span>Option 3</span>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}

        {/* <DropdownMenuSeparator
          style={{ backgroundColor: theme.border.subtle }}
        />

        <DropdownMenuGroup>
          <DropdownMenuItem style={{ color: theme.text.secondary }}>
            <PinIcon size={16} style={{ opacity: 0.6 }} />
            <span>Option 4</span>
          </DropdownMenuItem>

          <DropdownMenuItem style={{ color: theme.text.secondary }}>
            <UserPenIcon size={16} style={{ opacity: 0.6 }} />
            <span>Option 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}

        <DropdownMenuSeparator
          style={{ backgroundColor: theme.border.subtle }}
        />

        <DropdownMenuItem
          style={{
            color: theme.text.primary,
          }}
        >
          <LogOutIcon size={16} style={{ opacity: 0.6 }} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
