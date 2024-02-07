import Navbar from "@/components/custom/Navbar";
import Pagination from "@/app/Products/[categories]/components/Pagination";
import axios from "axios";
import React from "react";
import ProductsRender from "./components/ProductsRender";

async function getProducts(params: string, page: number, limit: number) {
  const product = await axios.get(
    `http://localhost:3000/api/products?category=${params}&page=${page}&limit=${limit}`
  );
  return product.data.result;
}

export default async function page({
  params,
  searchParams,
}: {
  params: { categories: string };
  searchParams: { page: string; limit: string };
}) {
  const Page = Number(searchParams.page) || 1;
  const data = await getProducts(params.categories, Page, 10);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <ProductsRender data={data} />
      <div className="fixed bottom-0 h-12 w-full flex justify-center gap-2 bg-white">
        <Pagination totalPages={10} currentPage={Page} />
      </div>
    </main>
  );
}
