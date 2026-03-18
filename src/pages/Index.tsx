import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Search, Phone, ChevronLeft, ChevronRight, Play, ArrowRight, Mail, Star } from "lucide-react";
import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import heroReception from "@/assets/hero/hero-reception.jpg";
import heroDoctorChild from "@/assets/hero/hero-doctor-child.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import breastCancerBanner from "@/assets/breast-cancer-banner.jpg";
import ikoyiImg from "@/assets/locations/ikoyi.jpg";
import ikejaObaImg from "@/assets/locations/ikeja-oba.jpg";
import ikejaAdeniyiImg from "@/assets/locations/ikeja-adeniyi.jpg";
import viLigaliImg from "@/assets/locations/vi-ligali.jpg";
import viOutpatientImg from "@/assets/locations/vi-idejo-outpatient.jpg";
import viWellnessImg from "@/assets/locations/vi-idejo-wellness.jpg";
import wellnessImg from "@/assets/wellness-massage.jpg";
import lagoonBabies from "@/assets/videos/lagoon-babies.png";
import motherChild from "@/assets/videos/mother-child.jpg";
import nicuImg from "@/assets/videos/nicu.jpg";
import familyMedicine from "@/assets/videos/family-medicine.png";
import fibroidsForum from "@/assets/news/fibroids-forum.png";
import doctorsForum from "@/assets/news/doctors-forum.webp";
import radioTalk from "@/assets/news/radio-talk.jpg";
import breastCancer2024 from "@/assets/news/breast-cancer-2024.jpg";
import testimonialsBg from "@/assets/testimonials-bg.png";

