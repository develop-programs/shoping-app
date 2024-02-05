"use client";
import { ClearList } from "@/services/Redux/Reducers/wishList";
import { AppDispatch } from "@/services/Redux/Store";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";
import Link from "next/link";
import { AddToCart, Total } from "@/services/Redux/Reducers/Cart";
import GetTotal from "@/functions/GetTotal";
import { toast } from "sonner";

export default function WishListData() {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: any) => state.WishList.cart);

  function AddToCartHanddler(data: any) {
    dispatch(AddToCart(data));
    dispatch(Total());
    toast.success(`${data.name} added to Cart`);
  }

  if (data.length == 0) {
    return (
      <div className="container max-w-7xl h-full flex flex-col pt-4 items-center gap-6">
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-black">Your WishList is Empty</span>
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
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
        <div>
          <Button variant="outline" size="lg" asChild>
            <Link href="/" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>

              <span className="text-sm font-bold">Shop Now</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  if (data.length > 0) {
    return (
      <div className="container max-w-7xl h-full">
        <div className="w-full flex justify-end pt-2">
          <Button
            variant="destructive"
            onClick={() => {
              dispatch(ClearList());
            }}
          >
            Clear WishList
          </Button>
        </div>
        <div className="grid grid-flow-col md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
          {data.map((item: any, idk: any) => {
            return (
              <div
                key={idk}
                className="flex flex-col items-center border rounded-md p-4 gap-2"
              >
                <div>
                  <Image
                    src={item.image}
                    alt="not found"
                    width={100}
                    height={100}
                    priority={true}
                  />
                </div>
                <div className="mt-3 text-center">
                  <span>{item.name}</span>
                  <span>
                    ₹
                    {Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(item.price)}
                  </span>
                  <span className="flex justify-center gap-2 items-center">
                    <Star size={16} color="#e0c61d" fill="#e0c61d" />
                    {item.rating / 10}
                  </span>
                </div>
                <div>
                  <Button
                    variant="default"
                    size="lg"
                    className="flex gap-2"
                    onClick={() =>
                      AddToCartHanddler({
                        uuid: item.uuid,
                        name: item.name,
                        image: item.image,
                        piece: item.piece,
                        rating: item.rating,
                      })
                    }
                  >
                    <svg
                      fill="none"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Add to Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
