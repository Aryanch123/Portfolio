"use client";

import { useState } from "react";
import { SKILLS } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader title="Technical Skills" />
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {SKILLS.map((skill) => (
            <SkillPopover key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-center italic text-foreground/60">
        Psst... hover or tap the buttons for more info.
      </p>
    </Section>
  );
}

type Skill = (typeof SKILLS)[number];

function SkillPopover({ skill }: { skill: Skill }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          aria-expanded={open}
          className="rounded-full text-sm py-3 px-5 bg-[#2b3a3b] border border-foreground/50 hover:bg-[#2b3a3b] hover:text-foreground"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          {skill.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[min(18rem,calc(100vw-2rem))] text-sm leading-relaxed"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {skill.description}
      </PopoverContent>
    </Popover>
  );
}
