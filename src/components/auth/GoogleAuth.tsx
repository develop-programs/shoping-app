"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function GoogleAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  function GoogleSignIn() {
    signIn("google");
  }
  return <span onClick={GoogleSignIn}>{children}</span>;
}
