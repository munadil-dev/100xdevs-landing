import { faqs } from "@/constants/faqs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQs = () => {
    return (
        <section id="faqs" className="scroll-mt-6 px-6 py-20 sm:px-16 md:px-32">
            <p className="pb-6 text-center text-4xl font-semibold">FAQs</p>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                    <AccordionItem value={`index=${faq.id}`} key={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};
