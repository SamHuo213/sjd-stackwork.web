import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        client: "FinTech Corp",
        title: "Zero-downtime migration of a $2B transaction platform",
        result: "100% data integrity",
        tags: ["Migration", "FinTech"],
    },
    {
        client: "HealthData Inc",
        title: "Stabilizing a legacy patient record system for scale",
        result: "99.99% uptime achieved",
        tags: ["Healthcare", "Legacy"],
    },
];

export function CaseStudiesSection() {
    return (
        <section className="py-20 md:py-32">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Proven <span className="text-primary">Outcomes</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Real results for high-risk environments.
                        </p>
                    </div>
                    <Link href="/case-studies">
                        <Button variant="outline">View All Case Studies</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study) => (
                        <div
                            key={study.client}
                            className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                        >
                            <div className="mb-4 flex gap-2">
                                {study.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {study.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">{study.client}</p>
                            <div className="flex items-center justify-between border-t border-border pt-6">
                                <span className="font-mono text-sm font-bold text-cta">
                                    {study.result}
                                </span>
                                <span className="text-sm font-medium flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
