import type { Metadata } from "next";
import "./globals.css";
import { RootLayoutProps } from "@/types";
import CustomToastContainer from "@/components/shared/custom-toast-container";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    template: '%s | Taxi App',
    default: 'Taxi App'
  },
  description: "Application for a taxi company",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider disableTransitionOnChange defaultTheme="dark" attribute={'class'}>
          {children}
          <CustomToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
