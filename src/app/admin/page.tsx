import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfile from "@/components/auth/User";
import { Metadata } from "next";
import { AlertCircle, ChevronLeftIcon, Shield } from "lucide-react";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("./Dashboard/page"), { ssr: false });
const Products = dynamic(() => import("./products/page"), { ssr: false });
const Users = dynamic(() => import("./User/page"), { ssr: false });
const Orders = dynamic(() => import("./Orders/page"), { ssr: false });

export const metadata: Metadata = {
  title: "Admin Pannel",
  description: "Admin Pannel",
  icons: {
    icon: "/admin.svg",
  },
};

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  if (session?.user?.role !== "admin") {
    return (
      <div className="min-h-screen grid place-content-center">
        <div className="flex flex-col items-center gap-2">
          <AlertCircle size={32} />
          <span className="text-3xl"> Not Authorized</span>
          <Link href="/" className="flex items-center">
            <ChevronLeftIcon /> Go Back
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen px-4">
      <div className="w-full flex justify-between py-6">
        <span className="text-2xl font-bold">Admin Pannel</span>
        <UserProfile />
      </div>
      <Tabs defaultValue="dashboard" className="pt-12">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="order">Orders</TabsTrigger>
          <TabsTrigger value="user">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" className="h-auto space-y-6">
          {/* <Dashboard /> */}
          <Dashboard />
        </TabsContent>
        <TabsContent value="products" className="h-auto">
          {/* <Products /> */}
          <Products />
          <div className="w-full h-10 flex justify-end">
            <Button variant="link" size="lg" asChild>
              <Link href={"/admin/products"}>View in full Page</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="order" className="h-auto">
          {/* <Orders /> */}
          <Orders />
          <div className="w-full h-10 flex justify-end">
            <Button variant="link" size="lg" asChild>
              <Link href={"/admin/Orders"}>View in full Page</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="user" className="h-auto">
          {/* <AdminUser /> */}
          <Users />
          <div className="w-full h-10 flex justify-end">
            <Button variant="link" size="lg" asChild>
              <Link href={"/admin/User"}>View in full Page</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  );
}
