"use client";
import { Total } from "@/services/Redux/Reducers/Cart";
import { AppDispatch } from "@/services/Redux/Store";
import React from "react";
import { useDispatch } from "react-redux";

export default function GetTotal() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(Total());
  return null;
}
