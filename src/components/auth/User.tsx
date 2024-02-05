import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignOut from "./SignOut";
import { User } from "lucide-react";
import Signin from "./SignIn";
import Link from "next/link";

export default async function UserProfile() {
  const session = await getServerSession(authOptions);

  function ShortName(name: string) {
    const firstLetters = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return firstLetters;
  }

  return (
    <div>
      {session ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={`${session.user?.image}`} alt="not Found" />
                <AvatarFallback className="bg-gradient-to-br from-blue-300 via-sky-400 to-sky-300">
                  {session.user?.image ? (
                    ShortName(session.user.username)
                  ) : (
                    <User />
                  )}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-60">
              <DropdownMenuLabel className="grid gap-1">
                <span>{session?.user?.username || session?.user?.name}</span>
                <span className="text-sm text-muted-foreground">
                  {session.user?.email}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuItem>Manage</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Wishlist">Your WishList</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <SignOut>
                <DropdownMenuItem className="text-center">
                  Sign Out
                </DropdownMenuItem>
              </SignOut>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Signin>LogIn/SignIn</Signin>
        </>
      )}
    </div>
  );
}
