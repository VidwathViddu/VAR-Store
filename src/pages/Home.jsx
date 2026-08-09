import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

function Home({ handleAddToCart }) {
  return (
    <>
      <Hero
        title="VAR Store ⚽"
        subtitle="Premium Football Merchandise"
      />

      <FeaturedProducts
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}

export default Home;