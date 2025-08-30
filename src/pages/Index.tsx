import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SportsCategories from "@/components/SportsCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SportsCategories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
