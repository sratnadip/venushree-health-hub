import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentBooking from "@/components/AppointmentBooking";
import Timings from "@/components/Timings";
import Location from "@/components/Location";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AppointmentBooking />
      <Timings />
      <Location />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
