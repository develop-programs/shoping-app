"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function ShoppingCart() {
  const TotalQuantity = useSelector((state: any) => state.Cart.TotalQuantity);
  const TotalPrice = useSelector((state: any) => state.Cart.TotalPrice);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-transparent"
        >
          <span className="absolute -right-3 w-5 h-5 rounded-full -top-2 bg-black text-white">
            {TotalQuantity}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Cart
          </SheetTitle>
          <SheetDescription>All items in your cart</SheetDescription>
        </SheetHeader>
        <div>
          <Cart />
        </div>
        <SheetFooter className="absolute bottom-4 right-12 grid space-y-3">
          <div>
            <p className="text-xl font-bold">
              Subtotal ({TotalQuantity} items)
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl font-bold">Total</p>
            <p>
              ₹{" "}
              {Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(TotalPrice)}
            </p>
          </div>
          {TotalPrice > 0 ? (
            <Button asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          ) : (
            <SheetClose asChild>
              <Button>
                <ChevronLeft /> Back
              </Button>
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
