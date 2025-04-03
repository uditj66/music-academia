"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
const featuredWebinars = [
    {
      title: 'understanding music theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug:( <Highlight>"Understanding Music Theory"</Highlight>),
      isFeatured: true,
    },
    {
      title: 'the art-of song-writing',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: ( <Highlight>"The Art-Of Song-Writing"</Highlight>),
      isFeatured: true,
    },
    {
      title: 'mastering-your-instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug:( <Highlight>"Mastering Your Instrument"</Highlight>),
      isFeatured: true,
    },
    {
      title: 'music-production-essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: ( <Highlight>"Music Production Essentials"</Highlight>),
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'live-performance-techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: ( <Highlight>"Live Performance Techniques"</Highlight>),
      isFeatured: true,
    },
    {
      title: 'digital-music-marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: ( <Highlight>"Digital Music Marketing"</Highlight>),
      isFeatured: true,
    },
  ];
function MyCardStack() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={featuredWebinars} />
    </div>
  );
}

export default MyCardStack;
