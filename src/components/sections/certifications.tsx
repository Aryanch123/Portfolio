import { CERTIFICATIONS } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <SectionHeader title="Certifications & Achievement" />
      <div className="mx-auto max-w-5xl">
        <Card className="bg-[#191a1a] p-6 md:p-8">
          <CardContent className="text-center px-0 py-0">
            <div className="mx-auto max-w-3xl">
              <ul className="list-disc space-y-3 pl-6 text-foreground/80 text-left">
                {CERTIFICATIONS.map((certification, index) => (
                  <li key={index}>{certification.title}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
