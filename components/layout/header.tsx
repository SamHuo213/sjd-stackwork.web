import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-xl tracking-tight">SJD Stackwork</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                            <Link href="/services" className="hover:text-foreground transition-colors">
                                Services
                            </Link>
                            <Link href="/case-studies" className="hover:text-foreground transition-colors">
                                Case Studies
                            </Link>
                            <Link href="/how-we-work" className="hover:text-foreground transition-colors">
                                How We Work
                            </Link>
                            <Link href="/about" className="hover:text-foreground transition-colors">
                                About
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link href="/contact">
                            <Button variant="cta" size="sm">
                                Talk to a Senior Engineer
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
