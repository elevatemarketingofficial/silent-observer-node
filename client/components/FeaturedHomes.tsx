export default function FeaturedHomes() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Featured Homes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((home) => (
            <div key={home} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-muted"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Home Design {home}
                </h3>
                <p className="text-muted-foreground">
                  Beautiful home with modern amenities and stunning views.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}