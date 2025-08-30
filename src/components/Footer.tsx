import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sports-black border-t border-sports-gray-light">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-display font-bold mb-4">
            Stay in the <span className="gradient-text">Game</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, special offers, and sports updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-sports-gray border-sports-gray-light focus:border-sports-blue"
            />
            <Button className="bg-gradient-primary border-0 hover:shadow-glow px-8">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="bg-sports-gray-light mb-16" />

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">SH</span>
              </div>
              <span className="font-display font-bold text-xl gradient-text">Sports Hub</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your premier destination for authentic sports jerseys and memorabilia. 
              Bringing fans closer to the game since 2024.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-sports-blue">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-sports-blue">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-sports-blue">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-sports-blue">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 gradient-text">Shop</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Cricket Jerseys</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Football Jerseys</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Basketball Jerseys</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Tennis Apparel</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Memorabilia</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Custom Jerseys</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 gradient-text">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Size Guide</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Shipping Info</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Returns & Exchanges</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Authenticity Promise</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">FAQ</a>
              <a href="#" className="block text-muted-foreground hover:text-sports-blue transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 gradient-text">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-sports-blue flex-shrink-0" />
                <span>123 Sports Avenue, Game City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-sports-blue flex-shrink-0" />
                <span>+1 (555) 123-GAME</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-sports-blue flex-shrink-0" />
                <span>hello@sportshub.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-sports-gray-light my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Sports Hub. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-sports-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sports-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sports-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;