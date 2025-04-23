import Link from "next/link";
import ShineBorder from "../ui/shine-border";
import * as motion from "framer-motion/client";

export const Cohorts = () => {
    return (
        <motion.section
            id="cohorts"
            className="container mx-auto px-6 pt-36 sm:px-10"
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
            <p className="pb-6 text-center text-4xl font-semibold">Cohorts</p>

            <div className="grid grid-cols-1 justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article className="flex flex-col gap-6 rounded-3xl border p-5">
                    <p className="text-2xl font-bold text-blue-500">
                        Cohort 1{" "}
                        <span className="text-sm font-medium text-white/80">
                            (Finished)
                        </span>
                    </p>

                    <img
                        src="https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610063563WhatsApp-Image-2023-11-08-at-8.31.14-PM.jpeg"
                        alt="Cohort 1 banner"
                        className="w-full rounded-xl"
                    />

                    <ul className="flex flex-col gap-1 font-medium text-white/90">
                        <li>Foundations on JS, HTML, CSS</li>
                        <li>MERN and ORMs</li>
                        <li>Recoil</li>
                        <li>Tailwind</li>
                        <li>MonoRepos</li>
                        <li>Next.js and Typescript</li>
                        <li>Scaling Node.js</li>
                        <li>Deploying npm packages</li>
                        <li>Docker</li>
                        <li>Deploying to AWS</li>
                    </ul>

                    <p className="mt-auto text-3xl font-bold text-blue-500">
                        ₹3499
                    </p>
                    <Link
                        className="rounded-full bg-white py-3 text-center font-semibold text-black"
                        href="https://harkirat.classx.co.in/new-courses/6-live-0-1"
                        target="_blank"
                    >
                        Purchase
                    </Link>
                </article>

                <article className="flex flex-col gap-6 rounded-3xl border p-5">
                    <p className="text-2xl font-bold text-blue-500">
                        Cohort 2{" "}
                        <span className="text-sm font-medium text-white/80">
                            (Finished)
                        </span>
                    </p>

                    <img
                        src="https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610081268WhatsApp-Image-2023-11-08-at-8.31.13-PM.jpeg"
                        alt="Cohort 2 banner"
                        className="w-full rounded-xl"
                    />

                    <ul className="flex flex-col gap-1 font-medium text-white/90">
                        <li>Message Queues and PubSubs</li>
                        <li>Proxies and Load balancers</li>
                        <li>Redis</li>
                        <li>Kafka</li>
                        <li>Sharding, Replication, Resiliency</li>
                        <li>gRPC</li>
                        <li>WebSockets, WebRTC</li>
                        <li>Kubernetes</li>
                        <li>CI/CD</li>
                        <li>Monitoring, Promhetheus, Grafana</li>
                        <li>AWS - EC2, S3, CDNs, LB, EKs</li>
                        <li>Projects - Zapier, and Zerodha</li>
                    </ul>

                    <p className="mt-auto text-3xl font-bold text-blue-500">
                        ₹3989
                    </p>
                    <Link
                        className="rounded-full bg-white py-3 text-center font-semibold text-black"
                        href="https://harkirat.classx.co.in/new-courses/7-live-1-100"
                        target="_blank"
                    >
                        Purchase
                    </Link>
                </article>

                <ShineBorder
                    className="relative flex flex-col border bg-background bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 p-5 md:shadow-xl"
                    color={["#FFFFFF", "#00D1FF", "#FFD700"]}
                >
                    <p className="absolute -top-3 right-10 rounded-full bg-white px-3 font-medium text-blue-500">
                        Ongoing
                    </p>

                    <article className="flex h-full flex-col gap-6">
                        <p className="text-2xl font-bold">Cohort 3</p>

                        <img
                            src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png"
                            alt="Cohort 3 banner"
                            className="w-full rounded-xl"
                        />

                        <ul className="flex flex-col gap-1 font-medium">
                            <li>Everything from Cohort 1 and 2</li>
                            <li className="text-lg font-semibold underline underline-offset-2">
                                Web 3
                            </li>
                            <li>ETH client side apps and adapters</li>
                            <li>EVM</li>
                            <li>Solana client side apps and adapters</li>
                            <li>Data model on Solana</li>
                            <li>Solidity basics to advance</li>
                            <li>Smart contracts in Solidity</li>
                            <li>Rust basics to advance</li>
                            <li>Programs on Solana</li>
                        </ul>

                        <p className="mt-auto text-3xl font-bold">₹5989</p>
                        <Link
                            className="rounded-full bg-white py-3 text-center font-semibold text-black"
                            href="https://harkirat.classx.co.in/new-courses/14-complete-web-development-devops-blockchain-cohort"
                            target="_blank"
                        >
                            Purchase
                        </Link>
                    </article>
                </ShineBorder>
            </div>

            <p className="pt-10 text-center text-lg font-medium">
                Check other available options{" "}
                <Link
                    href={"https://harkirat.classx.co.in/new-courses"}
                    className="underline decoration-blue-500 decoration-[3px]"
                >
                    here
                </Link>
            </p>
        </motion.section>
    );
};
