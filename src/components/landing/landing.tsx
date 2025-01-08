import { Hero } from "./hero";
import { FAQs } from "./faqs";
import { Cohorts } from "./cohorts";
import { Contribute } from "./contribute";
import { SuccessStories } from "./success-stories";

export const Landing = () => {
    return (
        <main id="top" className="min-h-screen">
            <Hero />
            <Cohorts />
            <SuccessStories />
            <Contribute />
            <FAQs />
        </main>
    );
};
