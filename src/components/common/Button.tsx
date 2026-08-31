import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
}
export default function Button({ children, href = "#", className, ...props }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center justify-center gap-2 bg-[#f4f4f4] text-black px-8 py-3 rounded-full text-[13px] font-semibold tracking-widest hover:bg-white transition-colors w-fit",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight
        size={16}
        strokeWidth={2}
        className="group-hover:translate-x-1 transition-transform"
      />
    </a>
  );
}
