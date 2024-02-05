"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function CheckOutFinal() {
  const Quantity = useSelector((state: any) => state.Cart.TotalQuantity);
  const Price = useSelector((state: any) => state.Cart.TotalPrice);
  const cost = 80;
  let ShipingPrice = Price > 500 ? 0 : cost;
  let TotalPrice = Price + ShipingPrice;
  return (
    <div className="grid gap-4">
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>SubTotal</CardTitle>
          </CardHeader>
          <div className="grid grid-flow-row gap-4 grid-col-2 pb-4">
            <div className="col-span-2 flex justify-between">
              <span className="text-base font-semibold">Total Items</span>
              <span>{Quantity}</span>
            </div>
            <div className="col-span-2 flex justify-between">
              <span className="text-base font-semibold">Total Price</span>
              <span>₹{Price}</span>
            </div>
            <div className="col-span-2 flex justify-between">
              <span className="text-base font-semibold flex items-center">
                Shipping Charge{" "}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info size={16} />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <span className="text-xs">
                      Shipping Charges are calculated based on the total amount
                      of items in your cart. User is elegible for free delivery
                      if price is more than ₹500
                    </span>
                  </HoverCardContent>
                </HoverCard>
              </span>
              <span>₹ {Price > 500 ? 0 : cost}</span>
            </div>
          </div>
          <Separator />
        </CardContent>
        <CardFooter className="flex justify-between">
          <span className="text-sm">Total Amount</span>
          <span>₹ {Price}</span>
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>Promo Code</CardTitle>
          </CardHeader>
          <Input placeholder="Enter code" />
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
