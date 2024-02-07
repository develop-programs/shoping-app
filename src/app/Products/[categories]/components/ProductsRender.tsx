"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import Link from "next/link";
import { IndianRupee, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BadgeData from "@/data/badge.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProductsRender(data: any) {
  const [Range, setRange] = React.useState([3000, 1000000]);
  const [Brands, setBrands] = React.useState<any>([]);
  const [Rating, setRating] = React.useState<any>([]);

  function Total(percentage: number, Total: number) {
    return ((percentage * Total) / 100).toFixed(2);
  }

  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }
  const handleRangeChange = (value: any) => {
    setRange(value);
  };

  const handleBrand = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setBrands([...Brands, value]);
    } else {
      setBrands(Brands.filter((item: any) => item !== value));
    }
  };

  const handleRating = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setRating([...Rating, value]);
    } else {
      setRating(Rating.filter((item: any) => item !== value));
    }
  };

  return (
    <div>
      <div className="container max-w-7xl pt-2 flex">
        <div className="w-80 h-[84vh] border-r-2 flex flex-col gap-2 p-2">
          <span>Filter</span>
          <div className="flex flex-col gap-2 px-2">
            <span>Select Price</span>
            <span className="flex gap-2">
              {Range[0]}
              <Slider
                defaultValue={[3000, 1000000]}
                max={100000}
                step={1}
                value={Range}
                onValueChange={handleRangeChange}
              />
            </span>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Select Brand</AccordionTrigger>
                  <AccordionContent className="h-48 overflow-y-auto">
                    {BadgeData.map((item: any, idk: any) => (
                      <div className="flex items-center gap-1 py-2" key={idk}>
                        <input
                          type="checkbox"
                          name="check"
                          id={idk}
                          value={item.name}
                          onChange={handleBrand}
                        />
                        <Label htmlFor={idk}>{item.name}</Label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Select Rating</AccordionTrigger>
                  <AccordionContent className="h-48 overflow-y-auto">
                    <div className="flex items-center gap-1 py-2">
                      <input
                        type="checkbox"
                        name="check"
                        id="rating1"
                        value={3}
                        onChange={handleRating}
                      />
                      <Label htmlFor="rating1">3 stars and above</Label>
                    </div>
                    <div className="flex items-center gap-1 py-2">
                      <input
                        type="checkbox"
                        name="check"
                        id="rating2"
                        value={4}
                        onChange={handleRating}
                      />
                      <Label htmlFor="rating2">4 stars and above</Label>
                    </div>
                    <div className="flex items-center gap-1 py-2">
                      <input
                        type="checkbox"
                        name="check"
                        id="rating3"
                        value={5}
                        onChange={handleRating}
                      />
                      <Label htmlFor="rating3">5 stars</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="relative flex-1 h-[85vh] flex flex-col gap-2 p-2 overflow-y-auto pb-12">
          {data.data.length > 0 ? (
            data.data
              .filter((item: any, idK: any) => {
                if (Range[0] <= item.price && item.price <= Range[1]) {
                  return item;
                }
              })
              .filter((item: any, idK: any) => {
                if (Brands.length > 0) {
                  return Brands.some(
                    (brand: any) =>
                      brand.toLowerCase() === item.brand.toLowerCase()
                  );
                } else {
                  return item;
                }
              })
              .map((item: any, idk: any) => (
                <div className="w-full p-2 flex bg-white rounded-lg" key={idk}>
                  <div>
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="not found"
                      className="w-full h-full aspect-16/9 object-cover rounded-lg"
                      priority={true}
                    />
                  </div>
                  <div className="flex-1 px-4 flex flex-col items-start">
                    <span className="text-sm">{truncate(item.name, 40)}</span>
                    <span className="flex gap-1 items-center">
                      <IndianRupee size={16} />
                      {Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                      }).format(
                        item.price - parseInt(Total(item.discount, item.price))
                      )}
                    </span>
                    <Badge
                      variant="secondary"
                      className="w-16 flex items-center gap-1"
                    >
                      <Star size={16} color="#e0c61d" fill="#e0c61d" />{" "}
                      {item.rating / 10}
                    </Badge>
                    <Button variant="link" size="sm" asChild className="pt-4">
                      <Link href={`/${item.uuid}`}>
                        <span className="text-sm">View Details</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
          ) : (
            <>
              <span className="w-full text-xl font-bold h-32 grid place-content-center">
                0 Items Found
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
