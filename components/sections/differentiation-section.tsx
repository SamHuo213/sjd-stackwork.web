import { Container } from "@/components/layout/container";
import { Check } from "lucide-react";

const differentiators = [
    {
        title: "Specialists, not Generalists",
        description: "We don't do marketing sites or basic apps. We only touch complex, high-risk systems.",
    },
    {
        title: "Senior Talent Only",
        description: "No juniors learning on your project. Every engineer has 10+ years of experience.",
    },
    {
        title: "Outcome Guaranteed",
        description: "We define success metrics upfront and don't stop until they are met.",
    },
];

export function DifferentiationSection() {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Why <span className="text-primary">SJD Stackwork</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Most agencies focus on speed and aesthetics. We focus on stability, security, and scalability. When the stakes are high, you need a partner who understands the risks.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {differentiators.map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                                    <Check className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
