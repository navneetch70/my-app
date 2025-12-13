import { ChevronDownIcon, GitForkIcon, Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function InviteBtnComponent() {
  return (
    <div className="inline-flex divide-x divide-primary-foreground/30 rounded-md shadow-xs rtl:space-x-reverse border border-primary-foreground/20 bg-primary/10">
      <Button className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
        <Link2 aria-hidden="true" className="opacity-60" size={16} />
        Invite
        {/* <span className="-me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border border-primary-foreground/30 px-1 font-[inherit] font-medium text-[0.625rem] text-primary-foreground/60">
          18
        </span> */}
      </Button>
      <Button
        aria-label="Options"
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        size="icon"
      >
        <ChevronDownIcon aria-hidden="true" size={16} />
      </Button>
    </div>
  );
}
