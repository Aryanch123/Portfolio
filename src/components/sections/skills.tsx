import { SKILLS } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader title="Technical Skills" />
      <div className="mx-auto max-w-4xl">
        <TooltipProvider>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {SKILLS.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="rounded-full text-sm py-3 px-5 bg-[#2b3a3b] border border-foreground/50 hover:bg-[#2b3a3b] hover:text-foreground">
                    {skill.name}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
      <p className="mt-4 text-center italic text-foreground/60">
        Psst... hovering over the buttons gives more info.
      </p>
    </Section>
  );
}
