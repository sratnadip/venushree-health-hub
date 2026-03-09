import { motion } from "framer-motion";
import { Award, Heart, Shield, Users } from "lucide-react";
import doctorImg from "@/assets/doctor-profile.png";

const highlights = [
  { icon: Award, label: "BAMS Qualified", desc: "Professionally certified practitioner" },
  { icon: Heart, label: "Patient-Centered", desc: "Compassionate & personalized care" },
  { icon: Shield, label: "Preventive Care", desc: "Focus on long-term wellness" },
  { icon: Users, label: "Family Healthcare", desc: "All ages, all conditions" },
];

const About = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">About the Doctor</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Meet Dr. Nitin Baviskar</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary rounded-3xl" />
            <img
              src={doctorImg}
              alt="Dr. Nitin Baviskar"
              className="relative w-64 md:w-80 rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Nitin Baviskar</h3>
          <p className="text-accent font-semibold mb-4">BAMS — Bachelor of Ayurvedic Medicine and Surgery</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Dr. Nitin Baviskar is a dedicated family healthcare practitioner with extensive experience in treating
            everyday medical conditions. His approach combines modern diagnostic methods with a holistic understanding
            of patient health, ensuring comprehensive care for individuals and families alike.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            With a strong emphasis on preventive healthcare, Dr. Baviskar believes in empowering patients through
            education and early intervention. His clinic offers a warm, welcoming environment where every patient
            receives personalized attention and treatment plans tailored to their unique needs.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <div className="p-2 rounded-lg bg-secondary">
                  <h.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
