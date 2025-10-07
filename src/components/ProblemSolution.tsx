import { Sun, Flame, Eye, Hand } from "lucide-react";

const problems = [
  { icon: Sun, title: "Annoying Glare", solution: "Auto-adjust to perfect lighting" },
  { icon: Flame, title: "Heat & Energy Loss", solution: "Smart insulation saves energy" },
  { icon: Eye, title: "Lack of Privacy", solution: "Instant privacy at your command" },
  { icon: Hand, title: "Manual Controls", solution: "Effortless automation & voice control" },
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Common Window Problems,<br />
            <span className="text-accent">Smart Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Say goodbye to heat, glare, and tangled cords. Our smart blinds adjust automatically, 
            giving you perfect light and comfort—effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
