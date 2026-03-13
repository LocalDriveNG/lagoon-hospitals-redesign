import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Search, Phone, ChevronLeft, ChevronRight, Play, ArrowRight, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import breastCancerBanner from "@/assets/breast-cancer-banner.jpg";
import ikoyiImg from "@/assets/locations/ikoyi.jpg";
import ikejaObaImg from "@/assets/locations/ikeja-oba.jpg";
import ikejaAdeniyiImg from "@/assets/locations/ikeja-adeniyi.jpg";
import viLigaliImg from "@/assets/locations/vi-ligali.jpg";
import viOutpatientImg from "@/assets/locations/vi-idejo-outpatient.jpg";
import viWellnessImg from "@/assets/locations/vi-idejo-wellness.jpg";
import lagoonBabies from "@/assets/videos/lagoon-babies.png";
import motherChild from "@/assets/videos/mother-child.jpg";
import nicuImg from "@/assets/videos/nicu.jpg";
import familyMedicine from "@/assets/videos/family-medicine.png";
import fibroidsForum from "@/assets/news/fibroids-forum.png";
import doctorsForum from "@/assets/news/doctors-forum.webp";
import radioTalk from "@/assets/news/radio-talk.jpg";
import breastCancer2024 from "@/assets/news/breast-cancer-2024.jpg";
import testimonialsImg from "@/assets/testimonials-bg.png";

const heroSlides = [
  { image: hero1, title: "We Will Look After You.", subtitle: "This is our promise to you.", cta: "Schedule An Appointment", link: "/book-appointment" },
  { image: hero2, title: "Tune In To Classic FM 97.3", subtitle: "Your Health and You. Tuesdays 5:30 PM", cta: "Listen to Previous Shows", link: "/news" },
  { image: hero3, title: "World-Class Healthcare", subtitle: "Leading private tertiary care in Nigeria with expert multi-disciplinary teams.", cta: "Explore Our Services", link: "/services" },
];

const services = [
  { name: "Neurosurgery", icon: "🧠", link: "/services" },
  { name: "General Surgery", icon: "🏥", link: "/services" },
  { name: "Cardiology", icon: "❤️", link: "/services" },
  { name: "Obstetrics & Gynaecology", icon: "👶", link: "/services" },
  { name: "Paediatrics", icon: "🧒", link: "/services" },
  { name: "Orthopaedics", icon: "🦴", link: "/services" },
  { name: "Nephrology", icon: "🫘", link: "/services" },
  { name: "Bariatrics", icon: "⚖️", link: "/services" },
  { name: "Health Assessment Clinic", icon: "📋", link: "/services" },
  { name: "Worksite Clinic Management", icon: "🏢", link: "/services" },
];

const facilities = [
  { name: "Iwosan Lagoon Hospital Ikoyi", desc: "Centre of Excellence for Critical Care & Complex Surgical Operations", link: "/facilities/ikoyi" },
  { name: "Iwosan Lagoon Hospital Ikeja", desc: "Centre of Excellence for Mother and Child", link: "/facilities/ikeja" },
  { name: "Iwosan Lagoon Hospital Victoria Island", desc: "Centre of Excellence for Cardiology & Cardiac Surgery", link: "/facilities/victoria-island" },
  { name: "Iwosan Wellness Centre Victoria Island", desc: "Physical, Mental and Emotional Health", link: "/facilities/outpatient" },
];

const videoUpdates = [
  { title: "Celebrating Lagoon Babies: 15 Years of Waiting, A Dream Come True", date: "August 10, 2025", image: lagoonBabies },
  { title: "Excellent Mother and Child Care from Generation to Generation", date: "February 10, 2025", image: motherChild },
  { title: "87 Days in NICU: Lagoon Babies Series", date: "February 10, 2025", image: nicuImg },
  { title: "The Role of Family Medicine Doctors", date: "March 25, 2023", image: familyMedicine },
];

const newsUpdates = [
  { title: "Doctors' Forum: Management of Fibroids and Uterine Prolapse", date: "August 13, 2025", image: fibroidsForum },
  { title: "Doctors' Forum", date: "July 1, 2025", image: doctorsForum },
  { title: 'Tune In to "Your Health and You" on Classic FM 97.3', date: "May 15, 2025", image: radioTalk },
  { title: "Breast Cancer Awareness Walk 2024", date: "November 18, 2024", image: breastCancer2024 },
];

