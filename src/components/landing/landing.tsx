import { Hero } from "./hero";
import { FAQs } from "./faqs";

export const Landing = () => {
    return (
        <main id="top" className="min-h-screen">
            <Hero />
            <FAQs />
        </main>
    );
};
