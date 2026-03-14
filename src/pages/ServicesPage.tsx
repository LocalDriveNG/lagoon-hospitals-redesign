import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const allServices = [
  { name: "Neurosurgery", icon: "🧠", desc: "Advanced neurosurgical procedures including brain and spinal surgery, performed by highly trained specialists using state-of-the-art technology." },
  { name: "General Surgery", icon: "🏥", desc: "Comprehensive surgical services ranging from minimally invasive procedures to complex operations, ensuring optimal patient outcomes." },
  { name: "Cardiology", icon: "❤️", desc: "Complete cardiac care including diagnostics, interventional cardiology, and cardiac surgery at our Centre of Excellence." },
  { name: "Obstetrics & Gynaecology", icon: "👶", desc: "Expert maternal and women's health services including prenatal care, delivery, fertility treatments, and gynaecological surgery." },
  { name: "Paediatrics & NICU", icon: "🧒", desc: "Specialized care for infants, children, and adolescents including a fully equipped Neonatal Intensive Care Unit." },
  { name: "Orthopaedics & Trauma", icon: "🦴", desc: "Expert treatment for bone, joint, and muscle conditions including joint replacements, sports injuries, and trauma surgery." },
  { name: "Nephrology & Dialysis", icon: "🫘", desc: "Comprehensive kidney care services including dialysis, kidney disease management, and transplant preparation." },
  { name: "Bariatrics", icon: "⚖️", desc: "Weight management and bariatric surgery services to help patients achieve and maintain a healthy weight." },
  { name: "Health Assessment Clinic", icon: "📋", desc: "Thorough health screening and wellness assessments for individuals and corporate organizations." },
  { name: "Worksite Clinic Management", icon: "🏢", desc: "Occupational health services and on-site clinic management for corporate clients ensuring workplace wellness." },
  { name: "Family Medicine", icon: "👨‍👩‍👧‍👦", desc: "Primary healthcare for the whole family, from routine check-ups to chronic disease management." },
  { name: "Dermatology", icon: "🧴", desc: "Skin care and treatment for conditions including eczema, psoriasis, skin cancer screening, and cosmetic dermatology." },
  { name: "Ophthalmology", icon: "👁️", desc: "Complete eye care services from routine eye exams to advanced surgical procedures." },
  { name: "ENT (Ear, Nose & Throat)", icon: "👂", desc: "Diagnosis and treatment of conditions affecting the ear, nose, throat, head, and neck." },
  { name: "Radiology & Imaging", icon: "📷", desc: "Advanced diagnostic imaging including MRI, CT scans, ultrasound, and X-ray services." },
  { name: "Laboratory Services", icon: "🔬", desc: "Full-service clinical laboratory with rapid turnaround times for accurate diagnostic testing." },
  { name: "Physiotherapy", icon: "🏃", desc: "Rehabilitation and physical therapy services to help patients recover mobility and function." },
  { name: "Dental Care", icon: "🦷", desc: "Comprehensive dental services including preventive, restorative, and cosmetic dentistry." },
];

const ServicesPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Our Services</h1>
          <p className="text-cream/70 font-body text-lg mt-4 max-w-xl">
            Comprehensive world-class healthcare services across multiple specialties.
          </p>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-card rounded-xl p-8 card-hover group h-full flex flex-col">
                  <span className="text-4xl mb-4">{s.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-primary group-hover:text-gold transition-colors">{s.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-3 flex-1">{s.desc}</p>
                  <Link to="/book-appointment" className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium mt-4 group-hover:gap-2 transition-all">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
