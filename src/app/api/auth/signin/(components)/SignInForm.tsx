"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import GoogleAuth from "@/components/auth/GoogleAuth";
import GithubAuth from "@/components/auth/GithubAuht";

const formSchema = z.object({
  email: z.string().min(10, {
    message: "email is required",
  }),
  password: z.string().min(5, {
    message: "password is required",
  }),
});

export function SignInForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    signIn("credentials", {
      ...values,
      redirect: true,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button variant="link">Forgot Password?</Button>
        </div>
        <Button type="submit" size="lg">
          Submit
        </Button>
        <span className="text-center text-sm flex gap-2">
          Don't have an account?
          <Link href="/api/auth/NewUser" className="hover:underline">
            Create One
          </Link>
        </span>
      </form>
    </Form>
  );
}
