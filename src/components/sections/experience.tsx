import { EXPERIENCE } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Work Experience" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent -translate-x-8 md:-translate-x-12">
          <Briefcase className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="absolute left-0 top-8 h-[calc(100%-2rem)] w-0.5 bg-border -translate-x-4 md:-translate-x-8" aria-hidden="true"></div>
        <Accordion type="single" collapsible className="w-full space-y-8">
          {EXPERIENCE.map((job, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-none">
              <Card className="bg-card">
                <div className="relative pl-8">
                  <AccordionTrigger className="text-left hover:no-underline p-6">
                    <div className="flex w-full flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{job.company}</h3>
                        <p className="text-card-foreground/80">{job.designation}</p>
                      </div>
                      <div className="text-sm text-foreground/60 shrink-0 text-left sm:text-right">
                        <p>{job.timeline}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ul className="mt-0 list-disc space-y-2 pl-5 text-foreground/80">
                      {job.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </div>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
