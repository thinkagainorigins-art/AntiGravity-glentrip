"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const allPackages = [
  {
    id: 1,
    slug: "luxury-honeymoon-retreat",
    title: "Luxury Honeymoon Retreat",
    location: "Paro & Punakha",
    duration: "7 Days / 6 Nights",
    price: 85000,
    priceDisplay: "₹85,000",
    rating: 4.9,
    category: "Honeymoon",
    image: "/images/honeymoon_paro.png",
    tags: ["Luxury", "Couples"],
  },
  {
    id: 2,
    slug: "majestic-mountain-adventure",
    title: "Majestic Mountain Adventure",
    location: "Thimphu, Paro & Bumthang",
    duration: "9 Days / 8 Nights",
    price: 110000,
    priceDisplay: "₹1,10,000",
    rating: 4.8,
    category: "Adventure",
    image: "/images/adventure_thimphu.png",
    tags: ["Adventure", "Scenic"],
  },
  {
    id: 3,
    slug: "cultural-heritage-tour",
    title: "Cultural Heritage Tour",
    location: "Thimphu & Punakha",
    duration: "5 Days / 4 Nights",
    price: 65000,
    priceDisplay: "₹65,000",
    rating: 4.7,
    category: "Cultural",
    image: "/images/cultural_dzong.png",
    tags: ["Culture", "Family"],
  },
  {
    id: 4,
    slug: "budget-bhutan-escape",
    title: "Budget Bhutan Escape",
    location: "Phuentsholing & Thimphu",
    duration: "4 Days / 3 Nights",
    price: 35000,
    priceDisplay: "₹35,000",
    rating: 4.5,
    category: "Budget",
    image: "/images/hero_bhutan.png",
    tags: ["Budget", "Quick"],
  },
  {
    id: 5,
    slug: "family-nature-vacation",
    title: "Family Nature Vacation",
    location: "Paro, Thimphu & Wangdue",
    duration: "8 Days / 7 Nights",
    price: 95000,
    priceDisplay: "₹95,000",
    rating: 4.9,
    category: "Family",
    image: "/images/family_nature.png",
    tags: ["Family", "Nature"],
  },
];

export default function PackagesPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("recommended");

  const filteredPackages = allPackages
    .filter((pkg) => categoryFilter === "All" || pkg.category === categoryFilter)
    .sort((a, b) => {
      if (sortOrder === "price-low") return a.price - b.price;
      if (sortOrder === "price-high") return b.price - a.price;
      return b.rating - a.rating; // default recommended
    });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Discover Your <span className="text-primary italic">Journey</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our exclusive collection of Bhutan tour packages. From budget-friendly quick getaways to ultimate luxury honeymoons.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {["All", "Honeymoon", "Luxury", "Adventure", "Family", "Cultural", "Budget"].map(
              (cat) => (
                <Button
                  key={cat}
                  variant={categoryFilter === cat ? "default" : "outline"}
                  onClick={() => setCategoryFilter(cat)}
                  className="rounded-full whitespace-nowrap"
                >
                  {cat}
                </Button>
              )
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden group border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-3xl cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      {pkg.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-background/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-xl font-bold line-clamp-2">
                        {pkg.title}
                      </h3>
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
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          Starting from
                        </p>
                        <p className="text-xl font-bold text-foreground">
                          {pkg.priceDisplay}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-muted-foreground">No packages found.</p>
            <Button
              className="mt-4 rounded-full"
              onClick={() => setCategoryFilter("All")}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
