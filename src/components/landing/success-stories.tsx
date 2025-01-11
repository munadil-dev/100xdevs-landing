"use client";

import Link from "next/link";
import Marquee from "../ui/marquee";
import { tweetIds } from "@/constants/tweets";
import * as motion from "framer-motion/client";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const SuccessStories = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 1,
                    duration: 0.2,
                }}
                id="success-stories"
                className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-32 md:shadow-xl"
            >
                <p className="pb-6 text-center text-4xl font-semibold">
                    Success stories
                </p>

                <Marquee className="[--duration:30s]">
                    {tweetIds.map((id, index) => (
                        <div key={index} className="h-fit w-64 sm:w-80">
                            <TwitterTweetEmbed tweetId={id} />
                        </div>
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </motion.section>

            <motion.p
                className="text-center font-medium sm:text-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 1,
                    duration: 0.2,
                }}
            >
                And more. Check out the{" "}
                <Link
                    href={"https://www.youtube.com/@100xdevs-k"}
                    target="_blank"
                    className="text-xl font-semibold underline decoration-blue-500 decoration-[3px] underline-offset-2"
                >
                    podcasts
                    <span className="text-2xl font-semibold text-blue-500">
                        !
                    </span>
                </Link>
            </motion.p>
        </>
    );
};
