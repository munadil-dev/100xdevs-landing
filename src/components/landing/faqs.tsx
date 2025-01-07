import { faqs } from "@/constants/faqs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import * as motion from "framer-motion/client";

export const FAQs = () => {
    return (
        <motion.section
            id="faqs"
            className="scroll-mt-6 px-6 py-20 sm:px-16 md:px-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.2,
                delay: 1,
            }}
        >
            <p className="pb-6 text-center text-4xl font-semibold">FAQs</p>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                    <AccordionItem value={`index=${faq.id}`} key={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </motion.section>
    );
};
