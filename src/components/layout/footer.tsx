import Link from "next/link";
import { legalLinks } from "@/constants/legal";
import { socialLinks } from "@/constants/socials";
import { resourceLinks } from "@/constants/resources";

const Footer = () => {
    return (
        <footer className="flex items-start justify-between border-t px-20 py-6">
            <div className="flex flex-col justify-between gap-5">
                <div className="flex items-center gap-3 text-xl font-semibold">
                    <img
                        src="/harkirat.png"
                        alt="Harkirat logo"
                        className="w-11 rounded-full"
                    />

                    <p>100xDevs</p>
                </div>

                <div className="flex gap-3">
                    {socialLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} target="_blank">
                                {link.icon}
                            </Link>
                        );
                    })}
                </div>
            </div>

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
        </footer>
    );
};

export default Footer;
