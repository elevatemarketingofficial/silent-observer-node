
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedHomes from "@/components/FeaturedHomes";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <Navigation />
      <Hero />
      <FeaturedHomes />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
