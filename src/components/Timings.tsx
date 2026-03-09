import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "10:00 AM – 1:00 PM, 6:00 PM – 9:00 PM", open: true },
  { day: "Tuesday", hours: "10:00 AM – 1:00 PM, 6:00 PM – 9:00 PM", open: true },
  { day: "Wednesday", hours: "10:00 AM – 1:00 PM, 6:00 PM – 9:00 PM", open: true },
  { day: "Thursday", hours: "10:00 AM – 1:00 PM, 6:00 PM – 9:00 PM", open: true },
  { day: "Friday", hours: "10:00 AM – 1:00 PM, 6:00 PM – 9:00 PM", open: true },
  { day: "Saturday", hours: "10:00 AM – 1:00 PM, 6:00 PM – 9:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

const Timings = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="timings" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Schedule</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Clinic Hours</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border shadow-card overflow-hidden"
        >
          <div className="p-5 bg-hero-gradient flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary-foreground" />
            <h3 className="text-lg font-bold text-primary-foreground">Weekly Schedule</h3>
          </div>
          <div className="divide-y divide-border">
            {schedule.map((s) => (
              <div
                key={s.day}
                className={`flex items-center justify-between px-6 py-4 ${s.day === today ? "bg-secondary/50" : ""}`}
              >
                <div className="flex items-center gap-3">
                  {s.day === today && <div className="w-2 h-2 rounded-full bg-accent" />}
                  <span className={`font-medium ${s.day === today ? "text-foreground" : "text-foreground/80"}`}>
                    {s.day}
                    {s.day === today && <span className="text-xs text-accent ml-2">(Today)</span>}
                  </span>
                </div>
                <span className={`text-sm ${s.open ? "text-muted-foreground" : "text-destructive font-medium"}`}>
                  {s.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timings;
