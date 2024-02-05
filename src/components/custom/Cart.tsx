"use client";
import {
  AddToCart,
  ClearCart,
  RemoveFromCart,
  Total,
} from "@/services/Redux/Reducers/Cart";
import { AppDispatch } from "@/services/Redux/Store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.Cart.cart);

  function handleAdd(data: any) {
    dispatch(AddToCart(data));
    dispatch(Total());
  }
  function handdleRemove(data: any) {
    dispatch(RemoveFromCart(data));
    dispatch(Total());
  }

  React.useEffect(() => {
    dispatch(Total());
  }, [data]);

  if (data.length === 0) {
    return (
      <p className="text-center pt-4 text-base font-semibold">
        Your Cart is empty
      </p>
    );
  }

  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  return (
    <div className="pt-2 grid gap-2">
      <Button
        variant="destructive"
        size="sm"
        onClick={() => {
          dispatch(ClearCart());
        }}
      >
        Clear Cart
      </Button>
      <div className="grid gap-5 max-h-[70vh] overflow-y-auto">
        {data.map((item: any, idk: number) => (
          <div key={idk} className="w-full h-auto p-2 flex gap-2 border">
            <div>
              <Image
                src={item.image}
                width={80}
                height={80}
                alt="not found"
                priority={true}
              />
            </div>
            <div>
              <p className="text-base font-semibold">
                {truncate(item.name, 20)}
              </p>
              <p className="text-xs">
                {" "}
                ₹
                {Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(item.price)}
              </p>
              <Link href={`/${item.uuid}`} className="text-xs hover:underline">
                View Details
              </Link>
              <div className="flex gap-2 items-center">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    handdleRemove(item);
                  }}
                >
                  -
                </Button>
                <span>{item.piece}</span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    handleAdd(item);
                  }}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
