import Navbar from "@/components/custom/Navbar";
import React from "react";
import dynamic from "next/dynamic";
import GetTotal from "@/functions/GetTotal";

const WishList = dynamic(() => import("@/components/custom/WishListData"), {
  ssr: false,
});

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WishList />
      <GetTotal />
    </div>
  );
}
