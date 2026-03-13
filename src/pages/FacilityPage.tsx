import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link, useParams } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const facilityData: Record<string, { name: string; subtitle: string; address: string; phone: string; directions: string; description: string; services: string[] }> = {
  ikoyi: {
    name: "Iwosan Lagoon Hospital Ikoyi",
    subtitle: "Centre of Excellence for Critical Care & Complex Surgical Operations",
    address: "17B Bourdillon Road, Ikoyi, Lagos",
    phone: "+2347086393027",
    directions: "https://goo.gl/maps/aFi61XJmGfxWywri7",
    description: "Our Ikoyi facility is the flagship of Iwosan Lagoon Hospitals, offering the most advanced critical care and complex surgical capabilities in Nigeria. With state-of-the-art operating theatres, intensive care units, and diagnostic equipment, we provide world-class healthcare in a premium environment.",
    services: ["Neurosurgery", "General Surgery", "Critical Care", "Cardiology", "Orthopaedics", "Emergency Medicine", "Radiology & Imaging"],
  },
  ikeja: {
    name: "Iwosan Lagoon Hospital Ikeja",
    subtitle: "Centre of Excellence for Mother and Child",
    address: "97/101 Obafemi Awolowo Ave., Ikeja",
    phone: "+2347086393027",
    directions: "https://maps.app.goo.gl/kh9CrhBPoXFDd7Ts8",
    description: "The Ikeja facility specializes in maternal and child health, offering comprehensive obstetric care, neonatal intensive care, and paediatric services. Our NICU is one of the best-equipped in West Africa.",
    services: ["Obstetrics & Gynaecology", "Paediatrics & NICU", "Family Medicine", "General Surgery", "Laboratory Services"],
  },
  "victoria-island": {
    name: "Iwosan Lagoon Hospital Victoria Island",
    subtitle: "Centre of Excellence for Cardiology & Cardiac Surgery",
    address: "3B Ligali Ayorinde Street, Victoria Island",
    phone: "+2347086393027",
    directions: "https://goo.gl/maps/QLrUbjX1AhGpsn228",
    description: "Our Victoria Island hospital houses our cardiac centre of excellence, offering comprehensive cardiovascular diagnostics, interventional cardiology, and cardiac surgery services.",
    services: ["Cardiology", "Cardiac Surgery", "Internal Medicine", "Nephrology & Dialysis", "Health Assessment Clinic"],
  },
  outpatient: {
    name: "Iwosan Lagoon Outpatient Clinic & Wellness Centre",
    subtitle: "Ambulatory Care & Wellness Services",
    address: "13A & 13B Idejo Street, Victoria Island",
    phone: "+2347086393027",
    directions: "https://goo.gl/maps/J3h6PAsciJidoAbW6",
    description: "Our outpatient clinic and wellness centre on Idejo Street provides convenient ambulatory care, wellness assessments, and lifestyle services in a comfortable, modern setting.",
    services: ["Outpatient Consultations", "Wellness Assessments", "Physiotherapy", "Dental Care", "Dermatology", "Mental Health Services"],
  },
  worksite: {
    name: "Worksite Clinic Management",
    subtitle: "Occupational Health & Corporate Wellness",
    address: "Multiple locations across Lagos",
    phone: "+2347086393027",
    directions: "",
    description: "Our Worksite Clinic Management division provides comprehensive occupational health services to corporate clients. We manage on-site medical clinics, conduct workplace health assessments, and implement wellness programs.",
    services: ["On-site Clinic Management", "Occupational Health Assessments", "Workplace Wellness Programs", "Emergency Preparedness", "Employee Health Screening"],
  },
};

const FacilityPage = () => {
  const { facilityId } = useParams();
  const facility = facilityData[facilityId || "ikoyi"];

  if (!facility) {
    return (
      <Layout>
        <section className="page-hero">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Our Facilities</h1>
            <div className="gold-accent-line mt-4" />
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="section-heading mb-8">Choose a Facility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(facilityData).map(([id, f]) => (
                <Link key={id} to={`/facilities/${id}`} className="bg-card rounded-xl p-8 card-hover group">
                  <h3 className="font-display text-xl font-semibold text-primary group-hover:text-gold transition-colors">{f.name}</h3>
                  <p className="font-body text-sm text-gold mt-1">{f.subtitle}</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">{f.address}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-body mt-3">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-cream">{facility.name}</h1>
          <p className="text-gold font-body text-lg mt-2">{facility.subtitle}</p>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

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

          {/* Google Maps placeholder */}
          <AnimateOnScroll>
            <div className="bg-muted rounded-2xl h-64 flex items-center justify-center mb-12">
              <p className="text-muted-foreground font-body">Google Maps Embed</p>
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

          <div className="text-center">
            <Link to="/book-appointment" className="btn-gold text-lg px-10">Book Appointment</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacilityPage;
