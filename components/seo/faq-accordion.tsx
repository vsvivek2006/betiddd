import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { FaqItem } from '@/lib/data/types';

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="px-5 rounded-xl border border-border bg-card/50 glass-card-hover"
        >
          <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
