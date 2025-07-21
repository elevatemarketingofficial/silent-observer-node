export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          About Our Community
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          We are dedicated to creating exceptional living experiences in thoughtfully designed homes. 
          Our community offers the perfect blend of comfort, style, and convenience.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quality</h3>
            <p className="text-muted-foreground">Premium materials and craftsmanship in every home.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Location</h3>
            <p className="text-muted-foreground">Perfectly situated with convenient access to amenities.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Service</h3>
            <p className="text-muted-foreground">Dedicated support throughout your homeownership journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}