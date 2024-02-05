import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { SignInForm } from "./(components)/SignInForm";
import { Metadata } from "next";
import GoogleAuth from "@/components/auth/GoogleAuth";
import GithubAuth from "@/components/auth/GithubAuht";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In",
  icons: {
    icon: "/user.ico",
  },
};

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="w-full md:w-2/4 xl:w-1/4">
        <CardHeader className="text-2xl text-center font-bold">
          Sign In
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter className="grid gap-2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" size="lg" className="flex gap-2">
            <GithubIcon size={16} />
            <GithubAuth>Github</GithubAuth>
          </Button>
          <Button variant="outline" size="lg" className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.607,1.972-2.101,3.467-4.26,3.866 c-3.431,0.635-6.862-1.865-7.19-5.339c-0.34-3.595,2.479-6.62,6.005-6.62c1.002,0,1.946,0.246,2.777,0.679 c0.757,0.395,1.683,0.236,2.286-0.368l0,0c0.954-0.954,0.701-2.563-0.498-3.179c-1.678-0.862-3.631-1.264-5.692-1.038 c-4.583,0.502-8.31,4.226-8.812,8.809C1.945,16.9,6.649,22,12.545,22c6.368,0,8.972-4.515,9.499-8.398 c0.242-1.78-1.182-3.352-2.978-3.354l-4.61-0.006C13.401,10.24,12.545,11.095,12.545,12.151z"></path>
            </svg>
            <GoogleAuth>Google</GoogleAuth>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
