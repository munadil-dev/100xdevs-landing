import { Tweet } from "react-tweet";
import Marquee from "../ui/marquee";
import { tweetIds } from "@/constants/tweets";

export const SuccessStories = () => {
    return (
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-40 md:shadow-xl">
            <p className="pb-6 text-center text-4xl font-semibold">
                Success stories
            </p>

            <Marquee className="[--duration:40s]">
                {tweetIds.map((id, index) => (
                    <div
                        key={index}
                        className="flex h-fit w-80 items-center justify-center"
                    >
                        <Tweet id={id} />
                    </div>
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </section>
    );
};
