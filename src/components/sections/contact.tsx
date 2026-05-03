import { CONTACT } from "@/app/data";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">
          {CONTACT.title}
        </h2>
        <p className="mt-4 text-foreground/80 md:text-xl">
          {CONTACT.text}
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-primary-foreground">
          <a href={`mailto:${CONTACT.email}`}>Say Hello</a>
        </Button>

        <div className="mt-12 flex justify-center gap-6">
          {CONTACT.socials.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
              <social.icon className="h-8 w-8" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center text-foreground/60 space-y-2">
          <div>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
              {CONTACT.email}
            </a>
          </div>
          {CONTACT.phone && (
            <div>{CONTACT.phone}</div>
          )}
        </div>
      </div>
    </Section>
  );
}
