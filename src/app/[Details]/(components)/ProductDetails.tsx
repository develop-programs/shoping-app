"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HeartIcon, Info, ShoppingCartIcon, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/Store";
import { AddToCart, Total } from "@/services/Redux/Reducers/Cart";
import { AddToList } from "@/services/Redux/Reducers/wishList";
import { toast } from "sonner";

export default function ProductDetails({ data }: { data: any }) {
  const dispatch = useDispatch<AppDispatch>();

  const [Toggle, setToggle] = React.useState<boolean>(false);

  function TotalPrice(percentage: number, Total: number) {
    return ((percentage * Total) / 100).toFixed(2);
  }

  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  function handdleAddToCart(data: any) {
    dispatch(AddToCart(data));
    dispatch(Total());
    toast.success(`${data.name} added to Cart`);
  }

  function handdleAddToWishList(data: any) {
    dispatch(AddToList(data));
    toast.success(`${data.name} added to WishList`);
  }

  return (
    <div className="container max-w-6xl h-auto grid grid-flow-col col-span-2 gap-32 pt-12 py-12">
      <div className="col-span-1 flex justify-center items-center">
        <Image
          src={data.image}
          alt="image"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <span className="text-2xl font-bold">{data.name}</span>
        <span className="flex gap-2 items-center text-sm font-bold">
          <Star size={16} color="#f59e0b" fill="#f59e0b" /> {data.rating / 10}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xl font-black">
            ₹
            {Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
              data.price - parseInt(TotalPrice(data.discount, data.price))
            )}
          </span>

          <span className="text-base font-bold text-muted-foreground">
            <sub>
              <del>₹{data.price}</del>
            </sub>
          </span>
          <span className="text-lg font-bold">₹{data.discount}% off</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>₹80 for shiping fee to insure safe delivery</span>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info size={16} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                Delivery are applied items under 500 Rupee.All Items above 500
                are eligibly for free delivery
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div>
          {data.quantity > 0 ? (
            <span className="text-sm font-black text-emerald-600">
              In Stock
            </span>
          ) : (
            <span className="text-sm font-black text-rose-600">
              Out of Stock
            </span>
          )}
        </div>
        <div className="grid gap-1">
          <div className="flex gap-2 items-center">
            <span className="text-sm font-semibold">Brand:</span>
            <span className="text-base">{data.brand}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm font-semibold">Model:</span>
            <span className="text-base">{data.model}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="flex gap-1" onClick={() => handdleAddToCart(data)}>
            <ShoppingCartIcon /> Add to Cart
          </Button>
          <Button
            className="flex gap-1"
            onClick={() => handdleAddToWishList(data)}
          >
            <HeartIcon /> Add to WishList
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-black">Description</span>
          <div className="">
            {Toggle ? (
              <>
                <span className="text-sm">{data.description}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setToggle(!Toggle)}
                >
                  Read Less
                </Button>
              </>
            ) : (
              <>
                <span className="text-sm">
                  {truncate(data.description, 100)}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setToggle(!Toggle)}
                >
                  Read More
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
