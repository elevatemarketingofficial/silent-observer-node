export default function Footer() {
  return (
    <footer className="bg-muted py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Community</h3>
            <p className="text-muted-foreground">
              Creating exceptional living experiences in beautiful homes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>About</li>
              <li>Floor Plans</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Home Service</li>
              <li>Maintenance</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}