import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { Play } from "lucide-react";

import lagoonBabies from "@/assets/videos/lagoon-babies.png";
import motherChild from "@/assets/videos/mother-child.jpg";
import nicuImg from "@/assets/videos/nicu.jpg";
import familyMedicine from "@/assets/videos/family-medicine.png";

const videos = [
  { title: "Celebrating Lagoon Babies: 15 Years of Waiting, A Dream Come True", date: "August 10, 2025", image: lagoonBabies },
  { title: "Excellent Mother and Child Care from Generation to Generation", date: "February 10, 2025", image: motherChild },
  { title: "87 Days in NICU (Neonatal Intensive Care Unit): LAGOON BABIES SERIES", date: "February 10, 2025", image: nicuImg },
  { title: "The Role of Family Medicine Doctors", date: "March 25, 2023", image: familyMedicine },
];

const VideosPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Video Updates</h1>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((v, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-card rounded-xl overflow-hidden card-hover group cursor-pointer">
                  <div className="relative aspect-video">
                    <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy/30 flex items-center justify-center group-hover:bg-navy/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-cream ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-primary group-hover:text-gold transition-colors">{v.title}</h3>
                    <p className="text-xs text-muted-foreground font-body mt-2">{v.date}</p>
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

export default VideosPage;
