import { Docker } from "../icons/docker";
import { Nextjs } from "../icons/nextjs";
import { Solana } from "../icons/solana";

export const Hero = () => {
    return (
        <section className="flex items-center justify-center">
            <h1 className="max-w-2xl text-balance px-1 pt-28 text-center text-5xl font-semibold tracking-tight md:text-6xl">
                Be a{" "}
                <span className="bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent">
                    100xDev
                </span>
                , because 10x isn&apos;t{" "}
                <span className="underline decoration-blue-500 underline-offset-4">
                    enough<span className="text-blue-500">!</span>
                </span>
            </h1>

            <div className="absolute -z-10">
                <span
                    className="animate-float absolute -left-48 -top-10 hidden sm:block md:-left-60"
                    style={{ animationDuration: "2.1s" }}
                >
                    <Nextjs />
                </span>

                <span
                    className="animate-float absolute left-40 hidden sm:block md:-top-4 md:left-48"
                    style={{ animationDuration: "1.8s" }}
                >
                    <Docker />
                </span>

                <span
                    className="animate-float absolute -left-10 top-36 hidden sm:block"
                    style={{ animationDuration: "2.4s" }}
                >
                    <Solana />
                </span>
            </div>
        </section>
    );
};
