import Link from "next/link";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold-condensed tracking-tight text-foreground">
            WRATH OF ATHENA
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-accent transition-colors">
            Shop
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-foreground" />
            <span className="absolute -top-2 -right-2 flex h-3 w-3 items-center justify-center bg-accent text-xs font-bold text-background rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}