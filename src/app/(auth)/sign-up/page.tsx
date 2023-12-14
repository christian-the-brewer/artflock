"use client"

import Image from "next/image";
import birdLogo from "../../../../public/navbar/icons/bird_logo.svg"
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const Page = () => {
    return <>
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <Image src={birdLogo} alt="bird logo"/>
                    <h1 className="font-2xl font-bold">
                        Create Account
                    </h1>
                    <Link className={buttonVariants({variant: "link", className: "gap-1.5"})}
                          href="/sign-in">
                        Already have an account? Sign In
                        <ArrowRight className="h-4 w-4"/>
                    </Link>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={}>
                        <div className="grid gap-2">
                            <div className="grid gap-2 py-2">

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>;
}

export default Page