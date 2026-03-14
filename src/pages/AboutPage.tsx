import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { Link } from "react-router-dom";
import { Heart, Shield, Users, Award, Building2, Stethoscope } from "lucide-react";

const values = [
  { icon: Heart, title: "Patient First", desc: "Every decision is guided by the best interest of our patients." },
  { icon: Shield, title: "Excellence", desc: "We pursue the highest standards in healthcare delivery." },
  { icon: Users, title: "Teamwork", desc: "Collaborative multi-disciplinary approach to patient care." },
  { icon: Award, title: "Integrity", desc: "Ethical practice and transparency in all we do." },
];

const stats = [
  { value: "6+", label: "Locations" },
  { value: "30+", label: "Years of Service" },
  { value: "20+", label: "Specialties" },
  { value: "500+", label: "Healthcare Professionals" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">About Us</h1>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      {/* Mission Statement */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-card">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xl md:text-2xl font-display italic text-primary leading-relaxed">
              "We are a consistently patient-first, world-class healthcare services provider."
            </p>
            <div className="gold-accent-line mx-auto mt-6" />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Values */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <h2 className="section-heading section-heading-center text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-card rounded-xl p-8 text-center card-hover">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* About Content */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-navy">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-8">Our Story</h2>
            <div className="gold-accent-line mb-8" />
            <div className="space-y-6 font-body text-cream/80 leading-relaxed">
              <p>
                Iwosan Lagoon Hospitals is the leading private tertiary care organization in Nigeria. We operate a collegiate 
                model of multi-disciplinary care, ensuring that each patient receives the most comprehensive and specialized 
                treatment available.
              </p>
              <p>
                With over 30 years of dedicated service to the Nigerian healthcare landscape, we have built a reputation for 
                excellence, compassion, and innovation. Our network of hospitals and clinics across Lagos provides 
                world-class healthcare services that rival the best institutions globally.
              </p>
              <p>
                Our mission is simple yet profound: We Will Look After You. This promise drives every aspect of our 
                operations — from the recruitment of the finest medical professionals to the adoption of cutting-edge 
                medical technology.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Stats */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-card rounded-xl p-8 text-center card-hover">
                  <span className="text-4xl md:text-5xl font-display font-bold text-gold">{s.value}</span>
                  <p className="font-body text-sm text-muted-foreground mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Collegiate Model */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24 px-4 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-8 h-8 text-gold" />
                  <h2 className="section-heading text-2xl md:text-3xl">Collegiate Multi-Disciplinary Care</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mt-4">
                  Our collegiate model brings together specialists from multiple medical disciplines to collaborate on patient 
                  care. This approach ensures comprehensive diagnosis, treatment planning, and follow-up — delivering better 
                  outcomes for our patients.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gold/10 flex items-center justify-center">
                  <Building2 className="w-20 h-20 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="py-16 px-4 text-center">
          <Link to="/team" className="btn-gold text-lg px-10">Meet Our Team</Link>
        </section>
      </AnimateOnScroll>
    </Layout>
  );
};

export default AboutPage;
