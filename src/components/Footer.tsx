import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">WHL LLC</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming homes with elegant, automated window solutions across Birmingham and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  123 Main Street<br />
                  Birmingham, AL 35203
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+12055550123" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  (205) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@whlllc.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  info@whlllc.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Installation Process
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-accent/20 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-accent/20 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 WHL LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
