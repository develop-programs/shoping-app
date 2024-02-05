"use client";
import React from "react";
import { Button } from "../ui/button";

export default function Description({ data }: { data: any }) {
  const [Toggle, setToggle] = React.useState(false);
  function truncate(string: any, number: any) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }
  return (
    <span>
      {Toggle ? (
        <>
          {data}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setToggle(false);
            }}
            className="hover:underline"
          >
            Read Less
          </Button>
        </>
      ) : (
        <>
          {truncate(data, 250)}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setToggle(true);
            }}
            className="hover:underline"
          >
            Read More
          </Button>
        </>
      )}{" "}
    </span>
  );
}
