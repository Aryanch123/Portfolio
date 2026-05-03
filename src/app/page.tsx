'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IntroSection } from "@/components/sections/intro";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { Particles } from "@/components/shared/particles";
import { SunRays } from "@/components/shared/sun-rays";
import { cn } from '@/lib/utils';
import { SideRails } from '@/components/layout/side-rails';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsLoaderVisible(false);
      }, 700);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoaderVisible && (
        <div
          className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center bg-[#0d3b3b] transition-opacity duration-700",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        >
          <span className="font-headline text-8xl md:text-9xl text-accent">A</span>
        </div>
      )}

      <div
        className={cn(
          "bg-background dark:bg-transparent relative transition-opacity duration-700",
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <SunRays />
        <Particles className="absolute inset-0 -z-20" quantity={210} />
        <Header />
        <main>
          <IntroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
        <SideRails />
      </div>
    </>
  );
}
