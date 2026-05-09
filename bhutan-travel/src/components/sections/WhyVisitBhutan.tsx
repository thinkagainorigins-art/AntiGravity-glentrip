"use client";

import { motion } from "framer-motion";
import { Mountain, Users, Heart, Camera } from "lucide-react";

export function WhyVisitBhutan() {
  const stats = [
    { icon: Mountain, value: "72%", label: "Forest Cover" },
    { icon: Users, value: "10k+", label: "Happy Travelers" },
    { icon: Heart, value: "100%", label: "Carbon Negative" },
    { icon: Camera, value: "50+", label: "Pristine Monasteries" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                The Bhutan Experience
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
                Why Choose Bhutan for Your Next Getaway?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bhutan isn't just a destination; it's a profound experience. From the majestic Himalayan peaks to the deeply rooted Buddhist culture, every moment here is designed to rejuvenate your soul. We prioritize Gross National Happiness over everything else.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold font-heading">{stat.value}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1623058862211-16474bc933eb?q=80&w=1200&auto=format&fit=crop"
              alt="Bhutan Monk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xl font-medium italic">
                "It's a place where time slows down and the soul finds peace."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
