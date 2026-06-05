import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
//import { LocaleSwitcher } from "@/components/ui/locale-switcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ambyte Agency",
  description: "Ambyte Agency - Empowering Your Digital Future with Modern Web Development and Innovation",
  openGraph: {
    title: "Ambyte Agency",
    description: "Empowering Your Digital Future with Modern Web Development and Innovation",
    url: "https://ambyte-agency.com",
    siteName: "Ambyte Agency",
    images: [
      {
        url: "https://ambyte-agency.com/assets/logobg-BXPDcwaC.png",
        width: 1200,
        height: 630,
        alt: "Ambyte Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambyte Agency",
    description: "Empowering Your Digital Future with Modern Web Development and Innovation",
    images: ["https://ambyte-agency.com/assets/logobg-BXPDcwaC.png"],
  },
  icons: {
    icon: "https://ambyte-agency.com/assets/logobg-BXPDcwaC.png",
    shortcut: "https://ambyte-agency.com/assets/logobg-BXPDcwaC.png",
    apple: "https://ambyte-agency.com/assets/logobg-BXPDcwaC.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
         
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
