"use client"

import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20">
                <Container>
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-lg text-muted-foreground">
                        For inquiries, please email{" "}
                        <a
                            href="mailto:sam.huo@sjdstackwork.com"
                            className="text-primary underline underline-offset-4"
                        >
                            sam.huo@sjdstackwork.com
                        </a>
                        .
                    </p>
                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-semibold">
                            Book a Free Consultation
                        </h2>
                        <p className="text-muted-foreground">
                            Prefer to talk live? Pick a time that works for you using the
                            scheduler below.
                        </p>
                        <div className="mt-4">
                            <iframe
                                title="Schedule a 30 minute consultation with Sam Huo"
                                src="https://calendly.com/sam-huo-sjdstackwork/30min"
                                className="w-full rounded-xl border border-border"
                                style={{ minHeight: "700px" }}
                                frameBorder="0"
                            ></iframe>
                            <p className="mt-3 text-sm text-muted-foreground">
                                If the scheduler doesn&apos;t load,{" "}
                                <a
                                    href="https://calendly.com/sam-huo-sjdstackwork/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline underline-offset-4"
                                >
                                    open Calendly in a new tab
                                </a>
                                .
                            </p>
                        </div>
                    </section>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
