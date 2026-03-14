import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { Link } from "react-router-dom";
import { Briefcase, Heart, Users, ArrowRight } from "lucide-react";

const openings = [
  { title: "Consultant Cardiologist", dept: "Cardiology", location: "Victoria Island", type: "Full-time" },
  { title: "Senior Registrar — Obstetrics & Gynaecology", dept: "Obstetrics", location: "Ikeja", type: "Full-time" },
  { title: "Registered Nurse — ICU", dept: "Critical Care", location: "Ikoyi", type: "Full-time" },
  { title: "Physiotherapist", dept: "Rehabilitation", location: "Victoria Island", type: "Full-time" },
  { title: "Medical Laboratory Scientist", dept: "Laboratory", location: "Ikoyi", type: "Full-time" },
  { title: "Pharmacist", dept: "Pharmacy", location: "Ikeja", type: "Full-time" },
];

const CareersPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Careers</h1>
          <p className="text-cream/70 font-body text-lg mt-4 max-w-xl">
            Join our team of dedicated healthcare professionals making a difference.
          </p>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      {/* Why Work With Us */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <h2 className="section-heading section-heading-center text-center mb-12">Why Work at Iwosan Lagoon Hospitals?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Heart, title: "Purpose-Driven Work", desc: "Make a real impact on patients' lives every day." },
                { icon: Briefcase, title: "Career Growth", desc: "Continuous learning and professional development opportunities." },
                { icon: Users, title: "Team Culture", desc: "Work alongside the best medical minds in Nigeria." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-8 text-center card-hover">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Openings */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-heading mb-12">Current Openings</h2>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <div key={i} className="bg-background rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 card-hover">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs font-body bg-gold/10 text-gold px-3 py-1 rounded-full">{job.dept}</span>
                      <span className="text-xs font-body bg-muted text-muted-foreground px-3 py-1 rounded-full">{job.location}</span>
                      <span className="text-xs font-body bg-muted text-muted-foreground px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                  </div>
                  <a href="mailto:livemorelife@lagoonhospitals.com" className="btn-gold text-sm self-start">
                    Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </Layout>
  );
};

export default CareersPage;
