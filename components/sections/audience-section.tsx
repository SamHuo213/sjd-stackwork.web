import { Container } from "@/components/layout/container";
import { CheckCircle2 } from "lucide-react";

const painPoints = [
    "Your team is bogged down by technical debt",
    "Integrations are fragile and prone to breaking",
    "Downtime is costing you revenue and reputation",
    "You need senior expertise, not junior devs",
];

export function AudienceSection() {
    return (
        <section className="py-20 bg-muted/30">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Built for <span className="text-primary">Engineering Leaders</span> who can't afford failure.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            You're responsible for high-stakes systems. You don't need another agency that learns on your dime. You need specialists who have seen it before and know how to fix it.
                        </p>
                        <ul className="space-y-4">
                            {painPoints.map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-cta flex-shrink-0" />
                                    <span className="text-foreground font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/50 flex items-center justify-center overflow-hidden">
                        {/* Abstract representation of system stability */}
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <div key={i} className="bg-foreground/10 rounded-sm" />
                            ))}
                        </div>
                        <div className="relative z-10 p-8 bg-background/80 backdrop-blur border border-border rounded-xl shadow-2xl max-w-xs">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div>
                                    <div className="font-bold">System Status</div>
                                    <div className="text-xs text-muted-foreground">All systems operational</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-muted rounded w-full" />
                                <div className="h-2 bg-muted rounded w-3/4" />
                                <div className="h-2 bg-muted rounded w-5/6" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
