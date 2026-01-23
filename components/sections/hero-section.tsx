import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70" />
            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Specialist integrations & system reliability for{" "}
                        <span className="text-primary">high-risk platforms</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                        We handle the critical systems others get wrong. Premium consultancy for
                        Enterprises who need guaranteed outcomes, not just code.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" variant="cta" className="w-full sm:w-auto text-base">
                                Talk to a Senior Engineer
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                                View Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
