import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-brand",
    weight: ["400", "700", "900"],
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["300", "400", "600"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "UlerichLabs — System Design",
    description: "Sistema de Design UlerichLabs por Lucas e Luan",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
