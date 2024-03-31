import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/toaster-provider";
import React from "react";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: "en" | "uk" | "pl";
  }
}

export const metadata: Metadata = {
  title: "KinderSprout",
  description: "",
};

const RootLayout = ({
  children,
  params: { locale }
}: RootLayoutProps) => {
  const messages = useMessages();


  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider />
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>

      </html>
    </ClerkProvider>
  );
}

export default RootLayout;