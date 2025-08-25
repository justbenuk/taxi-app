import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { RootLayoutProps } from "@/types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
