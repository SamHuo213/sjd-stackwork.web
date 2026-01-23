import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function CaseStudiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20">
                <Container>
                    <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
                    <p className="text-lg text-muted-foreground">
                        This page is under construction.
                    </p>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
