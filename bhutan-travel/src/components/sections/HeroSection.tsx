"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/images/hero_bhutan.png"
          alt="Tiger's Nest Monastery Bhutan"
          className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center text-white mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Discover the Last Shangri-La
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Journey to the <br />
            Heart of <span className="text-accent italic">Bhutan</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-white/90">
            Experience luxury travel from Kolkata to the pristine valleys of Bhutan. Curated packages, exclusive stays, and unforgettable memories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/packages" className="w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full">
              Explore Packages
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-black">
            Plan Your Itinerary
          </Button>
        </motion.div>
      </div>

      {/* Floating search/booking widget below hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl z-30"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase">Destination</label>
            <select className="w-full h-12 bg-transparent border-b border-border text-foreground font-medium focus:outline-none">
              <option>Thimphu & Paro</option>
              <option>Punakha Valley</option>
              <option>Bumthang</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase">Duration</label>
            <select className="w-full h-12 bg-transparent border-b border-border text-foreground font-medium focus:outline-none">
              <option>3-5 Days</option>
              <option>6-8 Days</option>
              <option>9+ Days</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase">Travel Style</label>
            <select className="w-full h-12 bg-transparent border-b border-border text-foreground font-medium focus:outline-none">
              <option>Luxury Honeymoon</option>
              <option>Family Tour</option>
              <option>Adventure Trip</option>
            </select>
          </div>
          <div>
            <Button className="w-full h-12 rounded-xl text-md">Search Trips</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
