import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    location: "Birmingham, AL",
    text: "They transformed our living room! The automation is so convenient and the design is stunning.",
    rating: 5,
  },
  {
    name: "Michael K.",
    location: "Hoover, AL",
    text: "Professional service from start to finish. Our smart blinds work perfectly with Alexa.",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    location: "Mountain Brook, AL",
    text: "Best investment for our home. Energy savings and privacy at the touch of a button!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from happy homeowners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-md border border-border">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">5-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-md border border-border">
            <span className="text-2xl">✓</span>
            <span className="font-semibold">Free Consultation</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-md border border-border">
            <span className="text-2xl">🏠</span>
            <span className="font-semibold">Smart Home Compatible</span>
          </div>
        </div>
      </div>
    </section>
  );
};
