import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to de-risk your critical systems?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8">
                        Schedule a confidential consultation with our technical leadership. No sales fluff, just engineering strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-bold">
                                Talk to a Senior Engineer
                            </Button>
                        </Link>
                        {/* <Link href="/services">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                Explore Services
                            </Button>
                        </Link> */}
                    </div>
                </div>
            </Container>
        </section>
    );
}
