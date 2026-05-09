"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const packages = [
  {
    id: 1,
    title: "Luxury Honeymoon Retreat",
    location: "Paro & Punakha",
    duration: "7 Days / 6 Nights",
    price: "₹85,000",
    rating: 4.9,
    reviews: 124,
    image: "/images/honeymoon_paro.png",
    tags: ["Luxury", "Couples"],
  },
  {
    id: 2,
    title: "Majestic Mountain Adventure",
    location: "Thimphu, Paro & Bumthang",
    duration: "9 Days / 8 Nights",
    price: "₹1,10,000",
    rating: 4.8,
    reviews: 86,
    image: "/images/adventure_thimphu.png",
    tags: ["Adventure", "Scenic"],
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    location: "Thimphu & Punakha",
    duration: "5 Days / 4 Nights",
    price: "₹65,000",
    rating: 4.7,
    reviews: 210,
    image: "/images/cultural_dzong.png",
    tags: ["Culture", "Family"],
  },
];

export function FeaturedPackages() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Curated <span className="text-primary italic">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our handpicked itineraries designed for those seeking luxury, adventure, and unparalleled serenity in the Land of the Thunder Dragon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="overflow-hidden group border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-3xl">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {pkg.tags.map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading text-xl font-bold line-clamp-2">{pkg.title}</h3>
                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-bold">
                      <Star className="h-3 w-3 fill-primary" />
                      {pkg.rating}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Starting from</p>
                      <p className="text-xl font-bold text-foreground">{pkg.price}</p>
                    </div>
                    <Button variant="outline" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full px-8">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
