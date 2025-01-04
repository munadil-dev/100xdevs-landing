import Link from "next/link";
import { legalLinks } from "@/constants/footer/legal";
import { socialLinks } from "@/constants/footer/socials";
import { resourceLinks } from "@/constants/footer/resources";

const Footer = () => {
    return (
        <footer className="flex flex-col flex-wrap items-start justify-between gap-14 border-t px-6 py-6 sm:px-16 md:flex-row md:flex-nowrap md:px-32">
            <div className="flex flex-[4] flex-col gap-5">
                <div className="flex items-center gap-3 text-2xl font-semibold">
                    <img
                        src="/harkirat.png"
                        alt="Harkirat logo"
                        className="w-8 rounded-full"
                    />

                    <p>100xDevs</p>
                </div>

                <div className="flex items-center gap-5 sm:gap-3">
                    {socialLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} target="_blank">
                                {link.icon}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="flex w-full flex-[6] items-start justify-between gap-12 md:justify-between">
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-medium">Resources</p>

                    <div className="flex flex-col gap-2 text-neutral-400">
                        {resourceLinks.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    className="hover:text-blue-500"
                                    href={link.href}
                                    target="_blank"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-lg font-medium">Legal</p>

                    <div className="flex flex-col gap-2 text-neutral-400">
                        {legalLinks.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    className="hover:text-blue-500"
                                    href={link.href}
                                    target="_blank"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
