"use client";
import { Button } from "@/components/ui/button";
import { AddToCart, Total } from "@/services/Redux/Reducers/Cart";
import { AppDispatch } from "@/services/Redux/Store";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

export default function AddToCartButton({ data }: { data: any }) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      onClick={() => {
        dispatch(AddToCart(data));
        dispatch(Total());
      }}
      size="lg"
      className="flex gap-2"
    >
      <ShoppingCart />
      Add To Cart
    </Button>
  );
}
