import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="font-bold text-xl tracking-tight">
                            SJD Stackwork
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Specialist integrations & system reliability for high-risk platforms.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
                        <div>
                            <h3 className="font-semibold mb-4">Services</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/services" className="hover:text-foreground transition-colors">
                                        Integrations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-foreground transition-colors">
                                        System Reliability
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-foreground transition-colors">
                                        Audits
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/about" className="hover:text-foreground transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className="hover:text-foreground transition-colors">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/how-we-work" className="hover:text-foreground transition-colors">
                                        How We Work
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Connect</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/contact" className="hover:text-foreground transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} SJD Stackwork. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
