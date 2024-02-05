"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function GithubAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  function GithubSignIn() {
    signIn("github");
  }
  return <span onClick={GithubSignIn}>{children}</span>;
}
