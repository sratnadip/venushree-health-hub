import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border bg-card">
    <div className="container mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-hero-gradient flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">V</span>
        </div>
        <span className="font-bold text-foreground">Venushree Clinic</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Rajguru Nagar Rd, Mangalmurti Colony, Dhule, Walwadi, Maharashtra 424002
      </p>
      <p className="text-sm text-muted-foreground mt-1">Phone: +91 94218 84732</p>
      <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
        Made with <Heart className="w-3 h-3 text-destructive" /> for better healthcare
      </p>
    </div>
  </footer>
);

export default Footer;
