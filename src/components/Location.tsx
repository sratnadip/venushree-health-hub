import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => (
  <section id="location" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Find Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Clinic Location</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-card border border-border"
      >
        <iframe
          title="Venushree Clinic Location"
          src="https://www.google.com/maps?q=20.9324377,74.7617356&z=16&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
        <div className="p-6 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Venushree Clinic</p>
              <p className="text-sm text-muted-foreground">Rajguru Nagar Rd, Mangalmurti Colony, Dhule, Walwadi, Maharashtra 424002</p>
            </div>
          </div>
          <Button asChild className="gap-2 bg-hero-gradient border-0 text-primary-foreground hover:opacity-90 shrink-0">
            <a
              href="https://maps.app.goo.gl/VYwFWvP9wonAJkdP8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Location;
