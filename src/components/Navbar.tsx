import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Icons} from "@/components/Icons";
import NavItems from "@/components/NavItems";
import Image from "next/image";
import birdLogo from "../../public/navbar/icons/bird_logo.svg"
import {buttonVariants} from "@/components/ui/button";


const Navbar = () => {

    const user = null

    return <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
            <MaxWidthWrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* TODO: Mobile Navbar*/}
                        <div className="ml-4 flex lg:ml-0">
                            <Link href="/">
                                {/*<Icons.logo className="h-10 w-10" />*/}
                                <Image src={birdLogo} alt="bird logo"
                                       className="h-20 w-20"
                                />
                            </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                            <NavItems/>
                        </div>
                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                {user ? null : <Link href="/sign-in"
                                                     className={buttonVariants({variant: "ghost"})}
                                >Sign In</Link>}
                                {user ? null : (<span className="h-6 w-px bg-gray-200"
                                                     aria-hidden="true"/>)}
                                {user ? (<p></p>) : (<Link href="/signup"
                                                        className={buttonVariants({variant: "ghost",})}>
                                    Create Account
                                </Link>
                                    )}
                                {}
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>;
}
export default Navbar;