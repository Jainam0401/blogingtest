"use client";

import { toast } from "sonner";
import { useState } from "react";
import SplitText from "./SplitText";

const TAGS = [
  "All",
  "Taxation",
  "GST & Indirect Tax",
  "Audit",
  "Financial Planning",
  "Business Advisory",
  "Compliance & Legal",
  "Startup Consulting",
];

export function Newsletter() {
  const [email, setEmail] = useState("");

  // Email validation function
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateEmail(email)) {
      toast.success("You have successfully subscribed to this email!");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <div className="w-full bg-sky-200 py-12 px-6 md:px-10">
      {/* Heading Section */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 >
          <SplitText className="text-balance text-3xl font-semibold py-2 md:text-5xl" splitType="words"  text="Stay Updated with Suvit’s Expert Insights" />
          
        </h2>
        <p className="mt-3 font-medium text-gray-700">
          Learn about the latest trends in GST, accounting automation, and CA
          best practices.
        </p>
      </div>

      {/* Newsletter Form */}
      <form
        className="mx-auto mt-8 flex max-w-lg items-center gap-3 rounded-lg bg-white p-2 shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="h-11 flex-1 rounded-md px-4 text-sm outline-none"
          placeholder="Email Address"
          aria-label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="h-11 rounded-md px-5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90"
        >
          Subscribe
        </button>
      </form>

      {/* Tags Section */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold">Filters based on tags</h3>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {TAGS.map((t, index) => (
            <div key={t} className="flex items-center">
              <button
                className={`${
                  t === "All" ? "bg-white " : "bg-white/50"
                } h-[32px] flex items-center justify-center px-4 py-1 rounded-[3px] 
                     shadow-[0_1px_2px_0_#00000026,0_0_5px_0_#1718180D]
                     text-gray-800 text-sm font-medium`}
              >
                {t}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
