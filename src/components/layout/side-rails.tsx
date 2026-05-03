'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONTACT } from '@/app/data';
import { cn } from '@/lib/utils';

export function SideRails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('intro');
      const contactSection = document.getElementById('contact');
      if (introSection && contactSection) {
        const isPastIntro = introSection.getBoundingClientRect().bottom <= 0;
        const isBeforeContact = contactSection.getBoundingClientRect().top > window.innerHeight * 0.75;
        setIsVisible(isPastIntro && isBeforeContact);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
        "fixed bottom-0 z-30 hidden w-full transition-opacity duration-300 lg:block", 
        !isVisible && "opacity-0 pointer-events-none"
    )}>
      
      {/* Left Rail */}
      <div className="absolute bottom-0 left-12 flex flex-col-reverse items-center gap-6">
        <div className="h-[16vh] w-px bg-[#b0bec4]" />
        <div className="flex flex-col items-center gap-4">
          {CONTACT.socials.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#b0bec4] transition-colors">
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Rail */}
      <div className="absolute bottom-0 right-12 flex flex-col-reverse items-center gap-6">
        <div className="h-[16vh] w-px bg-[#b0bec4]" />
        <div className="[writing-mode:vertical-rl]">
          <a href={`mailto:${CONTACT.email}`} className="p-2 text-sm font-lato tracking-widest text-[#b0bec4] transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
