import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "../src/components";
//styles
import "../src/styles/globals.scss";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Fantasy Primera FEB",
    description: "Aplicación Fantasy de la Primera FEB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <section>
                    <Navbar />
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
                        <main className="">{children}</main>
                    </div>
                </section>
            </body>
        </html>
    );
}
