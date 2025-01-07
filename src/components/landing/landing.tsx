import { Hero } from "./hero";
import { FAQs } from "./faqs";
import { Contribute } from "./contribute";

export const Landing = () => {
    return (
        <main id="top" className="min-h-screen">
            <Hero />
            <Contribute />
            <FAQs />
        </main>
    );
};
