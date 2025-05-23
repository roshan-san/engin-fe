"use client";
import { Users, Building2, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardStats() {
  const router = useRouter();
  

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card 
        className="relative overflow-hidden border-none bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer hover:from-blue-500/20 hover:to-blue-600/20"
      >
        <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-blue-500/10 blur-2xl" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-600">Total Connections</CardTitle>
          <Users className="h-5 w-5 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">0</div>
          <p className="mt-2 text-sm text-blue-500/80">
            Your professional network
          </p>
        </CardContent>
      </Card>

      <Card 
        onClick={() => router.push("/dashboard/startups")}
        className="relative overflow-hidden border-none bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer hover:from-green-500/20 hover:to-green-600/20"
      >
        <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-green-500/10 blur-2xl" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-600">Startups</CardTitle>
          <Building2 className="h-5 w-5 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">0</div>
          <p className="mt-2 text-sm text-green-500/80">
            Your startup ventures
          </p>
        </CardContent>
      </Card>

      <Card 
        
        className="relative overflow-hidden border-none bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer hover:from-amber-500/20 hover:to-amber-600/20"
      >
        <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-amber-500/10 blur-2xl" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-amber-600">Active Projects</CardTitle>
          <TrendingUp className="h-5 w-5 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-amber-600">0</div>
          <p className="mt-2 text-sm text-amber-500/80">
            Ongoing collaborations
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 