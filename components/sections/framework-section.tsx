import { Container } from "@/components/layout/container";

const steps = [
    {
        number: "01",
        title: "Audit & Discovery",
        description: "We deep-dive into your architecture to identify risks and bottlenecks.",
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "We design a roadmap for stability and scalability, prioritizing critical paths.",
    },
    {
        number: "03",
        title: "Execution & Integration",
        description: "We implement changes with surgical precision, ensuring zero downtime.",
    },
    {
        number: "04",
        title: "Validation & Handoff",
        description: "We verify results against metrics and empower your team to maintain it.",
    },
];

export function FrameworkSection() {
    return (
        <section className="py-20 bg-secondary text-secondary-foreground">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Reliability Framework
                    </h2>
                    <p className="text-lg text-secondary-foreground/80">
                        A structured approach to de-risking your most critical systems.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="relative">
                            <div className="text-6xl font-bold text-secondary-foreground/10 mb-4 font-mono">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-secondary-foreground/70 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
