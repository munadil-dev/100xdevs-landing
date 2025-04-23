"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { MobileNavbar } from "./mobile-navbar";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
            <motion.nav
                className="container sticky top-0 z-50 mx-auto flex items-center justify-between bg-inherit px-6 py-7 sm:px-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 0.2,
                    delay: 0.3,
                }}
            >
                <Link
                    href={"#top"}
                    className="bg-gradient-to-tr from-blue-500 from-30% to-blue-600 to-100% bg-clip-text text-2xl font-semibold text-transparent"
                >
                    100xDevs
                </Link>

                <div className="hidden items-center gap-6 text-lg font-medium tracking-tighter sm:flex">
                    <Link href={"#cohorts"} className="hover:text-blue-500">
                        Cohorts
                    </Link>

                    <Link
                        href={"#success-stories"}
                        className="hover:text-blue-500"
                    >
                        Success Stories
                    </Link>

                    <Link href={"#faqs"} className="hover:text-blue-500">
                        FAQs
                    </Link>
                </div>

                <div className="sm:hidden">
                    {isMenuOpen ? (
                        <X onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <Menu onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            </motion.nav>

            <MobileNavbar
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </>
    );
};

export default Navbar;
