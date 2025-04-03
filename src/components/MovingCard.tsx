"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const testimonials = [
  {
    quote:
      "This academy has transformed my music skills! The instructors are incredibly talented and supportive.",
    name: "Emily Carter",
    title: "Piano Student",
  },
  {
    quote:
      "I've always wanted to learn guitar, and this academy made it possible. Highly recommended!",
    name: "Michael Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The vocal training here is top-notch! My confidence and technique have improved significantly.",
    name: "Sophia Martinez",
    title: "Vocal Student",
  },
  {
    quote:
      "I love the supportive atmosphere and personalized lessons. The best place to learn music!",
    name: "Daniel Wright",
    title: "Drum Student",
  },
  {
    quote:
      "The faculty here are experienced professionals who make learning fun and engaging.",
    name: "Jessica Lee",
    title: "Violin Student",
  },
  {
    quote:
      "The environment is inspiring, and the instructors really care about our growth as musicians.",
    name: "Robert Adams",
    title: "Saxophone Student",
  },
  {
    quote:
      "Joining this academy was the best decision I’ve made. I’ve improved so much in just a few months!",
    name: "Natalie Brown",
    title: "Flute Student",
  },
  {
    quote:
      "I never thought I could compose music, but this academy helped me achieve that dream!",
    name: "Chris Evans",
    title: "Music Composition Student",
  },
  {
    quote:
      "The facilities are excellent, and the teaching methods are innovative and effective.",
    name: "Ava Thompson",
    title: "Cello Student",
  },
  {
    quote:
      "The passion for music here is contagious! I feel motivated every time I come to class.",
    name: "William Robinson",
    title: "Keyboard Student",
  },
  {
    quote:
      "I appreciate the patience and encouragement from the teachers. Learning here is a joy!",
    name: "Olivia Harris",
    title: "Clarinet Student",
  },
  {
    quote:
      "As a beginner, I was nervous, but the teachers made everything so easy to understand.",
    name: "Liam Walker",
    title: "Bass Guitar Student",
  },
  {
    quote: "This academy doesn’t just teach music, it nurtures artists!",
    name: "Zoe Lewis",
    title: "Music Theory Student",
  },
  {
    quote:
      "I’ve learned so much about stage performance and confidence. A great experience!",
    name: "Ethan Scott",
    title: "Live Performance Student",
  },
  {
    quote:
      "This academy is the perfect place for anyone passionate about music!",
    name: "Isabella King",
    title: "Jazz Piano Student",
  },
];
function MovingCard() {
  return (
    <>
      <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

export default MovingCard;
