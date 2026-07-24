"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-border last:border-b-0 transition-colors duration-[250ms] ease-out",
      "data-[state=open]:bg-white/[0.03]",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 cursor-pointer items-center justify-between gap-4 py-6 text-left text-base font-semibold text-foreground outline-none transition-colors duration-[250ms] ease-out",
        "hover:text-primary focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        "data-[state=open]:text-primary data-[state=open]:[&_svg]:rotate-180 data-[state=open]:[&_svg]:text-primary",
        className,
      )}
      {...props}
    >
      <span className="min-w-0 flex-1">{children}</span>
      <ChevronDown
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-[250ms] ease-out"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-body text-muted-foreground",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    )}
    {...props}
  >
    <div
      className={cn(
        "border-l-2 border-primary/70 pb-6 pl-4 pt-0 leading-relaxed",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
