import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export const SpecialOffer = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent/20 rounded-full px-6 py-2 mb-6">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-accent" />
              <span className="font-semibold text-accent-foreground">Limited Time Offer</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Buy 10 Blinds,<br />
            <span className="text-accent">Get 1 FREE!</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Perfect for new homeowners and remodel projects. 
            Transform your entire home with premium smart blinds.
          </p>

          <Button 
            size="lg" 
            variant="offer"
            onClick={scrollToForm}
            className="text-lg px-8 py-6"
          >
            Claim This Offer Now
          </Button>
        </div>
      </div>
    </section>
  );
};
