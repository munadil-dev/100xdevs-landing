"use client";

import Link from "next/link";
import React, { SetStateAction, useEffect } from "react";

interface IMobileNavbar {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const MobileNavbar = ({ isMenuOpen, setIsMenuOpen }: IMobileNavbar) => {
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMenuOpen]);

    if (!isMenuOpen) {
        return null;
    }

    return (
        <div className="fixed left-0 top-14 z-50 flex h-screen w-screen flex-col gap-7 bg-inherit pl-6 pt-12 text-2xl font-semibold sm:hidden">
            <Link
                href={"#course"}
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
            >
                Course
            </Link>

            <Link
                href={"#testimonials"}
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
            >
                Testimonials
            </Link>

            <Link
                href={"#faqs"}
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
            >
                FAQs
            </Link>
        </div>
    );
};
