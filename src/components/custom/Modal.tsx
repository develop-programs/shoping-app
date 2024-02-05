"use client";
import { Search, X } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { AppDispatch } from "@/services/Redux/Store";
import { CloseSearch } from "@/services/Redux/Reducers/SearchToggle";

export default function Modal() {
  const dispatch = useDispatch<AppDispatch>();
  const Toggle = useSelector((state: any) => state.Search.Toggle);
  if (typeof document !== "undefined") {
    document.body.style.overflowY = Toggle ? "hidden" : "auto";
  }
  return (
    <div
      className={`absolute inset-0 ${
        Toggle ? "block" : "hidden"
      } min-h-screen bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-10 backdrop-blur-md z-[100000000000]`}
    >
      <div className=" max-w-4xl mx-auto bg-slate-600 dark:bg-slate-800 h-80 mt-16 rounded-lg flex flex-col p-0">
        <div className="w-full border-b-2 dark:border-slate-200 h-auto flex items-center gap-4 px-6 py-2">
          <Search color="#fff" />
          <input
            type="text"
            name=""
            id=""
            className="flex-1 outline-none py-2 bg-transparent text-white"
            placeholder="Search"
          />
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
            onClick={() => {
              dispatch(CloseSearch());
            }}
          >
            <X color="#fff" />
          </Button>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full border-t-2 dark:border-slate-200"></div>
      </div>
    </div>
  );
}
