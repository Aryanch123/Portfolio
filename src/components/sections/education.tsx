import { EDUCATION } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function EducationSection() {
    return (
        <Section id="education">
            <SectionHeader title="Education" />
            <div className="relative mx-auto max-w-3xl">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent -translate-x-12 md:-translate-x-16">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute left-0 top-8 h-[calc(100%-2rem)] w-0.5 bg-border -translate-x-8 md:-translate-x-12" aria-hidden="true"></div>
                <div className="space-y-8">
                    {EDUCATION.map((edu, index) => (
                        <Card key={index} className="bg-[#191a1a]">
                            <div className="relative pl-8">
                                <CardHeader className="p-0">
                                    <div className="flex w-full flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 p-6 pb-0">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white">{edu.institute}</h3>
                                            <p className="text-card-foreground/80">{edu.degree}</p>
                                        </div>
                                        <div className="text-sm text-foreground/60 shrink-0 text-left sm:text-right">
                                            <p>{edu.timeline}</p>
                                            <p>{edu.location}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 pt-4">
                                    <ul className="list-disc space-y-2 pl-5 text-foreground/80">
                                        {edu.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                    
                                    {/* @ts-ignore */}
                                    {edu.keyCoursework && (
                                        <div className="mt-6">
                                            <h4 className="font-semibold text-foreground/90 mb-3">Key Coursework:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {/* @ts-ignore */}
                                                {edu.keyCoursework.map((course: string) => (
                                                    <Badge key={course} variant="secondary">{course}</Badge>
                                                ))}
                                            </div>
                                            {/* @ts-ignore */}
                                            {edu.courseworkLink && (
                                                <Link href={"https://www.linkedin.com/in/atharvsrivastava-/"} className="text-sm text-accent hover:underline mt-4 inline-block" target="_blank" rel="noopener noreferrer">
                                                    Complete Coursework ↗
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
