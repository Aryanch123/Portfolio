import { PROJECTS } from "@/app/data";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github } from "lucide-react";

export function ProjectsSection() {
    const projectImages = PlaceHolderImages;
    const featuredProject = PROJECTS.find(p => p.featured);
    const otherProjects = PROJECTS.filter(p => !p.featured);

    return (
        <Section id="work">
            <SectionHeader title="My Work" />
            <div className="mx-auto max-w-4xl">
                {featuredProject && (() => {
                    const image = typeof featuredProject.image === 'string'
                        ? projectImages.find(img => img.id === featuredProject.image)
                        : undefined;
                    return (
                        <Card className="mb-8 md:mb-12 flex flex-col overflow-hidden bg-card">
                            <CardHeader>
                                <CardTitle className="text-white">{featuredProject.name}</CardTitle>
                            </CardHeader>
                            
                            {image ? (
                                <div className="px-6">
                                    <div className="aspect-[2/1] w-full overflow-hidden rounded-lg border">
                                        <Image
                                            src={image.imageUrl}
                                            alt={featuredProject.name}
                                            width={1080}
                                            height={720}
                                            className="h-full w-full object-contain"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                </div>
                            ) : featuredProject.image ? (
                                <div className="px-6">
                                    <div className="aspect-[2/1] w-full overflow-hidden rounded-lg border">
                                        <Image
                                            src={featuredProject.image}
                                            alt={featuredProject.name}
                                            width={1080}
                                            height={720}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>
                            ) : null}

                            <CardContent className="flex-grow pt-6">
                                <p className="text-foreground/80 mb-4">{featuredProject.description}</p>
                                {featuredProject.details && (
                                    <ul className="list-disc space-y-2 pl-5 text-foreground/80 mb-4">
                                        {featuredProject.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {featuredProject.stack.map((tech) => (
                                        <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="ghost">
                                    <Link href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                                        <Github />
                                        GitHub
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })()}

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {otherProjects.map((project, index) => {
                        return (
                            <Card key={index} className="flex flex-col overflow-hidden bg-card">
                                <CardHeader>
                                    <CardTitle className="text-white">{project.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-foreground/80 mb-4">{project.description}</p>
                                    {project.details && (
                                        <ul className="list-disc space-y-2 pl-5 text-foreground/80 mb-4">
                                            {project.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="ghost">
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github />
                                            GitHub
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}