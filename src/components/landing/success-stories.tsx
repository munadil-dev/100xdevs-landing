import Link from "next/link";
import { Tweet } from "react-tweet";
import Marquee from "../ui/marquee";
import { tweetIds } from "@/constants/tweets";

export const SuccessStories = () => {
    return (
        <>
            <section
                id="success-stories"
                className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-32 md:shadow-xl"
            >
                <p className="pb-6 text-center text-4xl font-semibold">
                    Success stories
                </p>

                <Marquee className="[--duration:40s]">
                    {tweetIds.map((id, index) => (
                        <div key={index} className="h-fit w-64 sm:w-80">
                            <Tweet id={id} />
                        </div>
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </section>

            <p className="text-center font-medium sm:text-lg">
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
            </p>
        </>
    );
};
