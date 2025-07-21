export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>📧 info@community.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Community Drive, City, State 12345</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}