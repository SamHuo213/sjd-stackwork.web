import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70" />
            <Container className="relative z-10">
                <div className="max-w-3xlg">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Your team ships features.
                        <br />
                        <span className="text-primary">
                            Dependency risk accumulates quietly.
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                        Until a security issue, failed upgrade, or breaking change forces a decision no one planned to own.
                    </p>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                        SJD Stackwork takes ongoing, end-to-end ownership of dependency and platform risk, so it never becomes a roadmap debate.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" variant="cta" className="w-full sm:w-auto text-base">
                                Talk to a Senior Engineer
                            </Button>
                        </Link>
                        {/* <Link href="/case-studies">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                                View Case Studies
                            </Button>
                        </Link> */}
                    </div>
                </div>
            </Container>
        </section>
    );
}
