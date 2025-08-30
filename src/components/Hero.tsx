import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import jerseyBackground from "@/assets/jersey-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${jerseyBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Jersey Texture */}
      <div className="absolute inset-0 jersey-texture" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="mb-6 bg-sports-gray border-sports-blue/20 text-sports-blue">
            Authentic Sports Merchandise
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-wide">
            <span className="gradient-text">SPORTS HUB</span>
            <br />
            <span className="text-foreground font-sans font-light">Where Legends Live</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the thrill of authentic sports merchandise. From championship jerseys to legendary memorabilia, 
            we bring the stadium atmosphere right to your wardrobe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary border-0 hover:shadow-premium px-8 py-6 text-lg font-semibold font-display tracking-wide"
            >
              EXPLORE COLLECTION
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-sports-blue/30 text-sports-blue hover:bg-sports-blue hover:text-sports-black px-8 py-6 text-lg font-semibold font-display tracking-wide"
            >
              CUSTOM JERSEYS
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold gradient-text">500+</div>
              <div className="text-muted-foreground">Authentic Jerseys</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Teams Covered</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold gradient-text">10k+</div>
              <div className="text-muted-foreground">Happy Fans</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold gradient-text">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;