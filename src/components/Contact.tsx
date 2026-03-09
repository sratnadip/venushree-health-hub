import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Contact Us</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          {
            icon: Phone,
            title: "Call Us",
            desc: "+91 94218 84732",
            action: () => window.open("tel:9421884732"),
            btnText: "Call Now",
          },
          {
            icon: MessageCircle,
            title: "WhatsApp",
            desc: "Chat with us instantly",
            action: () => window.open(`https://wa.me/919421884732?text=${encodeURIComponent("Hello, I would like to book an appointment at Venushree Clinic.")}`, "_blank"),
            btnText: "Chat Now",
          },
          {
            icon: MapPin,
            title: "Address",
            desc: "Rajguru Nagar Rd, Mangalmurti Colony, Dhule, Maharashtra",
            action: () => window.open("https://www.google.com/maps/dir/?api=1&destination=20.9323737,74.7626246", "_blank"),
            btnText: "Get Directions",
          },
          {
            icon: Clock,
            title: "Hours",
            desc: "Mon–Sat: 10 AM – 1 PM, 6 – 9 PM",
            action: undefined,
            btnText: undefined,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-background border border-border shadow-card text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
            {item.btnText && (
              <Button
                variant="outline"
                size="sm"
                onClick={item.action}
                className="w-full"
              >
                {item.btnText}
              </Button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating WhatsApp & Call buttons for mobile */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40 md:hidden">
        <a
          href={`https://wa.me/919421884732?text=${encodeURIComponent("Hello, I would like to book an appointment at Venushree Clinic.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
        </a>
        <a
          href="tel:9421884732"
          className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center shadow-lg"
          aria-label="Call clinic"
        >
          <Phone className="w-7 h-7 text-primary-foreground" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
