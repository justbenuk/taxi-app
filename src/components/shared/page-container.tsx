import { cn } from "@/lib/utils";
import { PageLayoutProps } from "@/types";

export default function Pagecontainer({ children, className }: PageLayoutProps) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6 2xl:px-0', className)}>{children}</div>
  )
}

