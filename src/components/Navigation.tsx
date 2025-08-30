import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">SH</span>
            </div>
            <span className="font-display font-bold text-xl gradient-text">Sports Hub</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Cricket
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Football
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Basketball
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Tennis
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Memorabilia
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-primary border-0 hover:shadow-glow">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;