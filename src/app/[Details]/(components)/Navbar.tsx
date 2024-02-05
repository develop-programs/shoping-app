import UserProfile from "@/components/auth/User";
import NavigationTabs from "@/components/custom/NavigationTabs";
import Search from "@/components/custom/Search";
import ShoppingCart from "@/components/custom/ShoppingCart";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between p-4 border-b">
      <div className="flex-1">
        <span className="text-3xl font-black">
          <Link href="/">Shopzo</Link>
        </span>
      </div>
      <div className="flex-1">
        <div className="w-full flex items-center gap-3">
          <SearchIcon />
          <Input placeholder="Search" />
        </div>
      </div>
      <div className="flex-1 flex space-x-6 justify-end items-center">
        <NavigationTabs />
        <ShoppingCart />
        <UserProfile />
      </div>
    </div>
  );
}
