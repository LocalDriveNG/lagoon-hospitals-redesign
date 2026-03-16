import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { Link, useParams } from "react-router-dom";
import { MapPin, Phone, ArrowRight, ChevronLeft, ChevronRight, Shield, Heart, Clock, Users, Stethoscope, Activity, Baby, Building2, Mail } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

import ikoyiImg from "@/assets/locations/ikoyi.jpg";
import ikejaObaImg from "@/assets/locations/ikeja-oba.jpg";
import viLigaliImg from "@/assets/locations/vi-ligali.jpg";
import viOutpatientImg from "@/assets/locations/vi-idejo-outpatient.jpg";
import viWellnessImg from "@/assets/locations/vi-idejo-wellness.jpg";

/* ── Facility detail data ── */
const facilityData: Record<string, {
  name: string; subtitle: string; address: string; phone: string; directions: string; description: string; services: string[];
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  whyChoose: { icon: any; title: string; desc: string }[];
}> = {
  ikoyi: {
    name: "Iwosan Lagoon Hospital Ikoyi",
    subtitle: "Centre of Excellence for Critical Care & Complex Surgical Operations",
    address: "17B Bourdillon Road, Ikoyi, Lagos",
    phone: "+2347086393027",
    directions: "https://goo.gl/maps/aFi61XJmGfxWywri7",
    description: "Our Ikoyi facility is the flagship of Iwosan Lagoon Hospitals, offering the most advanced critical care and complex surgical capabilities in Nigeria. With state-of-the-art operating theatres, intensive care units, and diagnostic equipment, we provide world-class healthcare in a premium environment.",
    services: ["Neurosurgery", "General Surgery", "Critical Care", "Cardiology", "Orthopaedics", "Emergency Medicine", "Radiology & Imaging"],
    image: ikoyiImg,
    whyChoose: [
      { icon: Shield, title: "Critical Care Expertise", desc: "Highly specialized ICU and HDU with round-the-clock monitoring" },
      { icon: Stethoscope, title: "Complex Surgical Capabilities", desc: "Advanced operating theatres for neurosurgery, orthopaedics, and more" },
      { icon: Clock, title: "24/7 Emergency Response", desc: "Fully equipped emergency department open around the clock" },
      { icon: Activity, title: "Specialist ICU", desc: "Dedicated intensive care with expert intensivists and cutting-edge equipment" },
      { icon: Users, title: "Multidisciplinary Team Approach", desc: "Collegiate model bringing together multiple specialties for comprehensive care" },
    ],
  },
  ikeja: {
    name: "Iwosan Lagoon Hospital Ikeja",
    subtitle: "Centre of Excellence for Mother and Child",
    address: "97/101 Obafemi Awolowo Ave., Ikeja",
    phone: "+2347086393027",
    directions: "https://maps.app.goo.gl/kh9CrhBPoXFDd7Ts8",
    description: "The Ikeja facility specializes in maternal and child health, offering comprehensive obstetric care, neonatal intensive care, and paediatric services. Our NICU is one of the best-equipped in West Africa.",
    services: ["Obstetrics & Gynaecology", "Paediatrics & NICU", "Family Medicine", "General Surgery", "Laboratory Services"],
    image: ikejaObaImg,
    whyChoose: [
      { icon: Baby, title: "Mother & Child Centre of Excellence", desc: "Specialized in maternal and child health with decades of experience" },
      { icon: Activity, title: "NICU Capabilities", desc: "One of the best-equipped Neonatal Intensive Care Units in West Africa" },
      { icon: Stethoscope, title: "Obstetrics Specialists", desc: "Team of expert obstetricians for high-risk and routine pregnancies" },
      { icon: Heart, title: "Paediatric Care", desc: "Comprehensive healthcare services for infants, children, and adolescents" },
      { icon: Users, title: "Family-Centred Environment", desc: "Warm, supportive atmosphere designed for families" },
    ],
  },
  "victoria-island": {
    name: "Iwosan Lagoon Hospital Victoria Island",
    subtitle: "Centre of Excellence for Cardiology & Cardiac Surgery",
    address: "3B Ligali Ayorinde Street, Victoria Island",
    phone: "+2347086393027",
    directions: "https://goo.gl/maps/QLrUbjX1AhGpsn228",
    description: "Our Victoria Island hospital houses our cardiac centre of excellence, offering comprehensive cardiovascular diagnostics, interventional cardiology, and cardiac surgery services.",
    services: ["Cardiology", "Cardiac Surgery", "Internal Medicine", "Nephrology & Dialysis", "Health Assessment Clinic"],
    image: viLigaliImg,
    whyChoose: [
      { icon: Heart, title: "Cardiology & Cardiac Surgery Expertise", desc: "Leading cardiac centre with state-of-the-art cath lab and surgical facilities" },
      { icon: Activity, title: "Advanced Diagnostics", desc: "Comprehensive cardiac imaging and diagnostic capabilities" },
      { icon: Stethoscope, title: "Interventional Cardiology", desc: "Minimally invasive procedures for coronary and structural heart disease" },
      { icon: Users, title: "Rehabilitation Support", desc: "Post-operative cardiac rehabilitation and recovery programs" },
      { icon: Shield, title: "Specialist Heart Team", desc: "Dedicated cardiologists, cardiac surgeons, and support staff" },
    ],
  },
  outpatient: {
    name: "Iwosan Lagoon Outpatient Clinic & Wellness Centre",
    subtitle: "Ambulatory Care & Wellness Services",
    address: "13A & 13B Idejo Street, Victoria Island",
    phone: "+2347086393027",
    directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6",
    description: "Our outpatient clinic and wellness centre on Idejo Street provides convenient ambulatory care, wellness assessments, and lifestyle services in a comfortable, modern setting.",
    services: ["Outpatient Consultations", "Wellness Assessments", "Physiotherapy", "Dental Care", "Dermatology", "Mental Health Services"],
    image: viOutpatientImg,
    whyChoose: [
      { icon: Heart, title: "Holistic Wellness Approach", desc: "Balanced care for physical, mental, and emotional health" },
      { icon: Stethoscope, title: "Comprehensive Assessments", desc: "Thorough health screenings and wellness check-ups" },
      { icon: Users, title: "Specialist Consultations", desc: "Access to specialists across multiple disciplines" },
      { icon: Shield, title: "Modern Facilities", desc: "Contemporary, comfortable environment designed for your well-being" },
      { icon: Clock, title: "Convenient Location", desc: "Easily accessible on Victoria Island for quick visits" },
    ],
  },
  worksite: {
    name: "Worksite Clinic Management",
    subtitle: "Occupational Health & Corporate Wellness",
    address: "Multiple locations across Lagos",
    phone: "+2347086393027",
    directions: "",
    description: "Our Worksite Clinic Management division provides comprehensive occupational health services to corporate clients. We manage on-site medical clinics, conduct workplace health assessments, and implement wellness programs.",
    services: ["On-site Clinic Management", "Occupational Health Assessments", "Workplace Wellness Programs", "Emergency Preparedness", "Employee Health Screening"],
    image: viWellnessImg,
    whyChoose: [
      { icon: Building2, title: "On-Site Excellence", desc: "Fully managed medical clinics at your workplace" },
      { icon: Shield, title: "Compliance & Safety", desc: "Meeting occupational health standards and regulations" },
      { icon: Users, title: "Employee Wellness Programs", desc: "Customized wellness initiatives for your workforce" },
      { icon: Clock, title: "Emergency Preparedness", desc: "Comprehensive emergency response planning and training" },
      { icon: Activity, title: "Health Screening", desc: "Regular health assessments for early detection and prevention" },
    ],
  },
};

