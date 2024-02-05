"use client";
import { Button } from "@/components/ui/button";
import { AddToList } from "@/services/Redux/Reducers/wishList";
import { AppDispatch } from "@/services/Redux/Store";
import { Heart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

export default function AddToWishlist({ data }: { data: any }) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      onClick={() => {
        dispatch(AddToList(data));
      }}
      size="lg"
      className="flex gap-2"
    >
      <Heart />
      Add To WishList
    </Button>
  );
}
