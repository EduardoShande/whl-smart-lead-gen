import rollerShades from "@/assets/roller-shades.jpg";
import zebraShades from "@/assets/zebra-shades.jpg";
import motorizedBlinds from "@/assets/motorized-blinds.jpg";
import smartCurtains from "@/assets/smart-curtains.jpg";

const products = [
  {
    name: "Roller Shades",
    image: rollerShades,
    description: "Clean, minimalist design with smooth operation",
  },
  {
    name: "Zebra / Dual Shades",
    image: zebraShades,
    description: "Versatile light control with modern style",
  },
  {
    name: "Motorized Blinds",
    image: motorizedBlinds,
    description: "Full automation with smart home integration",
  },
  {
    name: "Smart Curtain Systems",
    image: smartCurtains,
    description: "Elegant drapes with automated control",
  },
];

export const Products = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our range of modern window solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-primary-foreground text-sm">{product.description}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center group-hover:text-accent transition-colors">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
