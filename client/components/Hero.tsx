export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-foreground">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome Home
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover luxury living in our beautiful community
        </p>
        <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors">
          Explore Homes
        </button>
      </div>
    </section>
  );
}