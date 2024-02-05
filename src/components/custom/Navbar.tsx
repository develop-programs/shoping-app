import React from "react";
import UserProfile from "../auth/User";
import ShoppingCart from "./ShoppingCart";
import Search from "./Search";
import NavigationTabs from "./NavigationTabs";
import SideNav from "./SideNav";
import Link from "next/link";
import axios from "axios";

export default async function Navbar() {
  return (
    <div className="sticky top-0 w-full h-auto pt-4 lg:pt-12 xl:pt-16 lg:px-6 bg-white dark:bg-black bg-opacity-50 backdrop-blur-lg z-50">
      <div className="container max-w-7xl bg-slate-300 dark:bg-slate-800 py-4 px-4 xl:px-8 flex lg:rounded-md">
        <div className="flex-1 flex items-center gap-3">
          <div className="lg:hidden">
            <SideNav />
          </div>
          <span className="text-3xl font-black">
            <Link href="/">Shopzo</Link>
          </span>
        </div>
        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden lg:flex">
            <NavigationTabs />
            <Search />
          </div>
          <ShoppingCart />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
