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
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Props = {
  email: string | null;
  username: string | null;
  address: string | null;
  phone: string | null;
};

const formSchema = z.object({
  FirstName: z.string(),
  LastName: z.string(),
  email: z.string(),
  phone: z.string(),
  Address: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  postalCode: z.string(),
});

export default function UserDetails({
  email,
  username,
  address,
  phone,
}: Props) {
  const firstname = username?.split(" ").at(0);
  const Lastname = username?.split(" ").at(1);

  console.log(username);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email || "",
      phone: phone || "",
      FirstName: firstname || "",
      LastName: Lastname || "",
      Address: address || "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-flow-row gap-4 grid-cols-8"
      >
        <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>LastName</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => (
            <FormItem className="col-span-8">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Afghanistan">Afghanistan</SelectItem>
                    <SelectItem value="Albania">Albania</SelectItem>
                    <SelectItem value="Algeria">Algeria</SelectItem>
                    <SelectItem value="Andorra">Andorra</SelectItem>
                    <SelectItem value="Angola">Angola</SelectItem>
                    <SelectItem value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </SelectItem>
                    <SelectItem value="Argentina">Argentina</SelectItem>
                    <SelectItem value="Armenia">Armenia</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="Austria">Austria</SelectItem>
                    <SelectItem value="Azerbaijan">Azerbaijan</SelectItem>
                    <SelectItem value="Bahamas">Bahamas</SelectItem>
                    <SelectItem value="Bahrain">Bahrain</SelectItem>
                    <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="Barbados">Barbados</SelectItem>
                    <SelectItem value="Belarus">Belarus</SelectItem>
                    <SelectItem value="Belgium">Belgium</SelectItem>
                    <SelectItem value="Belize">Belize</SelectItem>
                    <SelectItem value="Benin">Benin</SelectItem>
                    <SelectItem value="Bhutan">Bhutan</SelectItem>
                    <SelectItem value="Bolivia">Bolivia</SelectItem>
                    <SelectItem value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </SelectItem>
                    <SelectItem value="Botswana">Botswana</SelectItem>
                    <SelectItem value="Brazil">Brazil</SelectItem>
                    <SelectItem value="Brunei">Brunei</SelectItem>
                    <SelectItem value="Bulgaria">Bulgaria</SelectItem>
                    <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
                    <SelectItem value="Burundi">Burundi</SelectItem>
                    <SelectItem value="Cabo Verde">Cabo Verde</SelectItem>
                    <SelectItem value="Cambodia">Cambodia</SelectItem>
                    <SelectItem value="Cameroon">Cameroon</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Central African Republic">
                      Central African Republic
                    </SelectItem>
                    <SelectItem value="Chad">Chad</SelectItem>
                    <SelectItem value="Chile">Chile</SelectItem>
                    <SelectItem value="China">China</SelectItem>
                    <SelectItem value="Colombia">Colombia</SelectItem>
                    <SelectItem value="Comoros">Comoros</SelectItem>
                    <SelectItem value="Congo (Congo-Brazzaville)">
                      Congo (Congo-Brazzaville)
                    </SelectItem>
                    <SelectItem value="Costa Rica">Costa Rica</SelectItem>
                    <SelectItem value="Croatia">Croatia</SelectItem>
                    <SelectItem value="Cuba">Cuba</SelectItem>
                    <SelectItem value="Cyprus">Cyprus</SelectItem>
                    <SelectItem value="Czech Republic">
                      Czech Republic
                    </SelectItem>
                    <SelectItem value="Denmark">Denmark</SelectItem>
                    <SelectItem value="Djibouti">Djibouti</SelectItem>
                    <SelectItem value="Dominica">Dominica</SelectItem>
                    <SelectItem value="Dominican Republic">
                      Dominican Republic
                    </SelectItem>
                    <SelectItem value="Ecuador">Ecuador</SelectItem>
                    <SelectItem value="Egypt">Egypt</SelectItem>
                    <SelectItem value="El Salvador">El Salvador</SelectItem>
                    <SelectItem value="Equatorial Guinea">
                      Equatorial Guinea
                    </SelectItem>
                    <SelectItem value="Eritrea">Eritrea</SelectItem>
                    <SelectItem value="Estonia">Estonia</SelectItem>
                    <SelectItem value="Eswatini">Eswatini</SelectItem>
                    <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                    <SelectItem value="Fiji">Fiji</SelectItem>
                    <SelectItem value="Finland">Finland</SelectItem>
                    <SelectItem value="France">France</SelectItem>
                    <SelectItem value="Gabon">Gabon</SelectItem>
                    <SelectItem value="Gambia">Gambia</SelectItem>
                    <SelectItem value="Georgia">Georgia</SelectItem>
                    <SelectItem value="Germany">Germany</SelectItem>
                    <SelectItem value="Ghana">Ghana</SelectItem>
                    <SelectItem value="Greece">Greece</SelectItem>
                    <SelectItem value="Grenada">Grenada</SelectItem>
                    <SelectItem value="Guatemala">Guatemala</SelectItem>
                    <SelectItem value="Guinea">Guinea</SelectItem>
                    <SelectItem value="Guinea-Bissau">Guinea-Bissau</SelectItem>
                    <SelectItem value="Guyana">Guyana</SelectItem>
                    <SelectItem value="Haiti">Haiti</SelectItem>
                    <SelectItem value="Honduras">Honduras</SelectItem>
                    <SelectItem value="Hungary">Hungary</SelectItem>
                    <SelectItem value="Iceland">Iceland</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Indonesia">Indonesia</SelectItem>
                    <SelectItem value="Iran">Iran</SelectItem>
                    <SelectItem value="Iraq">Iraq</SelectItem>
                    <SelectItem value="Ireland">Ireland</SelectItem>
                    <SelectItem value="Israel">Israel</SelectItem>
                    <SelectItem value="Italy">Italy</SelectItem>
                    <SelectItem value="Jamaica">Jamaica</SelectItem>
                    <SelectItem value="Japan">Japan</SelectItem>
                    <SelectItem value="Jordan">Jordan</SelectItem>
                    <SelectItem value="Kazakhstan">Kazakhstan</SelectItem>
                    <SelectItem value="Kenya">Kenya</SelectItem>
                    <SelectItem value="Kiribati">Kiribati</SelectItem>
                    <SelectItem value="Korea, North">Korea, North</SelectItem>
                    <SelectItem value="Korea, South">Korea, South</SelectItem>
                    <SelectItem value="Kosovo">Kosovo</SelectItem>
                    <SelectItem value="Kuwait">Kuwait</SelectItem>
                    <SelectItem value="Kyrgyzstan">Kyrgyzstan</SelectItem>
                    <SelectItem value="Laos">Laos</SelectItem>
                    <SelectItem value="Latvia">Latvia</SelectItem>
                    <SelectItem value="Lebanon">Lebanon</SelectItem>
                    <SelectItem value="Lesotho">Lesotho</SelectItem>
                    <SelectItem value="Liberia">Liberia</SelectItem>
                    <SelectItem value="Libya">Libya</SelectItem>
                    <SelectItem value="Liechtenstein">Liechtenstein</SelectItem>
                    <SelectItem value="Lithuania">Lithuania</SelectItem>
                    <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                    <SelectItem value="Madagascar">Madagascar</SelectItem>
                    <SelectItem value="Malawi">Malawi</SelectItem>
                    <SelectItem value="Malaysia">Malaysia</SelectItem>
                    <SelectItem value="Maldives">Maldives</SelectItem>
                    <SelectItem value="Mali">Mali</SelectItem>
                    <SelectItem value="Malta">Malta</SelectItem>
                    <SelectItem value="Marshall Islands">
                      Marshall Islands
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>State</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a state..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cg">Chhattisgarh</SelectItem>
                    <SelectItem value="jh">Jharkhand</SelectItem>
                    <SelectItem value="or">Odisha</SelectItem>
                    <SelectItem value="up">Uttar Pradesh</SelectItem>
                    <SelectItem value="wb">West Bengal</SelectItem>
                    <SelectItem value="br">Bihar</SelectItem>
                    <SelectItem value="or">Orissa</SelectItem>
                    <SelectItem value="hp">Himachal Pradesh</SelectItem>
                    <SelectItem value="jk">Jammu and Kashmir</SelectItem>
                    <SelectItem value="pb">Punjab</SelectItem>
                    <SelectItem value="sk">Sikkim</SelectItem>
                    <SelectItem value="tn">Tamil Nadu</SelectItem>
                    <SelectItem value="dl">Delhi</SelectItem>
                    <SelectItem value="ka">Karnataka</SelectItem>
                    <SelectItem value="mp">Madhya Pradesh</SelectItem>
                    <SelectItem value="py">Puducherry</SelectItem>
                    <SelectItem value="tg">Telangana</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a city..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cg">Chhattisgarh</SelectItem>
                    <SelectItem value="jh">Jharkhand</SelectItem>
                    <SelectItem value="or">Odisha</SelectItem>
                    <SelectItem value="up">Uttar Pradesh</SelectItem>
                    <SelectItem value="wb">West Bengal</SelectItem>
                    <SelectItem value="br">Bihar</SelectItem>
                    <SelectItem value="or">Orissa</SelectItem>
                    <SelectItem value="hp">Himachal Pradesh</SelectItem>
                    <SelectItem value="jk">Jammu and Kashmir</SelectItem>
                    <SelectItem value="pb">Punjab</SelectItem>
                    <SelectItem value="sk">Sikkim</SelectItem>
                    <SelectItem value="tn">Tamil Nadu</SelectItem>
                    <SelectItem value="dl">Delhi</SelectItem>
                    <SelectItem value="ka">Karnataka</SelectItem>
                    <SelectItem value="mp">Madhya Pradesh</SelectItem>
                    <SelectItem value="py">Puducherry</SelectItem>
                    <SelectItem value="tg">Telangana</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <div className="col-span-8 grid gap-4">
          <div className="flex gap-1 items-center">
            <Checkbox id="same" />
            <Label htmlFor="same">
              Shiping Address is same as mention above
            </Label>
          </div>
          <div className="flex gap-1 items-center">
            <Checkbox id="save" />
            <Label htmlFor="save">Save this information for next time</Label>
          </div>
        </div>
        <Separator />
        <div className="col-span-8">
          <Button className="px-6 mt-4" size="lg">
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
