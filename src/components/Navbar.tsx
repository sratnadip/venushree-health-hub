import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Timings", href: "#timings" },
    { label: "Location", href: "#location" },
    { label: "Reviews", href: "#feedback" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-hero-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <span className="font-bold text-lg text-foreground">Venushree Clinic</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9421884732">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="#appointment">
            <Button size="sm" className="gap-2 bg-hero-gradient border-0 text-primary-foreground hover:opacity-90">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <a href="tel:9421884732">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href="#appointment">
              <Button size="sm" className="w-full gap-2 bg-hero-gradient border-0 text-primary-foreground" onClick={() => setIsOpen(false)}>
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
