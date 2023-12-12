"use client";

import {number} from "prop-types";
import {useRef, useState} from "react";
import {PRODUCT_CATEGORIES} from "@/config/Index";
import NavItem from "@/components/NavItem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    const isAnyOpen = activeIndex != null

    const navRef = useRef<HTMLDivElement>(null)

    return (
        <div className="flex gap-4 h-full">
            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(i)
                    }
                }
                const isOpen = i === activeIndex
                return (
                    <NavItem
                    category={category}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    key={category.value}
                    isAnyOpen={isAnyOpen}
                    />
                )
            })}
        </div>
    )
}

export default NavItems;