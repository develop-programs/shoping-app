import UserProfile from "@/components/auth/User";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import CheckOutFinal from "./(components)/CheckOutFinal";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import PaymentOptions from "./(components)/PaymentOptions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const UserDetails = dynamic(() => import("./(components)/UserDetails"), {
  ssr: false,
});

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <main className="min-h-screen grid grid-flow-row  lg:grid-flow-col grid-cols-12">
      <div className="md:col-span-12 xl:col-span-8 h-full border">
        <div className="w-full flex justify-between items-center p-4">
          <Link href="/" className="flex gap-2 text-sm items-center">
            <ChevronLeftIcon /> Back
          </Link>
          <UserProfile />
        </div>
        <div className="container max-w-3xl h-auto p-2 space-y-2 overflow-y-auto">
          <PaymentOptions />
          <Card>
            <CardContent>
              <CardHeader>
                <CardTitle>Shipping Details</CardTitle>
                <CardDescription>
                  User information for shipping and billing
                </CardDescription>
              </CardHeader>
              {session ? (
                <UserDetails
                  email={session.user.email}
                  username={session.user.username}
                  address={session.user.address}
                  phone={session.user.phone}
                />
              ) : (
                <UserDetails
                  email={null}
                  username={null}
                  address={null}
                  phone={null}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="md:col-span-12 xl:col-span-4 p-2 mt-20">
        <CheckOutFinal />
        <div className=" absolute bottom-12 right-12">
          <Button className="w-32">Place Order</Button>
        </div>
      </div>
    </main>
  );
}
