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

export default function UserMenu() {
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
              KK
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
            Keith Kennedy
          </span>
          <span
            className="truncate text-xs"
            style={{ color: theme.text.muted }}
          >
            k.kennedy@coss.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator
          style={{ backgroundColor: theme.border.subtle }}
        />

        <DropdownMenuGroup>
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
        </DropdownMenuGroup>

        <DropdownMenuSeparator
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
        </DropdownMenuGroup>

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
