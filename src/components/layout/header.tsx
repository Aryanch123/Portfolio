'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/app/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ inSheet }: { inSheet?: boolean }) => (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "font-medium text-foreground/80 transition-colors hover:text-foreground",
            inSheet ? "text-lg" : "text-sm"
          )}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 dark:bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="font-headline text-2xl">A</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            <NavLinks />
          </nav>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="https://drive.google.com/file/d/17VCbW5HgEqLCt9DY27Za3L-iD55Kz3yd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </div>


        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                  <span className="font-headline text-2xl">A</span>
                </Link>
                <nav className="flex flex-col gap-4 mt-4">
                  <NavLinks inSheet />
                </nav>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <Link href="https://drive.google.com/file/d/17VCbW5HgEqLCt9DY27Za3L-iD55Kz3yd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
