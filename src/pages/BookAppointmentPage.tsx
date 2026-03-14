import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { useState } from "react";
import { Calendar, MapPin, User, Phone, Mail, FileText, ChevronRight, ChevronLeft, Check } from "lucide-react";

const locations = [
  "Iwosan Lagoon Hospitals, Ikoyi",
  "Iwosan Lagoon Hospitals, Ikeja",
  "Iwosan Lagoon Hospital, Victoria Island",
  "Iwosan Lagoon Outpatient Clinic, VI",
  "Iwosan Lagoon Wellness Centre, VI",
];

const specialties = [
  "Neurosurgery", "General Surgery", "Cardiology", "Obstetrics & Gynaecology",
  "Paediatrics", "Orthopaedics", "Nephrology", "Bariatrics",
  "Health Assessment", "Family Medicine", "Dermatology", "Ophthalmology",
];

const BookAppointmentPage = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    location: "", specialty: "", date: "", fullName: "", phone: "", email: "", notes: "",
  });

  const steps = ["Location", "Specialty", "Date & Time", "Details", "Confirm"];

  const updateForm = (key: string, value: string) => setForm({ ...form, [key]: value });

  return (
    <Layout>
      <VideoHero>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Book Appointment</h1>
          <p className="text-cream/70 font-body text-lg mt-4">Schedule your visit in a few easy steps.</p>
          <div className="gold-accent-line mt-4" />
        </div>
      </VideoHero>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-body font-semibold transition-all ${
                  i <= step ? "bg-gold text-cream" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <Check className="w-5 h-5" /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 md:w-20 h-0.5 mx-1 ${i < step ? "bg-gold" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="bg-card rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-display font-semibold text-primary mb-6">{steps[step]}</h2>
              <div className="gold-accent-line mb-8" />

              {/* Step 0: Location */}
              {step === 0 && (
                <div className="space-y-3">
                  {locations.map((loc) => (
                    <button key={loc} onClick={() => updateForm("location", loc)}
                      className={`w-full text-left p-4 rounded-lg border transition-all font-body text-sm ${
                        form.location === loc ? "border-gold bg-gold/5 text-primary" : "border-border hover:border-gold/50"
                      }`}>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        {loc}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 1: Specialty */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specialties.map((s) => (
                    <button key={s} onClick={() => updateForm("specialty", s)}
                      className={`text-left p-4 rounded-lg border transition-all font-body text-sm ${
                        form.specialty === s ? "border-gold bg-gold/5 text-primary" : "border-border hover:border-gold/50"
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Date */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Preferred Date</label>
                    <input type="date" value={form.date} onChange={(e) => updateForm("date", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-background" />
                  </div>
                </div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Full Name</label>
                    <input type="text" value={form.fullName} onChange={(e) => updateForm("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="+234..."
                      className="w-full px-4 py-3 rounded-lg border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Email</label>
                    <input type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Additional Notes</label>
                    <textarea value={form.notes} onChange={(e) => updateForm("notes", e.target.value)}
                      placeholder="Any additional information..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-background resize-none" />
                  </div>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-6 space-y-3">
                    {[
                      { icon: MapPin, label: "Location", value: form.location },
                      { icon: FileText, label: "Specialty", value: form.specialty },
                      { icon: Calendar, label: "Date", value: form.date },
                      { icon: User, label: "Name", value: form.fullName },
                      { icon: Phone, label: "Phone", value: form.phone },
                      { icon: Mail, label: "Email", value: form.email },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 text-sm font-body">
                        <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-muted-foreground">{label}:</span>
                        <span className="text-primary font-medium">{value || "—"}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    By confirming, our team will reach out to finalize your appointment.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                {step > 0 ? (
                  <button onClick={() => setStep(step - 1)} className="btn-outline-gold text-sm gap-2">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}
                {step < steps.length - 1 ? (
                  <button onClick={() => setStep(step + 1)} className="btn-gold text-sm gap-2">
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button onClick={() => alert("Appointment request submitted! We will contact you shortly.")} className="btn-gold text-sm gap-2">
                    <Check className="w-4 h-4" /> Confirm Appointment
                  </button>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointmentPage;
