import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SJD Stackwork | High-Risk Integrations & System Reliability",
  description: "Specialist consultancy for high-risk platforms. We handle critical integrations and system reliability where others fail.",
  verification: {
    google: "gIaWSc9N8zWVQMMLexO9Dq7OtVVShhvNDhV-jm211XM",
    other: {
      "msvalidate.01": "F4F85ED03853BA66CF8B848D2AC26970",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://www.useinflect.ai/inflect-tracking.js" data-tracking-key="inf_L1ExDzrkk48YD2lkqVVceyrDB1FNW5OK" data-inflect-install-version="2026-08-12.1"></script>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://www.useinflect.ai/api/bot-traffic/pixel?tk=inf_L1ExDzrkk48YD2lkqVVceyrDB1FNW5OK&iv=2026-08-12.1" alt="" width="1" height="1" style={{ display: "none" }} referrerPolicy="unsafe-url" />
      </head>
      <body
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          "antialiased font-sans bg-background text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
