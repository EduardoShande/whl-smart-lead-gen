import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does installation take?",
    answer: "Most installations are completed within 2-4 hours, depending on the number of windows. Our professional team ensures minimal disruption to your daily routine.",
  },
  {
    question: "Do you offer free on-site consultations?",
    answer: "Yes! We provide complimentary in-home design consultations where we measure your windows, discuss your needs, and provide a detailed quote with no obligation.",
  },
  {
    question: "Are the blinds compatible with Alexa or Google Home?",
    answer: "Absolutely! Our motorized smart blinds integrate seamlessly with Amazon Alexa, Google Home, and Apple HomeKit, allowing you to control them with voice commands.",
  },
  {
    question: "What warranty do you provide?",
    answer: "All our products come with a comprehensive 5-year warranty covering materials and workmanship. We stand behind the quality of our installations.",
  },
  {
    question: "Can I control the blinds remotely?",
    answer: "Yes, with our smart home app, you can control your blinds from anywhere in the world. Set schedules, adjust lighting, and monitor your home remotely.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Birmingham and surrounding areas including Hoover, Mountain Brook, Vestavia Hills, Homewood, and more. Contact us to confirm service in your area.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our smart blinds
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
