import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Database, ShieldCheck, Workflow } from "lucide-react";

const services = [
    {
        title: "High-Risk Integrations",
        description:
            "Seamlessly connect critical systems without downtime or data loss. We specialize in complex API orchestrations and legacy system bridging.",
        icon: Workflow,
    },
    {
        title: "System Reliability Engineering",
        description:
            "Eliminate outages and performance bottlenecks. We implement robust observability, auto-scaling, and self-healing architectures.",
        icon: ShieldCheck,
    },
    {
        title: "Legacy Modernization",
        description:
            "Safely migrate from monoliths to microservices. We de-risk the transition while maintaining business continuity.",
        icon: Database,
    },
];

export function ServicesSection() {
    return (
        <section className="py-20 md:py-32">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Engineering for the <span className="text-primary">Critical Path</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We don't build simple websites. We engineer the backbone of your digital infrastructure.
                        </p>
                    </div>
                    <Link href="/services">
                        <Button variant="ghost" className="group">
                            View All Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
