import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import cricketImage from "@/assets/cricket-category.jpg";
import footballImage from "@/assets/football-category.jpg";
import basketballImage from "@/assets/basketball-category.jpg";
import tennisImage from "@/assets/tennis-category.jpg";

const SportsCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Cricket",
      description: "Authentic jerseys from IPL, World Cup & county teams",
      image: cricketImage,
      itemCount: "120+ Items",
      gradient: "from-green-600/20 to-blue-600/20"
    },
    {
      id: 2,
      name: "Football", 
      description: "Premier League, Champions League & international kits",
      image: footballImage,
      itemCount: "200+ Items",
      gradient: "from-red-600/20 to-blue-600/20"
    },
    {
      id: 3,
      name: "Basketball",
      description: "NBA legends, current stars & college championship gear",
      image: basketballImage,
      itemCount: "85+ Items",
      gradient: "from-orange-600/20 to-purple-600/20"
    },
    {
      id: 4,
      name: "Tennis",
      description: "Wimbledon whites, Grand Slam collections & pro tour",
      image: tennisImage,
      itemCount: "60+ Items",
      gradient: "from-yellow-600/20 to-green-600/20"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-sports-gray border-sports-blue/20 text-sports-blue">
            Shop by Sport
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Choose Your <span className="gradient-text">Game</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections for every major sport
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer glow-hover glass-card border-sports-gray-light/50 overflow-hidden relative h-80"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-sports-black/80 via-sports-black/40 to-transparent" />
              
              {/* Content */}
              <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <Badge className="bg-sports-blue/20 text-sports-blue border-sports-blue/30">
                    {category.itemCount}
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-2 text-white">
                  {category.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-lg">
                  {category.description}
                </p>
                
                <div className="flex items-center text-sports-blue font-semibold group-hover:text-sports-blue-light transition-colors">
                  <span className="mr-2">Shop Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Section - Memorabilia */}
        <Card className="mt-12 glow-hover glass-card border-sports-gray-light/50 overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-sports-black to-sports-gray flex items-center">
            <div className="absolute inset-0 jersey-texture opacity-30" />
            <div className="relative z-10 container mx-auto px-8 flex justify-between items-center">
              <div>
                <Badge className="mb-4 bg-sports-blue/20 text-sports-blue border-sports-blue/30">
                  Exclusive Collection
                </Badge>
                <h3 className="text-4xl font-display font-bold mb-4">
                  <span className="gradient-text">Memorabilia</span> & Collectibles
                </h3>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                  Star photo frames, signed jerseys, vintage collectibles and exclusive fan merchandise
                </p>
                <div className="flex items-center text-sports-blue font-semibold text-lg cursor-pointer group">
                  <span className="mr-2">Explore Collection</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-6xl font-display font-bold gradient-text">150+</div>
                <div className="text-muted-foreground text-lg">Unique Items</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SportsCategories;