import { Calendar, FileText, Wrench } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book a Free Design Consultation",
    description: "Schedule a no-obligation consultation with our design experts.",
  },
  {
    icon: FileText,
    title: "Get a Smart Design Plan + Quote",
    description: "Receive a custom plan tailored to your home with transparent pricing.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Our certified team handles everything from start to finish.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From design to installation — we handle everything for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="bg-gradient-to-br from-accent to-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-accent/30 hidden md:block" 
                     style={{ 
                       display: index === steps.length - 1 ? 'none' : 'block',
                       transform: 'translateX(50%)',
                     }} 
                />
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
