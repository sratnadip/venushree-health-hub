import { motion } from "framer-motion";
import {
  Stethoscope, Thermometer, Wind, HeartPulse, Droplets,
  Users, ShieldCheck, BedDouble
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Health Checkup", desc: "Comprehensive health screening and routine examinations for all age groups." },
  { icon: Thermometer, title: "Fever & Infection Treatment", desc: "Accurate diagnosis and effective treatment for fevers, viral and bacterial infections." },
  { icon: Wind, title: "Cold, Cough & Flu", desc: "Expert treatment for respiratory conditions including seasonal flu and allergies." },
  { icon: HeartPulse, title: "Blood Pressure Monitoring", desc: "Regular BP monitoring, management and lifestyle guidance for hypertension." },
  { icon: Droplets, title: "Diabetes Consultation", desc: "Blood sugar management, dietary counselling and ongoing diabetes care." },
  { icon: Users, title: "Family Health Consultation", desc: "Complete healthcare solutions for every member of your family." },
  { icon: ShieldCheck, title: "Preventive Healthcare", desc: "Wellness advice, vaccination guidance, and early disease prevention." },
  { icon: BedDouble, title: "Patient Admit Service", desc: "Observation and basic admission facility for patients requiring close monitoring." },
];

const Services = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Healthcare Services</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Comprehensive medical services tailored for your family's health and well-being.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-hero-gradient group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
