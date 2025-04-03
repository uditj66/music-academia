"use client"; /* next.js is fullstack framework so server-side rendering occurs, so dom manupulation should be done on client side that's why write "use client" for changes to occur on client-side.React hook works on client side  */
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
         <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Classical</HoveredLink>
            <HoveredLink href="/interface-design">HipHop</HoveredLink>
            <HoveredLink href="/seo">Instrumental</HoveredLink>
            <HoveredLink href="/branding">Hollywood</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Piano"
              href="/piano"
              src="/#"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Guitar"
              href="/guitar"
              src="/#"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Saxophone"
              href="/saxophone"
              src="/#"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Tabla"
              href="/tabla"
              src="/#"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">All Courses</HoveredLink>
            <HoveredLink href="/individual">Basic Composition Theory</HoveredLink>
            <HoveredLink href="/team">Advanced Composition</HoveredLink>
            <HoveredLink href="/enterprise">SongWriting</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar



