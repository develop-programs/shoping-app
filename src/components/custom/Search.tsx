"use client";
import React from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/Store";
import { OpenSearch } from "@/services/Redux/Reducers/SearchToggle";

export default function Search() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-transparent"
      onClick={() => dispatch(OpenSearch())}
    >
      <SearchIcon size={20} />
    </Button>
  );
}
