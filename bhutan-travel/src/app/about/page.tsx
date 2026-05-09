import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-heading text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We are currently crafting an extraordinary narrative for this page. Please check back later.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full px-8">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
