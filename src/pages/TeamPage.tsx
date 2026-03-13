import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";

const departments = ["All", "Surgery", "Cardiology", "Paediatrics", "Obstetrics", "Internal Medicine", "Orthopaedics"];

const teamMembers = [
  { name: "Dr. Adetokunbo Fabamwo", specialty: "Obstetrics & Gynaecology", dept: "Obstetrics", image: "" },
  { name: "Dr. Olumide Olusanya", specialty: "Cardiology & Cardiac Surgery", dept: "Cardiology", image: "" },
  { name: "Dr. Folashade Ogunsola", specialty: "General Surgery", dept: "Surgery", image: "" },
  { name: "Dr. Adeyinka Adejolu", specialty: "Paediatrics & Neonatology", dept: "Paediatrics", image: "" },
  { name: "Dr. Emeka Nwachukwu", specialty: "Orthopaedics & Trauma", dept: "Orthopaedics", image: "" },
  { name: "Dr. Bola Adekanmbi", specialty: "Internal Medicine", dept: "Internal Medicine", image: "" },
  { name: "Dr. Chukwudi Okafor", specialty: "Neurosurgery", dept: "Surgery", image: "" },
  { name: "Dr. Ngozi Eze", specialty: "Nephrology & Dialysis", dept: "Internal Medicine", image: "" },
];

const TeamPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? teamMembers : teamMembers.filter((m) => m.dept === filter);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Our Team</h1>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {departments.map((d) => (
              <button key={d} onClick={() => setFilter(d)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  filter === d ? "bg-gold text-cream" : "bg-card text-muted-foreground hover:bg-muted"
                }`}>
                {d}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((m, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-card rounded-xl overflow-hidden card-hover text-center">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <span className="text-6xl text-gold/30 font-display font-bold">{m.name.charAt(4)}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-primary">{m.name}</h3>
                    <p className="font-body text-sm text-gold mt-1">{m.specialty}</p>
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

export default TeamPage;
