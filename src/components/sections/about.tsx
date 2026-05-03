import { ABOUT } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";

export function AboutSection() {
  const paragraphs = ABOUT.text.split('\n').map(p => p.trim()).filter(p => p.length > 0);
  return (
    <Section id="about">
      <SectionHeader title={ABOUT.title} />
      <div className="mx-auto max-w-3xl space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-foreground/90 leading-relaxed text-center">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
