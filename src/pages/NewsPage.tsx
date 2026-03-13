import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import fibroidsForum from "@/assets/news/fibroids-forum.png";
import doctorsForum from "@/assets/news/doctors-forum.webp";
import radioTalk from "@/assets/news/radio-talk.jpg";
import breastCancer2024 from "@/assets/news/breast-cancer-2024.jpg";

const newsItems = [
  { title: "Doctors' Forum: Management of Fibroids and Uterine Prolapse", date: "August 13, 2025", image: fibroidsForum, excerpt: "Our Doctors Forum was an insightful gathering of medical professionals discussing the latest approaches to managing fibroids and uterine prolapse.", category: "Events" },
  { title: "Doctors' Forum", date: "July 1, 2025", image: doctorsForum, excerpt: "It was a day of knowledge sharing and professional development at our quarterly Doctors' Forum.", category: "Events" },
  { title: 'Tune In to "Your Health and You" on Classic FM 97.3', date: "May 15, 2025", image: radioTalk, excerpt: "At Iwosan Lagoon Hospitals, we are committed to health education. Listen to our radio show every Tuesday at 5:30 PM.", category: "Radio Show" },
  { title: "Breast Cancer Awareness Walk 2024", date: "November 18, 2024", image: breastCancer2024, excerpt: "A huge thank you to everyone who joined us for the Breast Cancer Awareness Walk at our Ikoyi facility.", category: "Events" },
];

const categories = ["All", "Events", "Radio Show"];

const NewsPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">News Updates</h1>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button key={c} className="px-4 py-2 rounded-full text-sm font-body font-medium bg-card text-muted-foreground hover:bg-gold hover:text-cream transition-all">
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((n, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-card rounded-xl overflow-hidden card-hover group h-full flex flex-col">
                  <div className="aspect-video">
                    <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-body text-gold font-semibold uppercase tracking-wider">{n.category}</span>
                    <h3 className="font-display text-lg font-semibold text-primary mt-2 group-hover:text-gold transition-colors">{n.title}</h3>
                    <p className="text-xs text-muted-foreground font-body mt-1">{n.date}</p>
                    <p className="font-body text-sm text-muted-foreground mt-3 flex-1">{n.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium mt-4">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
