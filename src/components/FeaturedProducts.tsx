import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Manchester United Home Jersey 2024",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      sport: "Football",
      isNew: true,
      discount: "25% OFF"
    },
    {
      id: 2,
      name: "Team India Cricket Jersey",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop",
      sport: "Cricket",
      isNew: false,
      discount: "20% OFF"
    },
    {
      id: 3,
      name: "Lakers Championship Jersey",
      price: "$129.99",
      originalPrice: "$159.99",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
      sport: "Basketball",
      isNew: true,
      discount: "19% OFF"
    },
    {
      id: 4,
      name: "Wimbledon Tennis Polo",
      price: "$64.99",
      originalPrice: "$84.99",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=400&fit=crop",
      sport: "Tennis",
      isNew: false,
      discount: "24% OFF"
    }
  ];

  return (
    <section className="py-20 bg-sports-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-sports-gray border-sports-blue/20 text-sports-blue">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Premium</span> Jerseys
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked authentic jerseys from top teams and players worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group glow-hover glass-card border-sports-gray-light/50 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-sports-blue text-sports-black">New</Badge>
                  )}
                  <Badge variant="destructive" className="bg-gradient-primary border-0">
                    {product.discount}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="bg-background/80 hover:bg-background">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-xs border-sports-blue/30 text-sports-blue">
                  {product.sport}
                </Badge>
                <h3 className="font-semibold text-lg mb-3 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold gradient-text">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow group">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-sports-blue/30 text-sports-blue hover:bg-sports-blue hover:text-sports-black px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;