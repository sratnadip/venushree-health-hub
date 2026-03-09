import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Send, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Review {
  id: string;
  patient_name: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

const StarRating = ({ rating, onRate, interactive = false }: { rating: number; onRate?: (r: number) => void; interactive?: boolean }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-colors ${i <= rating ? "fill-amber-400 text-amber-400" : "text-border"} ${interactive ? "cursor-pointer hover:text-amber-300" : ""}`}
        onClick={() => interactive && onRate?.(i)}
      />
    ))}
  </div>
);

const Feedback = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6);
    if (data) setReviews(data);
  };

  useEffect(() => { fetchReviews(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || form.rating === 0) {
      toast.error("Please enter your name and select a rating");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("feedback").insert({
      patient_name: form.name.trim(),
      rating: form.rating,
      comment: form.comment.trim() || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Failed to submit feedback");
      return;
    }

    toast.success("Thank you for your feedback!");
    setForm({ name: "", rating: 0, comment: "" });
    fetchReviews();
  };

  return (
    <section id="feedback" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Patient Reviews</h2>
        </motion.div>

        {/* Reviews grid */}
        {reviews.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-background border border-border shadow-card"
              >
                <StarRating rating={r.rating} />
                {r.comment && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{r.comment}"</p>}
                <p className="mt-4 text-sm font-semibold text-foreground">— {r.patient_name}</p>
                <p className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Submit form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="flex items-center gap-2 mb-6 justify-center">
            <MessageSquare className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold text-foreground">Share Your Experience</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-background border border-border shadow-card">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name *</label>
              <Input
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                maxLength={100}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Rating *</label>
              <StarRating rating={form.rating} onRate={(r) => setForm((f) => ({ ...f, rating: r }))} interactive />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Comment</label>
              <Textarea
                placeholder="Share your experience..."
                value={form.comment}
                onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                maxLength={500}
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full gap-2 bg-hero-gradient border-0 text-primary-foreground hover:opacity-90" disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Submit Review
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
