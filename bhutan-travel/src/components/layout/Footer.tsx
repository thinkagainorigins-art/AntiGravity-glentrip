import Link from "next/link";
import { Plane, Camera, Globe, MessageSquare, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-primary-foreground" />
              <span className="font-heading text-2xl font-bold">GlenTrip</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Experience the ultimate luxury travel from Kolkata to Bhutan. Discover premium packages, scenic views, and majestic mountains with tailored services.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/packages" className="text-muted-foreground hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Top Packages</h3>
            <ul className="space-y-4">
              <li><Link href="/packages/honeymoon" className="text-muted-foreground hover:text-white transition-colors">Honeymoon Retreat</Link></li>
              <li><Link href="/packages/luxury" className="text-muted-foreground hover:text-white transition-colors">Luxury Escape</Link></li>
              <li><Link href="/packages/adventure" className="text-muted-foreground hover:text-white transition-colors">Mountain Adventure</Link></li>
              <li><Link href="/packages/family" className="text-muted-foreground hover:text-white transition-colors">Family Vacation</Link></li>
              <li><Link href="/packages/cultural" className="text-muted-foreground hover:text-white transition-colors">Cultural Tour</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Park Street, Kolkata, West Bengal 700016, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground shrink-0" />
                <span className="text-muted-foreground">hello@glentrip.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GlenTrip Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
