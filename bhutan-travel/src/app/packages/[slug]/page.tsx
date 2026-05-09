"use client";

import { useState, use, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, Check, X, Calendar as CalendarIcon, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock data fetcher
const getPackageData = (slug: string) => {
  return {
    id: 1,
    slug: slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    location: "Paro & Punakha",
    duration: "7 Days / 6 Nights",
    basePrice: 85000,
    priceDisplay: "₹85,000",
    rating: 4.9,
    reviews: 124,
    images: [
      "/images/hero_bhutan.png",
      "/images/honeymoon_paro.png",
      "/images/cultural_dzong.png",
    ],
    inclusions: [
      "Accommodation in 4/5 star luxury hotels",
      "All meals (Breakfast, Lunch, Dinner)",
      "Private luxury SUV with English speaking guide",
      "Bhutan Sustainable Development Fee (SDF)",
      "All entry permits and monument fees",
    ],
    exclusions: [
      "Flights to/from Paro",
      "Personal expenses and tips",
      "Travel insurance",
      "Alcoholic beverages",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Paro & Transfer to Thimphu", desc: "Arrive at Paro International Airport. Our representative will receive you and drive you to Thimphu (1.5 hours). Evening stroll in Thimphu town." },
      { day: 2, title: "Thimphu Sightseeing", desc: "Visit Buddha Dordenma, Tashichho Dzong, and the Folk Heritage Museum. Enjoy a traditional Bhutanese dinner." },
      { day: 3, title: "Thimphu to Punakha", desc: "Drive to Punakha via Dochula Pass (3,100m). Visit the majestic Punakha Dzong located at the confluence of Pho Chhu and Mo Chhu rivers." },
      { day: 4, title: "Punakha to Paro", desc: "Drive back to Paro. Visit the National Museum and Paro Rinpung Dzong. Relax at your luxury resort." },
      { day: 5, title: "Hike to Tiger's Nest", desc: "Early morning hike to the iconic Taktsang Monastery (Tiger's Nest). A challenging but deeply rewarding experience. Hot stone bath in the evening." },
      { day: 6, title: "Departure", desc: "Transfer to Paro Airport for your onward journey." }
    ]
  };
};

export default function PackageDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const pkg = getPackageData(unwrappedParams.slug);
  
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const totalPrice = (adults * pkg.basePrice) + (children * (pkg.basePrice * 0.5));

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      {/* Hero Image Gallery */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden">
          <div className="md:col-span-3 relative group">
            <img src={pkg.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={pkg.title} />
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <img src={pkg.images[1]} className="w-full h-[calc(50%-0.5rem)] object-cover rounded-tr-3xl hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 1" />
            <img src={pkg.images[2]} className="w-full h-[calc(50%-0.5rem)] object-cover rounded-br-3xl hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery 2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary" /> {pkg.rating} ({pkg.reviews} Reviews)
                </span>
                <span className="flex items-center gap-1 text-muted-foreground font-medium">
                  <MapPin className="h-4 w-4 text-primary" /> {pkg.location}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground font-medium">
                  <Clock className="h-4 w-4 text-primary" /> {pkg.duration}
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{pkg.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Immerse yourself in the breathtaking landscapes and spiritual tranquility of Bhutan. This premium package is carefully crafted to offer a blend of luxury, culture, and nature.
              </p>
            </div>

            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="w-full justify-start border-b border-border bg-transparent rounded-none h-auto p-0 space-x-8">
                <TabsTrigger value="itinerary" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 font-bold text-base">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 font-bold text-base">Inclusions / Exclusions</TabsTrigger>
                <TabsTrigger value="hotels" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 font-bold text-base">Hotels</TabsTrigger>
              </TabsList>
              
              <TabsContent value="itinerary" className="pt-8">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {pkg.itinerary.map((day, index) => (
                    <motion.div 
                      key={day.day}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {day.day}
                      </div>
                      <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg mb-2 text-primary">{day.title}</h4>
                          <p className="text-muted-foreground">{day.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="inclusions" className="pt-8 space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                    <Check className="text-green-500 h-6 w-6" /> What's Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-1 bg-green-500/20 p-1 rounded-full"><Check className="h-3 w-3 text-green-600" /></div>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                    <X className="text-red-500 h-6 w-6" /> What's Not Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-1 bg-red-500/20 p-1 rounded-full"><X className="h-3 w-3 text-red-600" /></div>
                        {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="hotels" className="pt-8">
                <p className="text-muted-foreground">Details about luxury partner properties like Six Senses, Amankora, or Taj Tashi will be displayed here.</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <Card className="border-border/50 shadow-xl rounded-3xl overflow-hidden">
                <div className="bg-primary p-6 text-primary-foreground">
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">Starting Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-heading">{pkg.priceDisplay}</span>
                    <span className="text-sm opacity-80">/ person</span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Travel Date</Label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input type="date" className="pl-10 h-12" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Adults</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input type="number" min="1" value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="pl-10 h-12" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Children (2-12y)</Label>
                        <Input type="number" min="0" value={children} onChange={(e) => setChildren(Number(e.target.value))} className="h-12" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 space-y-3" suppressHydrationWarning>
                    {isMounted ? (
                      <>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Base Price ({adults} Adults)</span>
                          <span>₹{(adults * pkg.basePrice).toLocaleString('en-IN')}</span>
                        </div>
                        {children > 0 && (
                          <div className="flex justify-between text-muted-foreground">
                            <span>Children ({children})</span>
                            <span>₹{(children * pkg.basePrice * 0.5).toLocaleString('en-IN')}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                          <span>Total Price</span>
                          <span className="text-primary">₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>
                      </>
                    ) : (
                      <div className="h-24 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Calculating...</span>
                      </div>
                    )}
                  </div>

                  <Link href="/booking" className="block w-full">
                    <Button size="lg" className="w-full h-14 rounded-full text-lg shadow-lg shadow-primary/25">
                      Proceed to Booking
                    </Button>
                  </Link>
                  
                  <p className="text-center text-xs text-muted-foreground">
                    No hidden fees. Taxes calculated at checkout.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
