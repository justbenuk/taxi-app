import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutProps } from "@/types";
import CustomToastContainer from "@/components/shared/custom-toast-container";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: {
    template: "%s | Taxi App",
    default: "Taxi App",
  },
  description: "Application for a taxi company",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SessionProvider session={session}>
          <ThemeProvider disableTransitionOnChange defaultTheme="dark" attribute={"class"}>
            {children}
            <CustomToastContainer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
