import { useId } from "react";

import { Input } from "@/components/ui/input";

export default function InputComponent() {
  const id = useId();
  return (
    <div className="w-[70%]">
      <Input
        id={id}
        placeholder="Email"
        type="email"
        value={"Unexpected Screen When Opening Shared Hubstack Link"}
      />
    </div>
  );
}
