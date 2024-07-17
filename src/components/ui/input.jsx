import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md outline-none border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 focus:border-bgInput focus:ring-1 focus:ring-bgInput focus:shadow-lg focus:shadow-bgInput",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
