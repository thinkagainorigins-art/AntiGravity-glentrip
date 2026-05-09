"use client";

import { motion } from "framer-motion";
import { Users, Package, Calendar, DollarSign, Activity, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { title: "Total Revenue", value: "₹24,50,000", icon: DollarSign, trend: "+12.5%" },
  { title: "Active Bookings", value: "32", icon: Calendar, trend: "+5.2%" },
  { title: "Total Packages", value: "14", icon: Package, trend: "0%" },
  { title: "New Leads", value: "128", icon: Users, trend: "+24.8%" },
];

const recentBookings = [
  { id: "BK-1029", user: "Rahul Sharma", package: "Luxury Honeymoon Retreat", date: "Oct 12, 2026", status: "Confirmed", amount: "₹85,000" },
  { id: "BK-1030", user: "Sneha Gupta", package: "Majestic Mountain Adventure", date: "Oct 15, 2026", status: "Pending", amount: "₹1,10,000" },
  { id: "BK-1031", user: "Amit Das", package: "Cultural Heritage Tour", date: "Nov 02, 2026", status: "Confirmed", amount: "₹65,000" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Super Admin</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button className="rounded-full">Download Report</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-2xl border-border/50 shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    <Icon className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-heading">{stat.value}</div>
                    <p className="text-xs text-green-500 mt-1 font-medium">{stat.trend} from last month</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 rounded-2xl border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50 rounded-lg">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">ID</th>
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Package</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 rounded-tr-lg">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-4 font-medium">{booking.id}</td>
                        <td className="px-4 py-4">{booking.user}</td>
                        <td className="px-4 py-4 truncate max-w-[200px]">{booking.package}</td>
                        <td className="px-4 py-4">{booking.date}</td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            booking.status === 'Confirmed' ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 font-bold">{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start rounded-xl h-12">
                <Package className="mr-3 h-5 w-5 text-primary" /> Create New Package
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-xl h-12">
                <Activity className="mr-3 h-5 w-5 text-primary" /> Manage SEO & Metadata
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-xl h-12">
                <Users className="mr-3 h-5 w-5 text-primary" /> View Customer Leads
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
