import Navbar from "@/components/custom/Navbar";
import Query from "@/components/forms/Query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <main>
      <Navbar />
      <div className="container max-w-7xl px-4 pt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30622.941316104683!2d81.64693947511296!3d21.23598302919872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705672115813!5m2!1sen!2sin"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96"
        ></iframe>
        <div className="w-full flex flex-col lg:flex-row gap-4 pt-6">
          <div className="flex-1 h-[25rem]">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Contact Us using
                </CardTitle>
                <CardDescription>Reach us out using</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 justify-center">
                <div className="pt-12">What's App: 9294512259</div>
                <div>Email: shreyanshawadhiya@gmail.com</div>
                <div>Phone: 9294512259</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1 h-[25rem]">
            <Query />
          </div>
        </div>
      </div>
    </main>
  );
}
