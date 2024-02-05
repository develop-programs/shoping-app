import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";

export async function fetchData() {
  const res = await axios.get("http://localhost:3000/api/products");
  const response = await res.data.result;
  return response;
}

export default async function Home() {
  const data = await fetchData();

  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <div className="container min-w-[80] max-w-7xl h-auto p-6 flex gap-2">
        <div className="flex-1 h-[70vh]">
          <div className="w-full h-full bg-slate-400"></div>
        </div>
        <div className="flex-1 h-[70vh] flex gap-2 flex-col">
          <div className="w-full h-full bg-slate-400"></div>
          <div className="w-full h-full bg-slate-400"></div>
        </div>
      </div>
      <div className="container max-w-7xl h-auto p-6 pt-14 grid gap-12">
        <span className="w-full text-2xl font-bold">Recently Added</span>
        <div className="w-full max-w-7xl px-12 overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {data
                .reverse()
                .slice(0, 12)
                .map((products: any, index: number) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-1/4 md:basis-1/4 xl:basis-1/5"
                  >
                    <div className="p-1">
                      <Card className="bg-white text-black">
                        <Link href={`/${products.uuid}`}>
                          <CardContent className="aspect-square flex flex-col gap-2 items-center justify-center p-6">
                            <img
                              src={products.image}
                              width={100}
                              height={100}
                              alt={products.name}
                              className="hover:scale-110 hover:duration-500 hover:ease-in duration-500 ease-out"
                              decoding="async"
                              loading="lazy"
                            />
                          </CardContent>
                          <CardFooter className="w-full text-center">
                            <span className="text-sm font-bold">
                              {truncate(products.name, 16)}
                            </span>
                          </CardFooter>
                        </Link>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="container max-w-7xl h-auto p-6 flex gap-2">
        <div className="w-full h-[60vh] grid grid-flow-row grid-cols-2 gap-2">
          <div className="w-full h-full bg-slate-400"></div>
          <div className="w-full h-full bg-slate-400"></div>
          <div className="w-full h-full bg-slate-400"></div>
          <div className="w-full h-full bg-slate-400"></div>
        </div>
      </div>
      <div className="container max-w-7xl h-auto p-6 pt-16">
        <span className="w-full text-2xl font-bold">Most Viewed</span>
        <div className="w-full h-[50vh] grid grid-flow-row grid-cols-12 gap-2 pt-6">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="w-full h-full bg-slate-400 col-span-3"
            ></div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
