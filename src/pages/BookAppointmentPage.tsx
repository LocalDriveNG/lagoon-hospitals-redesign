import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import VideoHero from "@/components/VideoHero";
import { useState } from "react";
import { Calendar, MapPin, User, Phone, Mail, FileText, ChevronRight, ChevronLeft, Check, Clock } from "lucide-react";

const locationOptions = [
  { name: "Iwosan Lagoon Hospitals, Ikoyi", address: "17B Bourdillon Road, Ikoyi, Lagos" },
  { name: "Iwosan Lagoon Hospitals, Ikeja", address: "97/101 Obafemi Awolowo Ave., Ikeja" },
  { name: "Iwosan Lagoon Hospital, Victoria Island", address: "3B Ligali Ayorinde Street, VI" },
  { name: "Iwosan Lagoon Outpatient Clinic, VI", address: "13A Idejo Street, Victoria Island" },
  { name: "Iwosan Lagoon Wellness Centre, VI", address: "13B Idejo Street, Victoria Island" },
];

const specialties = [
  "Neurosurgery", "General Surgery", "Cardiology", "Obstetrics & Gynaecology",
  "Paediatrics", "Orthopaedics", "Nephrology", "Bariatrics",
  "Health Assessment", "Family Medicine", "Dermatology", "Ophthalmology",
];

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const BookAppointmentPage = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    location: "", specialty: "", date: "", time: "", fullName: "", phone: "", email: "", notes: "",
  });

  const steps = ["Location", "Service", "Date & Time", "Your Details", "Confirm"];

  const updateForm = (key: string, value: string) => setForm({ ...form, [key]: value });

  const canProceed = () => {
    switch (step) {
      case 0: return !!form.location;
      case 1: return !!form.specialty;
      case 2: return !!form.date && !!form.time;
      case 3: return !!form.fullName && !!form.phone && !!form.email;
      default: return true;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <VideoHero>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Appointment Confirmed</h1>
            <div className="gold-accent-line mt-4" />
          </div>
        </VideoHero>
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <AnimateOnScroll>
              <div className="bg-card rounded-2xl p-12 border-t-4 border-t-gold shadow-lg">
                <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-emerald" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Thank You!</h2>
                <p className="font-body text-muted-foreground text-lg">
                  Your appointment request has been received. We'll contact you within 24 hours to confirm your booking.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <VideoHero>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Book an Appointment</h1>
          <p className="text-cream/70 font-body text-lg mt-4">We're here for you — let's find the right time and place.</p>
          <div className="gold-accent-line mt-4" />
        </div>
      </VideoHero>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-body font-semibold transition-all ${
                    i <= step ? "bg-gold text-cream" : "bg-muted text-muted-foreground"
                  }`}>
                    {i < step ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className="hidden sm:block text-xs font-body text-muted-foreground mt-1.5">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 md:w-20 h-0.5 mx-1 ${i < step ? "bg-gold" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="bg-card rounded-2xl p-8 md:p-12 border-t-4 border-t-gold shadow-lg">
              <h2 className="text-2xl font-display font-semibold text-primary mb-6">{steps[step]}</h2>
              <div className="gold-accent-line mb-8" />

              {/* Step 0: Location */}
              {step === 0 && (
                <div className="space-y-3">
                  {locationOptions.map((loc) => (
                    <button key={loc.name} onClick={() => updateForm("location", loc.name)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all font-body text-sm ${
                        form.location === loc.name ? "border-gold bg-gold/5 text-primary shadow-md" : "border-border hover:border-gold/50"
                      }`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${form.location === loc.name ? "border-gold bg-gold" : "border-border"}`}>
                          {form.location === loc.name && <Check className="w-3 h-3 text-cream" />}
                        </div>
                        <div>
                          <p className="font-semibold">{loc.name}</p>
                          <p className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {loc.address}
                          </p>
                        </div>
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
                      className={`text-left p-4 rounded-lg border-2 transition-all font-body text-sm ${
                        form.specialty === s ? "border-gold bg-gold/5 text-primary shadow-md" : "border-border hover:border-gold/50"
                      }`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${form.specialty === s ? "border-gold bg-gold" : "border-border"}`}>
                          {form.specialty === s && <Check className="w-2.5 h-2.5 text-cream" />}
                        </div>
                        {s}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-body font-medium text-primary mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" /> Preferred Date
                    </label>
                    <input type="date" value={form.date} onChange={(e) => updateForm("date", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-primary mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" /> Preferred Time
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {timeSlots.map(t => (
                        <button key={t} onClick={() => updateForm("time", t)}
                          className={`px-3 py-2 rounded-lg border-2 text-sm font-body transition-all ${
                            form.time === t ? "border-gold bg-gold text-cream" : "border-border hover:border-gold/50"
                          }`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Full Name *</label>
                    <input type="text" value={form.fullName} onChange={(e) => updateForm("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Phone Number *</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="+234..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Email Address *</label>
                    <input type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-primary mb-2">Additional Notes</label>
                    <textarea value={form.notes} onChange={(e) => updateForm("notes", e.target.value)}
                      placeholder="Any additional information..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-2 border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-background resize-none" />
                  </div>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-6 space-y-3">
                    {[
                      { icon: MapPin, label: "Location", value: form.location },
                      { icon: FileText, label: "Service", value: form.specialty },
                      { icon: Calendar, label: "Date", value: form.date },
                      { icon: Clock, label: "Time", value: form.time },
                      { icon: User, label: "Name", value: form.fullName },
                      { icon: Phone, label: "Phone", value: form.phone },
                      { icon: Mail, label: "Email", value: form.email },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 text-sm font-body">
                        <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-muted-foreground w-16">{label}:</span>
                        <span className="text-primary font-medium">{value || "—"}</span>
                      </div>
                    ))}
                    {form.notes && (
                      <div className="flex items-start gap-3 text-sm font-body pt-2 border-t border-border">
                        <FileText className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground w-16">Notes:</span>
                        <span className="text-primary">{form.notes}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    By confirming, our team will reach out to finalize your appointment within 24 hours.
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
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`btn-gold text-sm gap-2 ${!canProceed() ? "opacity-50 cursor-not-allowed hover:transform-none" : ""}`}
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn-gold text-sm gap-2">
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
