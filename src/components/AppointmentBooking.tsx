import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const timeSlots = [
  "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const AppointmentBooking = () => {
  const [form, setForm] = useState({ name: "", phone: "", reason: "", date: "", timeSlot: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const handleDateChange = async (date: string) => {
    setForm((f) => ({ ...f, date, timeSlot: "" }));
    const { data } = await supabase
      .from("appointments")
      .select("time_slot")
      .eq("appointment_date", date);
    setBookedSlots(data?.map((a) => a.time_slot) || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.timeSlot) {
      toast.error("Please fill all required fields");
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("appointments").insert({
      patient_name: form.name.trim(),
      phone: form.phone.trim(),
      reason: form.reason.trim() || null,
      appointment_date: form.date,
      time_slot: form.timeSlot,
    });

    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast.error("This time slot is already booked. Please choose another.");
      } else {
        toast.error("Failed to book appointment. Please try again.");
      }
      return;
    }

    setSuccess(true);
    toast.success("Appointment booked successfully!");

    // Construct WhatsApp message
    const message = `*New Appointment Booking!* 📅
*Patient Name:* ${form.name.trim()}
*Phone:* ${form.phone.trim()}
*Date:* ${form.date}
*Time:* ${form.timeSlot}
${form.reason ? `*Reason:* ${form.reason.trim()}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919421884732?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  if (success) {
    return (
      <section id="appointment" className="section-padding bg-card">
        <div className="container mx-auto max-w-lg text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Appointment Booked!</h2>
            <p className="text-muted-foreground mb-2">
              <strong>{form.name}</strong>, your appointment on <strong>{form.date}</strong> at <strong>{form.timeSlot}</strong> has been confirmed.
            </p>
            <p className="text-sm text-muted-foreground mb-6">We will contact you at {form.phone} for confirmation.</p>
            <Button onClick={() => { setSuccess(false); setForm({ name: "", phone: "", reason: "", date: "", timeSlot: "" }); }} variant="outline">
              Book Another
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  // Get min date as today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="section-padding bg-card">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Schedule a Visit</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Book an Appointment</h2>
          <p className="text-muted-foreground mt-2">Select your preferred date and time slot below.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5 p-6 md:p-8 rounded-2xl bg-background border border-border shadow-card"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" /> Patient Name *
              </label>
              <Input
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                maxLength={100}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" /> Phone Number *
              </label>
              <Input
                placeholder="10-digit phone number"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" /> Appointment Date *
            </label>
            <Input
              type="date"
              min={today}
              value={form.date}
              onChange={(e) => handleDateChange(e.target.value)}
              required
            />
          </div>

          {form.date && (
            <div>
              <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" /> Select Time Slot *
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => {
                  const isBooked = bookedSlots.includes(slot);
                  const isSelected = form.timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={isBooked}
                      onClick={() => setForm((f) => ({ ...f, timeSlot: slot }))}
                      className={`py-2 px-3 text-sm rounded-lg border transition-all ${
                        isBooked
                          ? "bg-muted text-muted-foreground/50 cursor-not-allowed border-border/50 line-through"
                          : isSelected
                          ? "bg-hero-gradient text-primary-foreground border-primary shadow-md"
                          : "bg-background border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground" /> Reason for Visit
            </label>
            <Textarea
              placeholder="Briefly describe your symptoms or reason..."
              value={form.reason}
              onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
              maxLength={500}
              rows={3}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-hero-gradient border-0 text-primary-foreground hover:opacity-90"
            disabled={loading}
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Calendar className="w-5 h-5 mr-2" />}
            {loading ? "Booking..." : "Confirm Appointment"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default AppointmentBooking;
