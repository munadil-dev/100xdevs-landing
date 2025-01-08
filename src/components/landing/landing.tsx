import { Hero } from "./hero";
import { FAQs } from "./faqs";
import { Contribute } from "./contribute";
import { SuccessStories } from "./success-stories";

export const Landing = () => {
    return (
        <main id="top" className="min-h-screen">
            <Hero />
            <SuccessStories />
            <Contribute />
            <FAQs />
        </main>
    );
};
