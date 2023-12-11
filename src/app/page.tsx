import Image from 'next/image'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Bird art by humans for <span className="text-blue-600">birds</span>.</h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Art Flock. Every purchase supports birds.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/products" className={buttonVariants()}>Trending</Link>
              <Button variant="ghost">Our Commitment to Birds</Button>
          </div>
      </div>
        {/* TODO: List products*/}
    </MaxWidthWrapper>
  )
}
