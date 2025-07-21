
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  Home,
  ExternalLink,
} from "lucide-react";
import Navigation from "../components/Navigation";

const fetchApiStatus = async () => {
  try {
    const response = await fetch("/api/demo");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};

const Index = () => {
  const { data: apiData, error } = useQuery({
    queryKey: ["api-status"],
    queryFn: fetchApiStatus,
  });

  useEffect(() => {
    console.log("Index page loaded");
    console.log("API data:", apiData);
    if (error) {
      console.error("API error:", error);
    }
  }, [apiData, error]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo and Navigation */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12 bg-white">
        <div className="flex items-center">
          <Home className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-2xl font-bold text-foreground">Community</h1>
        </div>
        <Navigation />
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Welcome Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Discover luxury living in our beautiful community with thoughtfully designed homes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/homes"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Homes
            </Link>
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Community. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