const heroSlides = [
  { image: heroReception, title: "Welcome to Iwosan Lagoon Hospitals", subtitle: "World-class healthcare, delivered with compassion.", cta: "Schedule an Appointment", link: "/book-appointment" },
  { image: heroDoctorChild, title: "We Will Look After You.", subtitle: "This is our promise to you.", cta: "Schedule An Appointment", link: "/book-appointment" },
  { image: hero2, title: "Tune In To Classic FM 97.3", subtitle: "Your Health and You. Tuesdays 5:30 PM", cta: "Listen to Previous Shows", link: "/health-education" },
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
  { name: "Iwosan Lagoon Hospital Ikoyi", desc: "Centre of Excellence for Critical Care & Complex Surgical Operations", link: "/facilities/ikoyi", image: ikoyiImg },
  { name: "Iwosan Lagoon Hospital Ikeja", desc: "Centre of Excellence for Mother and Child", link: "/facilities/ikeja", image: ikejaObaImg },
  { name: "Iwosan Lagoon Hospital Victoria Island", desc: "Centre of Excellence for Cardiology & Cardiac Surgery", link: "/facilities/victoria-island", image: viLigaliImg },
  { name: "Iwosan Wellness Centre Victoria Island", desc: "Physical, Mental and Emotional Health", link: "/facilities/outpatient", image: viWellnessImg },
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
  { name: "Iwosan Lagoon Hospitals, Ikeja", address: "97/101 Obafemi Awolowo Ave., Ikeja", phone: "07086393027", image: ikejaObaImg, directions: "https://goo.gl/maps/PsWsuCjy566HK2MRA" },
  { name: "Iwosan Lagoon Clinic, Ikeja", address: "91 Adeniyi Jones Avenue, Ikeja", phone: "07086393027", image: ikejaAdeniyiImg, directions: "https://goo.gl/maps/wyYBoG1WzvUzwQQR8" },
  { name: "Iwosan Lagoon Hospitals, Victoria Island", address: "3B, Ligali Ayorinde Street, VI", phone: "07086393027", image: viLigaliImg, directions: "https://goo.gl/maps/QLrUbjX1AhGpsn228" },
  { name: "Iwosan Lagoon Outpatient Clinic, VI", address: "13A Idejo Street, Victoria Island", phone: "07086393027", image: viOutpatientImg, directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6" },
  { name: "Iwosan Lagoon Wellness Centre, VI", address: "13B Idejo Street, Victoria Island", phone: "07086393027", image: viWellnessImg, directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6" },
];

const reviews = [
  { text: "The care I received at the Ikoyi branch was exceptional. The doctors were thorough and compassionate.", name: "Adaeze O.", location: "Ikoyi", initials: "AO" },
  { text: "I had my baby at the Ikeja branch and the Mother and Child team made the entire experience beautiful and safe.", name: "Funke A.", location: "Ikeja", initials: "FA" },
  { text: "The cardiology team at Victoria Island is world-class. I felt in safe hands throughout my treatment.", name: "Emeka N.", location: "Victoria Island", initials: "EN" },
  { text: "The Wellness Centre completely changed my approach to health. Comprehensive, professional and warm.", name: "Temi B.", location: "Wellness Centre", initials: "TB" },
  { text: "Booking an appointment was seamless and the staff were incredibly attentive from start to finish.", name: "Bola I.", location: "Ikoyi", initials: "BI" },
];

// Double the reviews for infinite scroll effect
const infiniteReviews = [...reviews, ...reviews];

const hotlines = [
  { facility: "Iwosan Lagoon Hospital Ikoyi", phone: "07086393027" },
  { facility: "Iwosan Lagoon Hospital Ikeja", phone: "07086393027" },
  { facility: "Iwosan Lagoon Hospital Victoria Island", phone: "09139383461" },
  { facility: "Iwosan Lagoon Hospitals Outpatient PCS Line", phone: "09139352778" },
  { facility: "Iwosan Wellness Centre", phone: "09139352779" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviewTrackRef = useRef<HTMLDivElement>(null);
  const [reviewPaused, setReviewPaused] = useState(false);
  const reviewAnimRef = useRef<number>();
  const reviewPosRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  // Infinite smooth ticker for reviews
  const animateReviews = useCallback(() => {
    const el = reviewTrackRef.current;
    if (!el || reviewPaused) {
      reviewAnimRef.current = requestAnimationFrame(animateReviews);
      return;
    }
    reviewPosRef.current += 0.5;
    const halfWidth = el.scrollWidth / 2;
    if (reviewPosRef.current >= halfWidth) {
      reviewPosRef.current = 0;
    }
    el.style.transform = `translateX(-${reviewPosRef.current}px)`;
    reviewAnimRef.current = requestAnimationFrame(animateReviews);
  }, [reviewPaused]);

  useEffect(() => {
    reviewAnimRef.current = requestAnimationFrame(animateReviews);
    return () => {
      if (reviewAnimRef.current) cancelAnimationFrame(reviewAnimRef.current);
    };
  }, [animateReviews]);

  const isExternalLink = (link: string) => link.startsWith("http");

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite]"
              loading={i === 0 ? "eager" : "lazy"}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-cream mb-4 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 font-body mb-8">{heroSlides[currentSlide].subtitle}</p>
            {isExternalLink(heroSlides[currentSlide].link) ? (
              <a href={heroSlides[currentSlide].link} target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                {heroSlides[currentSlide].cta}
              </a>
            ) : (
              <Link to={heroSlides[currentSlide].link} className="btn-gold text-base px-8 py-4">
                {heroSlides[currentSlide].cta}
              </Link>
            )}
          </div>
        </div>

        <button onClick={() => setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setCurrentSlide((s) => (s + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-28 md:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-gold w-8" : "bg-cream/40"}`} />
          ))}
        </div>

        {/* Quick Access Cards */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Calendar, label: "Appointment", to: "/book-appointment", color: "bg-navy", anim: "animate-[pulse_2s_ease-in-out_infinite]" },
              { icon: MapPin, label: "Locations", to: "/facilities", color: "bg-emerald", anim: "animate-[bounce_2s_ease-in-out_infinite]" },
              { icon: Search, label: "Services", to: "/services", color: "bg-gold", anim: "animate-[spin_4s_linear_infinite]" },
              { icon: Phone, label: "Emergency", to: "tel:+2347086393027", color: "bg-destructive", anim: "animate-[ping_1.5s_ease-in-out_infinite]" },
            ].map(({ icon: Icon, label, to, color, anim }) => (
              <Link key={label} to={to}
                className={`${color} text-cream rounded-xl p-4 md:p-5 text-center card-hover flex flex-col items-center gap-2 group hover:shadow-[0_0_20px_hsl(var(--gold)/0.4)] transition-all min-h-[80px]`}>
                <div className="relative w-12 h-12 md:w-auto md:h-auto flex items-center justify-center">
                  <Icon className={`w-6 h-6 md:w-7 md:h-7 ${anim}`} />
                </div>
                <span className="font-body font-medium text-xs md:text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <AnimateOnScroll>
        <section className="pt-24 pb-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <h2 className="section-heading">Explore Our Caring & Premium<br className="hidden md:block" /> Medical Services</h2>
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
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={700} height={400} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10" />
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
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="text-gold font-body text-sm font-semibold uppercase tracking-wider">New</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mt-3">Introducing Iwosan Wellness Centre</h2>
                <div className="gold-accent-line mt-4 mx-auto lg:mx-0" />
                <p className="text-cream/70 font-body text-lg leading-relaxed mt-8">
                  At Iwosan Wellness, we believe that true wellness is a harmonious balance of physical, mental and emotional health.
                  That's why we are here to provide you with comprehensive wellness assessments and a wide range of lifestyle services
                  designed to empower you on your journey to optimal health and wellness.
                </p>
                <Link to="/facilities/outpatient" className="btn-gold mt-8">Learn More</Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={wellnessImg} alt="Iwosan Wellness Centre" className="w-full h-80 lg:h-96 object-cover" loading="lazy" width={700} height={500} />
              </div>
            </div>
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
                    <img src={v.image} alt={v.title} className="w-full h-full object-cover" loading="lazy" width={400} height={225} />
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
                    <img src={n.image} alt={n.title} className="w-full h-full object-cover" loading="lazy" width={400} height={225} />
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
            <div className="text-center mt-8">
              <Link to="/news" className="btn-outline-gold">View More</Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* LOCATIONS & DIRECTIONS */}
      <section className="py-16 md:py-24 px-4 relative" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)", backgroundSize: "40px 40px" }}>
        <div className="container mx-auto">
          <AnimateOnScroll>
            <h2 className="section-heading section-heading-center text-center mb-4">Locations and Directions</h2>
            <p className="text-center text-muted-foreground font-body mb-12">Learn more about Iwosan Lagoon Hospitals or choose a specific location.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-card rounded-xl overflow-hidden border-l-4 border-l-gold card-hover hover:shadow-[0_8px_30px_hsl(var(--gold)/0.15)] group">
                  <div className="aspect-video">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" loading="lazy" width={400} height={225} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:animate-bounce" />
                      <h3 className="font-display text-lg font-semibold text-primary">{loc.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-body mt-2 ml-7">{loc.address}</p>
                    <p className="text-sm text-muted-foreground font-body mt-1 ml-7">
                      <Phone className="w-3 h-3 inline mr-1" />{loc.phone}
                    </p>
                    <div className="flex gap-3 mt-4 ml-7">
                      <a href={`tel:+234${loc.phone.slice(1)}`} className="btn-outline-gold text-xs px-4 py-2">Call Now</a>
                      <a href={loc.directions} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs px-4 py-2">Get Directions</a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HOTLINES */}
      <section className="py-12 md:py-20 px-4 bg-navy relative overflow-hidden">
        {/* Diagonal gold line pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "repeating-linear-gradient(45deg, hsl(var(--gold)) 0px, hsl(var(--gold)) 1px, transparent 1px, transparent 40px)",
        }} />
        <div className="container mx-auto relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cream text-center mb-2">Our Hotlines</h2>
            <div className="gold-accent-line mx-auto mb-12" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {hotlines.map((h, i) => (
              <a key={i} href={`tel:+234${h.phone.slice(1)}`}
                className="flex items-center gap-4 bg-cream/5 border border-cream/10 rounded-xl p-5 md:p-6 hover:bg-cream/10 hover:border-gold/40 transition-all group">
                <div className="relative w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full border-2 border-gold/40 animate-[ping_2s_ease-in-out_infinite]" />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-cream/90 truncate">{h.facility}</p>
                  <p className="font-display text-xl md:text-2xl font-bold text-gold group-hover:text-gold-light transition-colors">{h.phone}</p>
                </div>
              </a>
            ))}
          </div>
          {/* Dividers on mobile only */}
          <style>{`@media (max-width: 639px) { .grid > a + a { border-top: 1px solid hsl(var(--gold) / 0.15); border-radius: 0.75rem; } }`}</style>
        </div>
      </section>

      {/* PATIENT REVIEWS */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={testimonialsBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container mx-auto relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cream text-center mb-4">Valuable Feedback from our Patients</h2>
            <div className="gold-accent-line mx-auto mb-12" />
          </AnimateOnScroll>

          {/* Infinite ticker carousel */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setReviewPaused(true)}
            onMouseLeave={() => setReviewPaused(false)}
          >
            <div ref={reviewTrackRef} className="flex gap-6 will-change-transform">
              {infiniteReviews.map((r, i) => (
                <div key={i} className="min-w-[300px] max-w-[350px] bg-card rounded-2xl p-6 flex-shrink-0">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <blockquote className="text-foreground font-body text-sm leading-relaxed italic">
                    "{r.text}"
                  </blockquote>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-body font-semibold text-sm">
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-primary">{r.name}</p>
                      <span className="text-xs font-body bg-gold/10 text-gold px-2 py-0.5 rounded-full">{r.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold border-cream/30 text-cream hover:bg-cream/10">
              Leave A Review
            </a>
            <p className="text-cream/50 text-xs font-body mt-2">Your review will be sent to our team.</p>
          </div>
        </div>
      </section>

      {/* EVENT BANNER */}
      <AnimateOnScroll>
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img src={breastCancerBanner} alt="Breast Cancer Awareness" className="w-full h-full object-cover" loading="lazy" width={500} height={400} />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-body font-semibold text-gold uppercase tracking-wider">Upcoming Event</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mt-2">Breast Cancer Awareness Walk</h2>
                <p className="text-muted-foreground font-body mt-2">Iwosan Lagoon Hospitals, Ikoyi — 17B Bourdillon Road, Ikoyi Lagos.</p>
                <p className="text-lg font-body font-semibold text-primary mt-2">25th October, 2025 | 8:00 AM</p>
                <a href="https://forms.cloud.microsoft/r/myMJbB0ENQ" target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 self-start">Register Now</a>
              </div>
            </div>
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
