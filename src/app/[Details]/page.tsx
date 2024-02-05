import React from "react";
import Navbar from "./(components)/Navbar";
import axios from "axios";
import GetTotal from "@/functions/GetTotal";
import dynamic from "next/dynamic";

const ProductDetails = dynamic(
  () => import("@/app/[Details]/(components)/ProductDetails"),
  { ssr: false }
);

export async function getDetails(id: string) {
  const res = await axios.get(`http://localhost:3000/api/products?id=${id}`);
  const response = res.data;
  return response;
}

export default async function page({
  params,
}: {
  params: { Details: string };
}) {
  const data = await getDetails(params.Details);

  function Total(percentage: number, Total: number) {
    return ((percentage * Total) / 100).toFixed(2);
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductDetails data={data} />
      <GetTotal />
    </div>
  );
}
