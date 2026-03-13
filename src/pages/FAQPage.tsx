import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "General",
    items: [
      { q: "What is Iwosan Lagoon Hospitals?", a: "Iwosan Lagoon Hospitals is the leading private tertiary care organization in Nigeria, providing world-class healthcare services across multiple locations in Lagos." },
      { q: "Where are your locations?", a: "We have hospitals and clinics in Ikoyi, Ikeja, Victoria Island, and Alaro City. Please visit our Facilities page for full addresses and directions." },
      { q: "What are your operating hours?", a: "Our hospitals operate 24/7 for emergency services. Outpatient clinics are open Monday to Saturday from 8:00 AM to 6:00 PM." },
    ],
  },
  {
    category: "Appointments",
    items: [
      { q: "How do I book an appointment?", a: "You can book an appointment online through our website, call us at +234 708 639 3027, or send a WhatsApp message to +234 913 938 3474." },
      { q: "Can I book an appointment for a specific doctor?", a: "Yes, when booking your appointment you can request a specific consultant. We will do our best to accommodate your preference." },
      { q: "What should I bring to my appointment?", a: "Please bring a valid ID, your insurance card (if applicable), any previous medical records, and a list of current medications." },
    ],
  },
  {
    category: "Insurance",
    items: [
      { q: "Do you accept health insurance?", a: "Yes, we accept most major health insurance providers in Nigeria. Please contact us to confirm if your specific plan is accepted." },
      { q: "What if I don't have insurance?", a: "We offer competitive self-pay rates. Our patient services team can discuss payment options and plans with you." },
    ],
  },
  {
    category: "Services",
    items: [
      { q: "What specialties do you offer?", a: "We offer over 20 specialties including Neurosurgery, Cardiology, Obstetrics & Gynaecology, Paediatrics, Orthopaedics, Nephrology, Bariatrics, and more." },
      { q: "Do you offer health check-ups?", a: "Yes, our Health Assessment Clinic offers comprehensive health screening packages for individuals and corporate clients." },
    ],
  },
  {
    category: "Emergency",
    items: [
      { q: "How do I access emergency services?", a: "For emergencies, call +234 708 639 3027 immediately or visit our nearest hospital. Our emergency departments are open 24/7." },
      { q: "Do you have ambulance services?", a: "Yes, we have fully equipped ambulances available for emergency transport. Contact our emergency line for immediate dispatch." },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Frequently Asked Questions</h1>
          <div className="gold-accent-line mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          {faqCategories.map((cat, ci) => (
            <AnimateOnScroll key={ci}>
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">{cat.category}</h2>
                <div className="gold-accent-line mb-6" />
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.items.map((item, ii) => (
                    <AccordionItem key={ii} value={`${ci}-${ii}`} className="bg-card rounded-lg border border-border px-5">
                      <AccordionTrigger className="font-body font-medium text-primary text-left py-4 hover:text-gold">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-muted-foreground pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
