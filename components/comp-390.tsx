import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComponent() {
  return (
    <Avatar>
      <AvatarImage alt="Kelly King" src="/origin/avatar-80-07.jpg" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}
