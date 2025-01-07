import Link from "next/link";
import * as motion from "framer-motion/client";

export const Contribute = () => {
    return (
        <section className="px-6 pb-4 pt-20 sm:px-16 md:px-32">
            <motion.p
                className="pb-6 text-center text-4xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 0.2,
                    delay: 0.7,
                }}
            >
                Contribute
            </motion.p>

            <motion.div
                className="flex flex-col items-center justify-around gap-8 rounded-t-3xl rounded-bl-3xl rounded-br-lg bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 px-5 py-6 sm:flex-row"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    duration: 0.2,
                    delay: 0.8,
                }}
            >
                <div className="flex flex-col gap-2">
                    <p className="text-center text-4xl font-semibold sm:text-start sm:text-5xl">
                        Want Bounties?
                    </p>

                    <p className="text-balance text-center font-medium sm:text-start sm:text-lg">
                        Contribute to{" "}
                        <Link
                            href={"https://github.com/code100x"}
                            target="_blank"
                            className="underline decoration-neutral-100 underline-offset-2 hover:text-neutral-200"
                        >
                            @code100x
                        </Link>{" "}
                        repositories and get bounties in dollars!
                    </p>
                </div>

                <img
                    src="/bounty.jpeg"
                    alt="Harkirat giving laptop as bounty"
                    className="h-40 w-64 rounded-t-2xl rounded-bl-2xl rounded-br-lg"
                />
            </motion.div>
        </section>
    );
};
