import { INTRO } from "@/app/data";

export function IntroSection() {
  return (
    <section id="intro" className="relative flex h-screen w-full flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline">
          {INTRO.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-foreground/80 md:text-xl">
          {INTRO.subheadline}
        </p>
      </div>
    </section>
  );
}
