import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { Radio } from "lucide-react";

const episodes = [
  { title: "Understanding Hypertension and Heart Disease", date: "March 4, 2025" },
  { title: "Managing Diabetes: Prevention and Care", date: "February 25, 2025" },
  { title: "Mental Health Awareness: Breaking the Stigma", date: "February 18, 2025" },
  { title: "Women's Health: Cervical Cancer Screening", date: "February 11, 2025" },
  { title: "Childhood Immunization: What Parents Should Know", date: "February 4, 2025" },
  { title: "Kidney Disease: Signs, Symptoms, and Prevention", date: "January 28, 2025" },
  { title: "The Importance of Regular Health Check-ups", date: "January 21, 2025" },
  { title: "Nutrition and Healthy Eating for Nigerians", date: "January 14, 2025" },
];

const HealthEducationPage = () => {
  return (
    <Layout>
      <VideoHero>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Your Health and You</h1>
          <p className="text-cream/70 font-body text-lg mt-3">Health Education on Classic FM 97.3 | Tuesdays 5:30 PM</p>
          <div className="gold-accent-line mt-4" />
        </div>
      </VideoHero>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-hover mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Radio className="w-6 h-6 text-gold" />
              <span className="text-gold font-body font-semibold uppercase tracking-wider text-sm">Live Radio Show</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">Your Health and You</h2>
            <p className="text-muted-foreground font-body mt-4 leading-relaxed">
              "Your Health and You" is Iwosan Lagoon Hospitals' weekly health education radio programme on Classic FM 97.3. 
              Every Tuesday at 5:30 PM, our team of expert doctors and specialists discuss important health topics, answer listener questions, 
              and provide practical health advice for the Nigerian community.
            </p>
            <p className="text-muted-foreground font-body mt-3 leading-relaxed">
              The programme covers a wide range of health topics from chronic disease management to preventive care, 
              women's health, children's health, mental wellness, and more.
            </p>
          </div>

          <h2 className="section-heading mb-8">Previous Episodes</h2>
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <div key={i} className="bg-card rounded-xl p-5 card-hover flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <Radio className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-primary">{ep.title}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-1">{ep.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground font-body mb-4">
              Tune in every Tuesday at 5:30 PM on Classic FM 97.3
            </p>
            <a href="tel:+2347086393027" className="btn-gold">Contact Us for More Info</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthEducationPage;
