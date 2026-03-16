import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { Shield, Info, Lock, FileCheck, XCircle, Phone } from "lucide-react";

const rights = [
  { icon: Shield, title: "Right to Respectful Care", desc: "Every patient has the right to be treated with dignity, respect, and compassion regardless of their background, race, religion, gender, or economic status. Our staff are committed to providing courteous and professional care at all times." },
  { icon: Info, title: "Right to Information", desc: "You have the right to receive complete and accurate information about your diagnosis, treatment options, and prognosis in terms you can understand. You may also access your medical records upon request." },
  { icon: Lock, title: "Right to Privacy", desc: "Your medical information is confidential. We take every precaution to ensure that your personal and medical information is protected and only shared with authorized individuals involved in your care." },
  { icon: FileCheck, title: "Right to Consent", desc: "You have the right to be involved in all decisions about your care. No treatment or procedure will be performed without your informed consent. You will be informed of the risks, benefits, and alternatives before any treatment." },
  { icon: XCircle, title: "Right to Refuse Treatment", desc: "You have the right to refuse any proposed treatment or procedure, even if it is recommended by your healthcare provider. You will be informed of the potential consequences of refusing treatment." },
  { icon: Phone, title: "Right to Voice Concerns", desc: "You have the right to express concerns or complaints about your care without fear of retaliation. We have a formal process for addressing patient complaints and feedback." },
];

const PatientRightsPage = () => {
  return (
    <Layout>
      <VideoHero>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display text-cream">Patient Rights</h1>
          <p className="text-cream/70 font-body text-lg mt-3">Your rights as a patient at Iwosan Lagoon Hospitals</p>
          <div className="gold-accent-line mt-4" />
        </div>
      </VideoHero>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-12">
            At Iwosan Lagoon Hospitals, we are committed to upholding the rights and dignity of every patient. We believe that understanding your rights empowers you to participate actively in your healthcare decisions and contributes to a better care experience.
          </p>

          <div className="space-y-6">
            {rights.map((r, i) => (
              <div key={i} className="bg-card rounded-xl p-6 md:p-8 card-hover flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">{r.title}</h3>
                  <p className="text-muted-foreground font-body mt-2 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-cream">Have a Concern?</h3>
            <p className="text-cream/70 font-body mt-3">
              If you feel your rights have not been respected, please contact our Patient Experience team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a href="mailto:livemorelife@lagoonhospitals.com" className="btn-gold">Email Us</a>
              <a href="tel:+2347086393027" className="btn-outline-gold border-cream/30 text-cream hover:bg-cream/10">Call +234 708 639 3027</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PatientRightsPage;
