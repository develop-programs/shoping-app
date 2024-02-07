import Navbar from "@/components/custom/Navbar";
import React from "react";
import dynamic from "next/dynamic";
import GetTotal from "@/functions/GetTotal";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const WishList = dynamic(() => import("@/components/custom/WishListData"), {
  ssr: false,
});

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <div className="min-h-screen">
          <Navbar />
          <WishList />
          <GetTotal />
        </div>
      ) : (
        <div className="min-h-screen w-full flex justify-center text-2xl font-black py-6">
          LogIn to View Your WishList
        </div>
      )}
    </>
  );
}
