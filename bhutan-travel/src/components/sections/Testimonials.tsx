"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Ananya Chatterjee",
    location: "Kolkata, India",
    content: "The honeymoon package was an absolute dream. Everything from the luxury stay in Paro to the seamless transfers from Kolkata was perfectly arranged. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    id: 2,
    name: "Rahul & Sneha",
    location: "Kolkata, India",
    content: "We were looking for a premium experience and GlenTrip delivered. The guides were knowledgeable, and the hotels chosen had the most breathtaking views.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    id: 3,
    name: "Amit Das",
    location: "Kolkata, India",
    content: "A flawless trip. The itinerary was well-paced, allowing us to absorb the culture without feeling rushed. The team was responsive and helpful throughout.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=amit"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Stories from our <span className="text-primary italic">Travelers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here is what our guests have to say about their journey to Bhutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors shadow-lg shadow-black/5 rounded-3xl relative">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg italic leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
