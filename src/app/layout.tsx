import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
    variable: "--font-m-plus-rounded",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "RoalisDerma",
    description: "Ciência e Saúde para a Beleza da pele.",
    icons: {
        icon: '/Images/logo.svg',
        shortcut: '/Images/logo.svg',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${mPlusRounded.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
