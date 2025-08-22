import { RootLayoutProps } from "@/types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
