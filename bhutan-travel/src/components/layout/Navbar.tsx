"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isTransparent = pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        !isTransparent
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Plane className={cn("h-8 w-8", !isTransparent ? "text-primary" : "text-white")} />
            <span
              className={cn(
                "font-heading text-2xl font-bold",
                !isTransparent ? "text-primary" : "text-white"
              )}
            >
              GlenTrip
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? !isTransparent ? "text-primary" : "text-white"
                    : !isTransparent ? "text-muted-foreground" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/packages">
              <Button
                variant={!isTransparent ? "default" : "secondary"}
                className="rounded-full px-6"
              >
                Book Your Journey
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("h-6 w-6", !isTransparent ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", !isTransparent ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-background border-b shadow-lg md:hidden p-4"
        >
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4">Book Your Journey</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
