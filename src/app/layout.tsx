import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Franz Boehlke",
    description: "Franz Boehlke Marketplace",
    // viewport: "width=device-width, initial-scale=1.0",
    keywords: "Franz Boehlke, art, artworks, products, paintings, sculptures",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
