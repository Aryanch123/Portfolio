import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32",
        className
      )}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
    title: string;
    className?: string;
};

export function SectionHeader({ title, className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12 text-center", className)}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
                {title}
            </h2>
        </div>
    );
}
