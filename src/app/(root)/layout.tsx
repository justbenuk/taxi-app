import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { RootLayoutProps } from "@/types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-1 mt-10">{children}</div>
      <Footer />
    </div>
  );
}
