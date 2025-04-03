"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden relative mx-auto py-10 md:py-0">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4  relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master The Art Of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Manhattan School of Music is one of the World's Premier music conservatories for classical music ,Jazz ,Hip-Hop and musical theatre
          
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            {" "}
            <Button className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
