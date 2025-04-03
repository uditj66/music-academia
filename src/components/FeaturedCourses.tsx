"use client";
import React from "react";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  // image: "/courses/guitar.jpg"
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className=" bg-gray-900 py-12 text-center uppercase">
      <div className="text-base font-semibold tracking-wide">
        <h1 className="text-purple-500">Featured courses</h1>
        <p className="text-gray-400 p-5">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <div>
        <div className="  normal-case p-5 grid grid-cols-1  lg:grid-cols-3 sm:grid-cols-2 gap-8 font-medium text-justify  antialiased">
          {featuredCourses.map((course: Course) => (
            <div key={course.id}>
              <BackgroundGradient>
                <div className="mt-5 mb-5 p-10 text-center">
                  <p className="text-xl">{course.title}</p>
                  <p className="text-xl">{course.description}</p>
                  <Link href={`/courses/${course.slug}`} className="mt-5"> <button className="mt-3">Learn More</button></Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Link href={"/courses"}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Explore all courses
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
