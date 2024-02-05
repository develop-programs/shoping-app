"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function SignOut({ children }: Props): JSX.Element {
  return (
    <span className="mx-auto" onClick={() => signOut()}>
      {children}
    </span>
  );
}
