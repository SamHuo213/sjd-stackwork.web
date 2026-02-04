import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20">
                <Container>
                    <div className="mx-auto flex max-w-2xl flex-col gap-16">
                        <section className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight">About SJD Stackwork</h1>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                SJD Stackwork is a Dependency & Platform Risk Retainer for SaaS and mid-market engineering teams that need platform risk to be owned, not managed ad hoc.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                We operate continuously in the background, so dependency and platform risk stays under control without becoming a recurring roadmap debate.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                We exist because dependency upgrades, security patches, and platform risk are mission-critical, but structurally unowned inside most engineering organizations.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Internal teams are incentivized to ship features.
                                <br/>
                                Tools can detect issues.
                                <br/>
                                But no one owns the outcome end-to-end.
                                <br/>
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold tracking-tight">What We Own</h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                For a flat monthly retainer, SJD Stackwork takes ongoing ownership of dependency and platform risk.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                That ownership includes deciding what to upgrade, when to upgrade it, how to test it safely, and how to ship it to production with rollback plans.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                We also provide ongoing visibility to engineering leadership through periodic updates and risk reporting, so dependency and platform risk is continuously understood, not rediscovered during incidents or audits.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                We’re not a project team.
                                <br/>
                                We don't work tickets.
                                <br/>
                                We own a risk category end-to-end.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold tracking-tight">Who&apos;s Behind It</h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                SJD Stackwork is led by <span className="font-semibold">Sam Huo</span>, an engineer who
                                has spent years inside complex, high-reliability, cloud-native systems where downtime
                                and regressions are not acceptable.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Sam&apos;s work has focused on the in-between layers that carry real risk but rarely
                                get a clean owner: internal platforms, shared services, build and deploy pipelines,
                                observability, and the dependency graph that ties it all together. He is comfortable
                                pairing with staff+ engineers, scrutinizing production behavior, and making tradeoffs
                                explicit so leaders can move forward with eyes open.
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                You won&apos;t get a slide deck and a handoff. You&apos;ll get a partner who will read
                                the logs, trace the calls, and leave you with simpler, more dependable systems your
                                teams can maintain.
                            </p>
                        </section>

                        <section className="flex flex-col items-center gap-4 pt-2">
                            <Image
                                src="/sam-huo-portrait.jpg"
                                alt="Portrait of Sam Huo"
                                width={220}
                                height={220}
                                className="rounded-xl border bg-muted object-cover"
                            />
                            <div className="flex items-center gap-3">
                                <p className="text-sm text-muted-foreground">
                                    Sam Huo &mdash; Founder &amp; Principal Engineer
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/sam-huo-23358233/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View Sam Huo on LinkedIn"
                                >
                                    <Image
                                        src="/LinkedIn_icon.svg"
                                        alt="LinkedIn icon"
                                        width={24}
                                        height={24}
                                        className="hover:opacity-80 transition-opacity"
                                    />
                                </a>
                            </div>
                        </section>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
