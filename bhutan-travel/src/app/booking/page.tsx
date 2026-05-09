"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Hardcoded for demo, normally passed via context/URL state
  const bookingDetails = {
    package: "Luxury Honeymoon Retreat",
    adults: 2,
    children: 0,
    basePrice: 85000,
    travelDate: "2026-09-15"
  };

  const subtotal = bookingDetails.basePrice * bookingDetails.adults;
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "BHUTAN2026") {
      setDiscount(10000); // flat discount mock
    } else {
      alert("Invalid coupon code");
    }
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border -z-10" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary transition-all duration-500 -z-10" style={{ width: `${((step - 1) / 3) * 100}%` }} />
          
          {["Details", "Review", "Payment", "Confirm"].map((label, i) => {
            const stepNum = i + 1;
            const isActive = step >= stepNum;
            const isCompleted = step > stepNum;
            return (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
                  isActive ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground"
                }`}>
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNum}
                </div>
                <span className={`text-sm font-bold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <Card className="border-border/50 shadow-2xl rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm">
          <CardContent className="p-0">
            <AnimatePresence mode="wait">
              
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h2 className="font-heading text-3xl font-bold mb-8">Traveler Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input placeholder="John Doe" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address *</Label>
                      <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone Number *</Label>
                      <Input placeholder="+91 98765 43210" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Passport / ID Number</Label>
                      <Input placeholder="Optional for now" className="h-12 rounded-xl" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label>Special Requirements or Diet</Label>
                      <Textarea placeholder="e.g. Vegetarian, Wheelchair access" className="rounded-xl resize-none" rows={4} />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end">
                    <Button onClick={nextStep} size="lg" className="rounded-full px-8 h-14 text-lg">
                      Review Booking <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <h2 className="font-heading text-3xl font-bold mb-8">Review & Pricing</h2>
                  
                  <div className="bg-muted/50 p-6 rounded-2xl mb-8">
                    <h3 className="font-bold text-xl mb-4">{bookingDetails.package}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div>
                        <p className="text-muted-foreground">Travel Date</p>
                        <p className="font-bold">{new Date(bookingDetails.travelDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Travelers</p>
                        <p className="font-bold">{bookingDetails.adults} Adults, {bookingDetails.children} Children</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Base Fare</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600 font-medium">
                          <span>Discount Applied</span>
                          <span>- ₹{discount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-xl pt-4 border-t border-border">
                        <span>Total Payable</span>
                        <span className="text-primary">₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-8">
                    <Input 
                      placeholder="Coupon Code" 
                      value={coupon} 
                      onChange={e => setCoupon(e.target.value)}
                      className="h-12 rounded-xl max-w-xs"
                    />
                    <Button onClick={handleApplyCoupon} variant="outline" className="h-12 rounded-xl">Apply</Button>
                  </div>

                  <div className="flex justify-between mt-10">
                    <Button onClick={prevStep} variant="ghost" size="lg" className="rounded-full h-14">Back</Button>
                    <Button onClick={nextStep} size="lg" className="rounded-full px-8 h-14 text-lg">
                      Proceed to Pay <CreditCard className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 text-center"
                >
                  <ShieldCheck className="h-20 w-20 text-primary mx-auto mb-6" />
                  <h2 className="font-heading text-3xl font-bold mb-4">Secure Payment</h2>
                  <p className="text-muted-foreground mb-8">
                    You are about to pay <span className="font-bold text-foreground">₹{total.toLocaleString()}</span> securely via Razorpay/Stripe.
                  </p>
                  
                  <div className="max-w-md mx-auto space-y-4">
                    <Button onClick={nextStep} size="lg" className="w-full h-14 rounded-xl text-lg shadow-lg">
                      Pay with Razorpay
                    </Button>
                    <Button onClick={nextStep} variant="outline" size="lg" className="w-full h-14 rounded-xl text-lg">
                      Pay with Stripe
                    </Button>
                  </div>
                  
                  <div className="mt-12 flex justify-start">
                    <Button onClick={prevStep} variant="ghost" size="lg" className="rounded-full h-14">Back</Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-12 w-12" />
                  </div>
                  <h2 className="font-heading text-4xl font-bold mb-4">Booking Confirmed!</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                    Your luxury trip to Bhutan is secured. We have sent a confirmation email to your registered address with the detailed itinerary.
                  </p>
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg" onClick={() => window.location.href = '/'}>
                    Return to Home
                  </Button>
                </motion.div>
              )}

            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
