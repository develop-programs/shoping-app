import Signin from "@/components/auth/SignIn";
import React from "react";
import { RegisterForm } from "./(components)/RegisterForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen grid grid-flow-col col-span-12">
      <div className="col-span-8 border"></div>
      <div className="col-span-4 grid place-content-center">
        <div className="absolute w-auto border rounded-sm right-4 top-4 backdrop-blur-md">
          <Signin>Login</Signin>
        </div>
        <div className="container max-w-md grid gap-4">
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
