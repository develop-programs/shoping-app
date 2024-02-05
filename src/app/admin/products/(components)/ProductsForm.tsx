"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Storage } from "@/services/Firebase/Firebase";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import Categories from "@/data/categories.json";
// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: "image/jpeg",
};

const formSchema = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string(),
  category: z.string(),
  discount: z.string(),
  brand: z.string(),
  model: z.string(),
  rating: z.string(),
  quantity: z.string(),
});

export default function ProductsForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      brand: "",
      discount: "",
      rating: "",
      model: "",
      quantity: "",
    },
  });

  const file = React.useRef<HTMLInputElement>(null);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (file.current?.files) {
      const storageRef = ref(Storage, "products/" + file.current.files[0].name);
      const uploadTask = uploadBytesResumable(
        storageRef,
        file.current.files[0],
        metadata
      );

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            axios
              .post("/api/products", {
                uuid: uuidv4(),
                name: values.name,
                price: parseFloat(values.price),
                description: values.description,
                category: values.category,
                brand: values.brand,
                discount: parseInt(values.discount),
                rating: parseInt(values.rating),
                model: values.model,
                quantity: parseInt(values.quantity),
                image: downloadURL,
              })
              .then(() => {
                toast.success("Product created");
                form.reset();
              });
          });
        }
      );
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-3 grid-flow-row grid-cols-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2 col-span-3">
          <Label htmlFor="image">Image</Label>
          <Input type="file" id="image" placeholder="image url" ref={file} />
        </div>
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Discount</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Categories.map((item, idk: number) => (
                      <SelectItem key={idk} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>modal</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add something about product here..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" type="submit" className="col-span-6">
          Submit
        </Button>
      </form>
    </Form>
  );
}
