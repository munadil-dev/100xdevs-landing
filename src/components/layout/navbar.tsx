import Link from "next/link";
import * as motion from "framer-motion/client";

const Navbar = () => {
    return (
        <motion.nav
            className="sticky top-0 flex items-center justify-between bg-inherit px-20 py-7"
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
                href={""}
                className="bg-gradient-to-tr from-blue-500 from-30% to-blue-600 to-100% bg-clip-text text-2xl font-semibold text-transparent"
            >
                100xDevs
            </Link>

            <div className="flex items-center gap-6 text-lg font-medium">
                <Link href={"#course"} className="hover:text-blue-500">
                    Course
                </Link>

                <Link href={"#testimonials"} className="hover:text-blue-500">
                    Testimonials
                </Link>

                <Link href={"#faqs"} className="hover:text-blue-500">
                    FAQs
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