const locations = [
  { name: "Iwosan Lagoon Hospitals, Ikoyi", address: "17B Bourdillon Road, Ikoyi, Lagos", phone: "07086393027", image: ikoyiImg, directions: "https://goo.gl/maps/aFi61XJmGfxWywri7" },
  { name: "Iwosan Lagoon Hospitals, Ikeja", address: "97/101 Obafemi Awolowo Ave., Ikeja", phone: "07086393027", image: ikejaObaImg, directions: "https://maps.app.goo.gl/kh9CrhBPoXFDd7Ts8" },
  { name: "Iwosan Lagoon Clinic, Ikeja", address: "91 Adeniyi Jones Avenue, Ikeja", phone: "07086393027", image: ikejaAdeniyiImg, directions: "https://goo.gl/maps/wyYBoG1WzvUzwQQR8" },
  { name: "Iwosan Lagoon Hospitals, Victoria Island", address: "3B, Ligali Ayorinde Street, VI", phone: "07086393027", image: viLigaliImg, directions: "https://goo.gl/maps/QLrUbjX1AhGpsn228" },
  { name: "Iwosan Lagoon Outpatient Clinic, VI", address: "13A Idejo Street, Victoria Island", phone: "07086393027", image: viOutpatientImg, directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6" },
  { name: "Iwosan Lagoon Wellness Centre, VI", address: "13B Idejo Street, Victoria Island", phone: "07086393027", image: viWellnessImg, directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/60" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-4 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 font-body mb-8">{heroSlides[currentSlide].subtitle}</p>
            <Link to={heroSlides[currentSlide].link} className="btn-gold text-base px-8 py-4">
              {heroSlides[currentSlide].cta}
            </Link>
          </div>
        </div>

        {/* Slide controls */}
        <button onClick={() => setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setCurrentSlide((s) => (s + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-gold w-8" : "bg-cream/40"}`} />
          ))}
        </div>

        {/* Quick Access Cards */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Calendar, label: "Appointment", to: "/book-appointment", color: "bg-navy" },
              { icon: MapPin, label: "Locations", to: "/facilities", color: "bg-emerald" },
              { icon: Search, label: "Services", to: "/services", color: "bg-gold" },
              { icon: Phone, label: "Emergency", to: "tel:+2347086393027", color: "bg-destructive" },
            ].map(({ icon: Icon, label, to, color }) => (
              <Link key={label} to={to}
                className={`${color} text-cream rounded-xl p-5 text-center card-hover flex flex-col items-center gap-2`}>
                <Icon className="w-7 h-7" />
                <span className="font-body font-medium text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT BANNER */}
      <AnimateOnScroll>
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img src={breastCancerBanner} alt="Breast Cancer Awareness" className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-body font-semibold text-gold uppercase tracking-wider">Upcoming Event</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mt-2">Breast Cancer Awareness Walk</h2>
                <p className="text-muted-foreground font-body mt-2">Iwosan Lagoon Hospitals, Ikoyi — 17B Bourdillon Road, Ikoyi Lagos.</p>
                <p className="text-lg font-body font-semibold text-primary mt-2">25th October, 2025 | 8:00 AM</p>
                <a href="https://forms.cloud.microsoft/r/myMJbB0ENQ" target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 self-start">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* SERVICES */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div>
                <h2 className="section-heading">Explore Our Caring & Premium<br className="hidden md:block" /> Medical Services</h2>
              </div>
              <Link to="/book-appointment" className="btn-gold mt-6 lg:mt-0 self-start">Book An Appointment</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {services.map((s) => (
                <Link key={s.name} to={s.link}
                  className="bg-card rounded-xl p-6 card-hover group text-center">
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <h3 className="font-display text-base font-semibold text-primary group-hover:text-gold transition-colors">{s.name}</h3>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="btn-outline-gold">Explore Other Services</Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FACILITIES */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((f, i) => (
                <Link key={i} to={f.link}
                  className="relative group overflow-hidden rounded-2xl h-64 md:h-72 card-hover">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10" />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-cream">{f.name}</h3>
                    <p className="font-body text-sm text-gold mt-1">{f.desc}</p>
                    <span className="inline-flex items-center gap-1 text-cream/80 text-sm font-body mt-3 group-hover:text-gold transition-colors">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* WHY CHOOSE US */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="section-heading section-heading-center">Why Choose Iwosan Lagoon Hospitals?</h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mt-8">
              We are a consistently patient-first, world-class healthcare service provider and the leading private tertiary care organization in Nigeria. 
              We operate a collegiate model of multi-disciplinary care and this bolsters the efficiency of highly specialized services delivered to each patient at all departments.
            </p>
            <Link to="/about" className="btn-navy mt-8">About Us</Link>
          </div>
        </section>
      </AnimateOnScroll>

      {/* WELLNESS CENTRE */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-navy">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="text-gold font-body text-sm font-semibold uppercase tracking-wider">New</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mt-3">Introducing Iwosan Wellness Centre</h2>
            <div className="gold-accent-line mx-auto mt-4" />
            <p className="text-cream/70 font-body text-lg leading-relaxed mt-8">
              At Iwosan Wellness, we believe that true wellness is a harmonious balance of physical, mental and emotional health. 
              That's why we are here to provide you with comprehensive wellness assessments and a wide range of lifestyle services 
              designed to empower you on your journey to optimal health and wellness.
            </p>
            <Link to="/facilities/outpatient" className="btn-gold mt-8">Learn More</Link>
          </div>
        </section>
      </AnimateOnScroll>

      {/* VIDEO UPDATES */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <h2 className="section-heading mb-12">Video Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoUpdates.map((v, i) => (
                <Link key={i} to="/videos" className="bg-card rounded-xl overflow-hidden card-hover group">
                  <div className="relative aspect-video">
                    <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy/30 flex items-center justify-center group-hover:bg-navy/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                        <Play className="w-5 h-5 text-cream ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-semibold text-primary line-clamp-2 group-hover:text-gold transition-colors">{v.title}</h3>
                    <p className="text-xs text-muted-foreground font-body mt-2">{v.date}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/videos" className="btn-outline-gold">View More</Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* NEWS UPDATES */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-card">
          <div className="container mx-auto">
            <h2 className="section-heading mb-12">News Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsUpdates.map((n, i) => (
                <Link key={i} to="/news" className="bg-background rounded-xl overflow-hidden card-hover group">
                  <div className="aspect-video">
                    <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-semibold text-primary line-clamp-2 group-hover:text-gold transition-colors">{n.title}</h3>
                    <p className="text-xs text-muted-foreground font-body mt-2">{n.date}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-xs font-body font-medium mt-2">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* LOCATIONS */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <h2 className="section-heading section-heading-center text-center mb-4">Locations and Directions</h2>
            <p className="text-center text-muted-foreground font-body mb-12">Learn more about Iwosan Lagoon Hospitals or choose a specific location.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc, i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden card-hover">
                  <div className="aspect-video">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-primary">{loc.name}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">{loc.address}</p>
                    <div className="flex gap-3 mt-4">
                      <a href={`tel:+234${loc.phone.slice(1)}`} className="text-sm font-body text-gold hover:underline flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" /> Click to Call
                      </a>
                      <a href={loc.directions} target="_blank" rel="noopener noreferrer" className="text-sm font-body text-gold hover:underline flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* TESTIMONIALS */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-navy">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-4">Valuable Feedback from our Patients</h2>
            <div className="gold-accent-line mx-auto mb-12" />
            <div className="max-w-2xl mx-auto">
              <img src={testimonialsImg} alt="Patient testimonials" className="mx-auto mb-8 rounded-xl max-h-40 object-contain" />
              <blockquote className="text-cream/80 font-body text-lg italic leading-relaxed">
                "The quality of care and attention I received at Iwosan Lagoon Hospitals was truly exceptional. The doctors and nurses made me feel safe and cared for throughout my treatment."
              </blockquote>
              <p className="text-gold font-body font-medium mt-4">— A Grateful Patient</p>
            </div>
            <a href="#" className="btn-outline-gold mt-8 border-cream/30 text-cream hover:bg-cream/10">Leave A Review</a>
          </div>
        </section>
      </AnimateOnScroll>

      {/* NEWSLETTER */}
      <AnimateOnScroll>
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="section-heading section-heading-center">Join Our Mailing List</h2>
            <p className="text-muted-foreground font-body mt-6 mb-8">
              We send emails only when necessary — sign up for updates on discounts, services and campaigns.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button type="submit" className="btn-gold px-8">
                <Mail className="w-4 h-4 mr-2" /> Submit
              </button>
            </form>
          </div>
        </section>
      </AnimateOnScroll>
    </Layout>
  );
};

export default Index;
