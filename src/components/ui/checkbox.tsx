import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 rounded-lg border-2 border-primary/30 bg-background ring-offset-background transition-all duration-300 ease-out hover:border-primary hover:rotate-6 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-primary data-[state=checked]:via-accent data-[state=checked]:to-primary data-[state=checked]:border-transparent data-[state=checked]:shadow-[0_0_25px_hsl(var(--accent)/0.8),inset_0_1px_3px_rgba(255,255,255,0.2)] data-[state=checked]:rotate-0 data-[state=checked]:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-white animate-scale-in")}>
      <Check className="h-4 w-4 stroke-[3.5px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
