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
                </Container>
            </main>
            <Footer />
        </div>
    );
}
