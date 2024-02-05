"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ totalPages, currentPage }: Props) {
  const pathname = usePathname();
  const pages = currentPage || 1;
  return (
    <div className="flex gap-4 items-center justify-center">
      {Array.from({ length: totalPages }, (_, pages) => (
        <Link
          href={{
            pathname,
            query: { page: pages + 1 },
          }}
          key={pages}
          className="border-2 px-2 rounded-sm hover:bg-slate-200"
        >
          <span
            className={`${
              pages + 1 == currentPage ? "font-bold" : "font-normal"
            }`}
          >
            {pages + 1}
          </span>
        </Link>
      ))}
    </div>
  );
}
