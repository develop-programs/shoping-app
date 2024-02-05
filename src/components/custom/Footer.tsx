import React from "react";
import FooterForm from "../forms/FooterForm";
import { Github } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="w-full h-auto px-6 border-t">
      <div className="grid grid-flow-row grid-cols-9 ga-3 py-3">
        <div className="col-span-3 flex items-center">
          <span className="text-4xl font-black shadow-sm">Shopzo</span>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-3">
          <FooterForm />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2 py-4">
        <span className="text-base font-bold">Follow us on</span>
        <div className="flex gap-3 items-center">
          <Button variant="outline" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
            </svg>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="github"
              fill="currentColor"
            >
              <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
            </svg>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 100 100"
              id="facebook"
              fill="currentColor"
            >
              <path d="M50.8,3.57A45.75,45.75,0,1,0,96.54,49.32,45.8,45.8,0,0,0,50.8,3.57ZM63.49,30.71a.69.69,0,0,1-.69.69H57.3a2.45,2.45,0,0,0-2.45,2.44V39.6h7.83a.69.69,0,0,1,.68.75l-.68,8.12a.69.69,0,0,1-.69.63H54.85V76.05a.69.69,0,0,1-.69.69H44.31a.69.69,0,0,1-.69-.69V49.1H38.7a.69.69,0,0,1-.69-.69V40.29a.69.69,0,0,1,.69-.69h4.92V31.78A9.88,9.88,0,0,1,53.5,21.9h9.3a.69.69,0,0,1,.69.69Z"></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="w-full text-center">
        <span className="text-sm">© 2024 Shopzo. All rights reserved.</span>
      </div>
    </div>
  );
}
