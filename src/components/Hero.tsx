import { Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              🏥 Trusted Family Healthcare
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
              <span className="text-gradient">Venushree</span> Clinic
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-2">
              Dr. Nitin Baviskar <span className="text-muted-foreground font-normal">(BAMS)</span>
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Trusted Family Healthcare for Everyday Medical Needs
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild size="lg" className="gap-2 bg-hero-gradient border-0 text-primary-foreground hover:opacity-90 shadow-lg">
                <a href="#appointment">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="tel:9421884732">
                  <Phone className="w-5 h-5" />
                  Call Clinic
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a
                  href="https://maps.app.goo.gl/VYwFWvP9wonAJkdP8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Mon–Sun: 9:30 AM – 1:00 PM, 6:00 PM – 9:30 PM</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              <MapPin className="w-3.5 h-3.5 inline mr-1" />
              Rajguru Nagar Rd, Mangalmurti Colony, Dhule, Maharashtra 424002
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-3xl opacity-10 blur-3xl scale-110" />
              <img
                src={doctorImg}
                alt="Dr. Nitin Baviskar - Family Healthcare Doctor at Venushree Clinic"
                className="relative w-72 md:w-96 rounded-3xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
