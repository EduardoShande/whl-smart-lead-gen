import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { SpecialOffer } from "@/components/SpecialOffer";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Products />
      <Testimonials />
      <SpecialOffer />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