/* ── Slider data (minimal overlay) ── */
const allFacilities = [
  { id: "ikoyi", name: "Iwosan Lagoon Hospital Ikoyi", subtitle: "Centre of Excellence for Critical Care & Complex Surgical Operations", address: "17B Bourdillon Road, Ikoyi, Lagos", phone: "+2347086393027", image: ikoyiImg, directions: "https://goo.gl/maps/aFi61XJmGfxWywri7" },
  { id: "ikeja", name: "Iwosan Lagoon Hospital Ikeja", subtitle: "Centre of Excellence for Mother and Child", address: "97/101 Obafemi Awolowo Ave., Ikeja", phone: "+2347086393027", image: ikejaObaImg, directions: "https://maps.app.goo.gl/kh9CrhBPoXFDd7Ts8" },
  { id: "victoria-island", name: "Iwosan Lagoon Hospital Victoria Island", subtitle: "Centre of Excellence for Cardiology & Cardiac Surgery", address: "3B Ligali Ayorinde Street, Victoria Island", phone: "+2347086393027", image: viLigaliImg, directions: "https://goo.gl/maps/QLrUbjX1AhGpsn228" },
  { id: "outpatient", name: "Iwosan Lagoon Outpatient Clinic & Wellness Centre", subtitle: "Ambulatory Care & Wellness Services", address: "13A & 13B Idejo Street, Victoria Island", phone: "+2347086393027", image: viOutpatientImg, directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6" },
  { id: "worksite", name: "Worksite Clinic Management", subtitle: "Occupational Health & Corporate Wellness", address: "Multiple locations across Lagos", phone: "+2347086393027", image: viWellnessImg, directions: "" },
];

const FacilityPage = () => {
  const { facilityId } = useParams();
  const facility = facilityId ? facilityData[facilityId] : null;
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();
  const pausedRef = useRef(false);

  const startAutoScroll = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrentSlide(s => (s + 1) % allFacilities.length);
      }
    }, 5000);
  }, []);

  useEffect(() => {
    if (facilityId) return;
    startAutoScroll();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [facilityId, startAutoScroll]);

  const handleManualNav = (dir: number) => {
    pausedRef.current = true;
    setCurrentSlide(s => (s + dir + allFacilities.length) % allFacilities.length);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => {
      pausedRef.current = false;
      startAutoScroll();
    }, 4000);
  };

  /* ── LISTING PAGE ── */
  if (!facilityId) {
    return (
      <Layout>
        <VideoHero>
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-cream">Our Facilities</h1>
            <p className="text-cream/70 font-body text-base md:text-lg mt-3 font-light">World-class healthcare across Lagos</p>
            <div className="gold-accent-line mt-4" />
          </div>
        </VideoHero>

        {/* Spacer with label */}
        <div className="pt-10 md:pt-[52px] lg:pt-[72px] pb-4 text-center">
          <span className="text-xs md:text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground">Our Locations</span>
          <div className="gold-accent-line mx-auto mt-2" />
        </div>

        {/* Full-width horizontal slider — images as focus */}
        <section
          className="relative h-[50vh] md:h-[55vh] lg:h-[65vh] min-h-[350px] overflow-hidden"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {allFacilities.map((f, i) => {
            const isActive = i === currentSlide;
            const offset = i - currentSlide;
            return (
              <div
                key={f.id}
                className="absolute inset-0 will-change-transform"
                style={{
                  transform: `translateX(${offset * 100}%)`,
                  transition: "transform 600ms cubic-bezier(0.42, 0, 0.58, 1)",
                  visibility: Math.abs(offset) <= 1 ? "visible" : "hidden",
                }}
              >
                {/* Background image — full resolution, no blur */}
                <img
                  src={f.image}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ imageRendering: "auto" }}
                  loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                  width={1920}
                  height={1080}
                />
                {/* Minimal gradient — left side only for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-xl">
                      <span className="text-gold font-body text-xs md:text-sm font-semibold uppercase tracking-widest">{f.subtitle}</span>
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-cream mt-3 uppercase">{f.name}</h2>
                      <div className="flex items-center gap-2 mt-3 text-cream/80 text-sm font-body">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>{f.address}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-cream/80 text-sm font-body">
                        <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                        <a href={`tel:${f.phone}`} className="hover:text-gold transition-colors">{f.phone}</a>
                      </div>
                      <div className="gold-accent-line mt-4" />
                      <div className="flex gap-4 mt-6">
                        <Link to={`/facilities/${f.id}`} className="btn-gold">Learn More</Link>
                        {f.directions && (
                          <a href={f.directions} target="_blank" rel="noopener noreferrer" className="btn-outline-gold border-cream/30 text-cream hover:bg-cream/10">
                            Get Directions
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows */}
          <button onClick={() => handleManualNav(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy/60 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-navy/80 hover:scale-110 transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => handleManualNav(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy/60 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-navy/80 hover:scale-110 transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {allFacilities.map((_, i) => (
              <button key={i} onClick={() => { setCurrentSlide(i); handleManualNav(0); }}
                className={`h-3 rounded-full transition-all ${i === currentSlide ? "bg-gold w-8" : "bg-cream/40 w-3 hover:bg-cream/60"}`} />
            ))}
          </div>
        </section>


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
  }

  /* ── NOT FOUND ── */
  if (!facility) {
    return (
      <Layout>
        <VideoHero>
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-cream uppercase">Facility Not Found</h1>
            <div className="gold-accent-line mt-4" />
          </div>
        </VideoHero>
        <section className="py-16 px-4 text-center">
          <Link to="/facilities" className="btn-gold">View All Facilities</Link>
        </section>
      </Layout>
    );
  }

  /* ── DETAIL PAGE ── */
  return (
    <Layout>
      <VideoHero>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-cream uppercase">{facility.name}</h1>
          <p className="text-gold font-body text-base md:text-lg mt-2 font-medium">{facility.subtitle}</p>
          <div className="gold-accent-line mt-4" />
        </div>
      </VideoHero>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimateOnScroll>
            <div className="bg-card rounded-2xl p-8 md:p-12 card-hover mb-12">
              <p className="font-body text-muted-foreground leading-relaxed text-lg">{facility.description}</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm font-body">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-primary">{facility.address}</span>
                </div>
                <a href={`tel:${facility.phone}`} className="flex items-center gap-2 text-sm font-body text-gold hover:underline">
                  <Phone className="w-4 h-4" />
                  {facility.phone}
                </a>
                {facility.directions && (
                  <a href={facility.directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-body text-gold hover:underline">
                    <MapPin className="w-4 h-4" /> Get Directions
                  </a>
                )}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Services */}
          <AnimateOnScroll>
            <h2 className="section-heading mb-8">Services at This Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {facility.services.map((s, i) => (
                <div key={i} className="bg-card rounded-lg p-5 flex items-center gap-3 card-hover">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-body text-primary">{s}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Why Choose Us */}
          <AnimateOnScroll>
            <section className="bg-navy rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-cream mb-8">
                Why Choose {facility.name.split(" ").slice(-1)[0] === "Management" ? "Worksite Clinic Management" : facility.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facility.whyChoose.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-cream">{item.title}</h3>
                      <p className="text-cream/60 font-body text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimateOnScroll>

          <div className="text-center">
            <Link to="/book-appointment" className="btn-gold text-lg px-10">Book Appointment</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacilityPage;
