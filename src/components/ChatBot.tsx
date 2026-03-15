import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

interface KBEntry {
  keywords: string[];
  answer: string;
  followUps?: { keywords: string[]; answer: string }[];
}

const knowledgeBase: KBEntry[] = [
  {
    keywords: ["appointment", "book", "schedule"],
    answer: "You can book an appointment by visiting our Book Appointment page at /book-appointment, or call us at +234 708 639 3027. You can also WhatsApp us at +234 913 938 3474.",
  },
  {
    keywords: ["location", "where", "address", "branch", "facility", "facilities"],
    answer: "We have 6 locations across Lagos:\n\n• Ikoyi — 17B Bourdillon Road\n• Ikeja (Obafemi Awolowo) — 97/101 Obafemi Awolowo Ave\n• Ikeja (Adeniyi Jones) — 91 Adeniyi Jones Ave\n• Victoria Island — 3B Ligali Ayorinde Street\n• Outpatient Clinic, VI — 13A Idejo Street\n• Wellness Centre, VI — 13B Idejo Street\n\nWould you like details about a specific location?",
  },
  {
    keywords: ["service", "offer", "specialty", "speciality", "department", "what do you"],
    answer: "We offer a wide range of services including:\n\n• Neurosurgery\n• General Surgery\n• Cardiology\n• Obstetrics & Gynaecology\n• Paediatrics & NICU\n• Orthopaedics\n• Nephrology & Dialysis\n• Bariatrics\n• Health Assessment Clinic\n• Worksite Clinic Management\n• Family Medicine\n• Dermatology\n• Ophthalmology\n\nWould you like to know more about any specific service?",
  },
  {
    keywords: ["cardiology", "cardiac", "heart"],
    answer: "Our Cardiology & Cardiac Surgery Centre of Excellence is located at our Victoria Island facility (3B Ligali Ayorinde Street). We offer comprehensive cardiovascular diagnostics, interventional cardiology, cardiac surgery, and rehabilitation support.\n\nTo book a cardiology appointment, call +234 913 938 3461 or visit /book-appointment.",
  },
  {
    keywords: ["neurosurgery", "neuro", "brain", "spine"],
    answer: "Our Neurosurgery department at our Ikoyi facility (17B Bourdillon Road) offers advanced surgical treatment for conditions of the brain, spine, and nervous system. Our team includes highly specialized neurosurgeons.\n\nCall +234 708 639 3027 to book a consultation.",
  },
  {
    keywords: ["obstetric", "gynae", "gynaecol", "pregnancy", "pregnant", "maternity", "baby", "deliver"],
    answer: "Our Obstetrics & Gynaecology department is centered at our Ikeja facility — the Centre of Excellence for Mother and Child (97/101 Obafemi Awolowo Ave). We provide comprehensive prenatal care, high-risk pregnancy management, delivery services, and postnatal care.\n\nContact: +234 708 639 3027",
  },
  {
    keywords: ["paediatric", "pediatric", "child", "children", "nicu", "neonatal"],
    answer: "Our Paediatrics & NICU department at our Ikeja facility provides comprehensive healthcare for infants, children, and adolescents. Our NICU is one of the best-equipped in West Africa, caring for premature and critically ill newborns.\n\nCall +234 708 639 3027 for appointments.",
  },
  {
    keywords: ["orthopaedic", "orthopedic", "bone", "fracture", "joint"],
    answer: "Our Orthopaedics department at our Ikoyi facility offers treatment for bone, joint, and musculoskeletal conditions including fractures, joint replacements, and sports injuries.\n\nCall +234 708 639 3027 to schedule a consultation.",
  },
  {
    keywords: ["nephrology", "kidney", "dialysis", "renal"],
    answer: "Our Nephrology & Dialysis unit at our Victoria Island facility provides comprehensive kidney care including dialysis services, kidney disease management, and transplant evaluations.\n\nContact: +234 913 938 3461",
  },
  {
    keywords: ["bariatric", "weight", "obesity"],
    answer: "Our Bariatrics department offers comprehensive weight management solutions including surgical and non-surgical options for obesity treatment.\n\nCall +234 708 639 3027 to learn more.",
  },
  {
    keywords: ["surgery", "surgical", "general surgery"],
    answer: "Our General Surgery department at our Ikoyi facility handles a wide range of surgical procedures with state-of-the-art operating theatres and expert surgical teams.\n\nCall +234 708 639 3027 for consultations.",
  },
  {
    keywords: ["health assessment", "check up", "checkup", "screening"],
    answer: "Our Health Assessment Clinic provides thorough health screenings and comprehensive wellness check-ups. Available at multiple locations.\n\nBook your health assessment at /book-appointment or call +234 708 639 3027.",
  },
  {
    keywords: ["worksite", "corporate", "occupational", "employee"],
    answer: "Our Worksite Clinic Management division provides comprehensive occupational health services to corporate clients, including on-site clinic management, workplace health assessments, and employee wellness programs.\n\nContact us at +234 708 639 3027.",
  },
  {
    keywords: ["hotline", "phone", "call", "number", "contact"],
    answer: "Our hotlines:\n\n• Ikoyi: 07086393027\n• Ikeja: 07086393027\n• Victoria Island: 09139383461\n• Outpatient PCS Line: 09139352778\n• Wellness Centre: 09139352779\n\nEmail: livemorelife@lagoonhospitals.com\nWhatsApp: +234 913 938 3474",
  },
  {
    keywords: ["emergency", "urgent"],
    answer: "For emergencies, please call +234 708 639 3027 immediately. Our Ikoyi facility at 17B Bourdillon Road has 24/7 emergency services with a fully equipped emergency department.",
  },
  {
    keywords: ["hour", "time", "open", "when", "visiting"],
    answer: "Our hospitals operate 24/7 for emergency services. Outpatient clinics typically run Monday–Friday, 8AM–5PM, and Saturdays 8AM–1PM.\n\nVisiting hours are generally 4PM–6PM daily, but may vary by ward. Please call +234 708 639 3027 to confirm.",
  },
  {
    keywords: ["insurance", "hmo", "payment", "pay", "cost", "price"],
    answer: "We accept various HMO plans and insurance providers. Payment options include cash, card payments, and bank transfers. For specific coverage details or pricing, please contact us at +234 708 639 3027 or email livemorelife@lagoonhospitals.com.",
  },
  {
    keywords: ["wellness", "spa", "massage", "mental health", "physiotherapy"],
    answer: "Our Iwosan Wellness Centre at 13B Idejo Street, Victoria Island offers:\n\n• Comprehensive wellness assessments\n• Physiotherapy\n• Mental health services\n• Lifestyle services\n• Dental care\n• Dermatology\n\nCall 09139352779 or visit /facilities/outpatient for more.",
  },
  {
    keywords: ["career", "job", "work", "hiring", "vacancy", "recruit"],
    answer: "We're always looking for talented healthcare professionals! Visit our Careers page at /careers to see current openings and apply. You can also send your CV to livemorelife@lagoonhospitals.com.",
  },
  {
    keywords: ["ikoyi"],
    answer: "Our Ikoyi facility is located at 17B Bourdillon Road, Ikoyi, Lagos. It's our Centre of Excellence for Critical Care & Complex Surgical Operations.\n\nServices: Neurosurgery, General Surgery, Critical Care, Cardiology, Orthopaedics, Emergency Medicine, Radiology.\n\nPhone: 07086393027\nDirections: https://goo.gl/maps/aFi61XJmGfxWywri7",
  },
  {
    keywords: ["ikeja"],
    answer: "Our Ikeja facility is located at 97/101 Obafemi Awolowo Ave., Ikeja. It's our Centre of Excellence for Mother and Child.\n\nServices: Obstetrics & Gynaecology, Paediatrics & NICU, Family Medicine, General Surgery.\n\nPhone: 07086393027\nDirections: https://maps.app.goo.gl/kh9CrhBPoXFDd7Ts8",
  },
  {
    keywords: ["victoria island", "vi ", "ligali"],
    answer: "Our Victoria Island facility is at 3B Ligali Ayorinde Street, VI. It's our Centre of Excellence for Cardiology & Cardiac Surgery.\n\nServices: Cardiology, Cardiac Surgery, Internal Medicine, Nephrology & Dialysis, Health Assessment.\n\nPhone: 09139383461\nDirections: https://goo.gl/maps/QLrUbjX1AhGpsn228",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "help"],
    answer: "Hello! Welcome to Iwosan Lagoon Hospitals. How can I assist you today? I can help with:\n\n• Booking appointments\n• Finding our locations\n• Learning about our services\n• Getting hotline numbers\n• Insurance & payment info\n\nJust ask me anything!",
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye"],
    answer: "You're welcome! If you need anything else, feel free to ask. Stay healthy! 😊\n\nFor urgent matters, call +234 708 639 3027.",
  },
  {
    keywords: ["about", "who are you", "lagoon hospital", "iwosan"],
    answer: "Iwosan Lagoon Hospitals is a leading private tertiary care organization in Nigeria. We operate a collegiate model of multi-disciplinary care across 6 locations in Lagos.\n\nOur mission is to be consistently patient-first, delivering world-class healthcare with compassion.\n\nLearn more at /about.",
  },
  {
    keywords: ["radio", "classic fm", "your health"],
    answer: "Tune in to \"Your Health and You\" on Classic FM 97.3 every Tuesday at 5:30 PM. Listen to previous episodes at: https://www.lagoonhospitals.com/updates/your-health-and-you-health-education-nigeria/",
  },
];

const fallback = "I'm not sure about that, but I'd love to help! For further assistance, please call +234 708 639 3027 or email livemorelife@lagoonhospitals.com. You can also WhatsApp us at +234 913 938 3474.";

function getResponse(input: string, history: Message[]): string {
  const lower = input.toLowerCase();

  // Check all knowledge base entries, score by number of keyword matches
  let bestMatch: KBEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    const score = entry.keywords.reduce((acc, kw) => acc + (lower.includes(kw) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer;
  }

  // Check context from previous messages for follow-up
  if (history.length >= 2) {
    const lastBotMsg = [...history].reverse().find(m => m.role === "bot");
    if (lastBotMsg) {
      // If user says "tell me more" or "more info"
      if (lower.includes("more") || lower.includes("detail") || lower.includes("explain")) {
        // Try to find related context from last bot message
        const lastLower = lastBotMsg.text.toLowerCase();
        for (const entry of knowledgeBase) {
          if (entry.keywords.some(kw => lastLower.includes(kw) && kw.length > 3)) {
            if (entry.answer !== lastBotMsg.text) {
              return entry.answer;
            }
          }
        }
      }
    }
  }

  return fallback;
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! I'm the Iwosan Lagoon Hospitals assistant. How can I help you today?\n\nI can help with appointments, locations, services, hotlines, and more." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text?: string) => {
    const userMsg = (text || input).trim();
    if (!userMsg) return;
    const newMessages: Message[] = [...messages, { role: "user", text: userMsg }];
    setMessages(newMessages);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: getResponse(userMsg, newMessages) }]);
    }, 400);
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-scale-in" style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="text-cream font-display font-semibold text-sm">Iwosan Lagoon Hospitals</h3>
              <p className="text-cream/60 text-xs font-body">Ask us anything</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-cream/70 hover:text-cream">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[50vh]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm font-body whitespace-pre-line ${
                  m.role === "user"
                    ? "bg-gold text-white"
                    : "bg-muted text-foreground"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick questions */}
          <div className="px-4 pb-2 flex flex-wrap gap-1">
            {["Book appointment", "Locations", "Services", "Hotlines", "Insurance"].map(q => (
              <button key={q} onClick={() => send(q)}
                className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1 font-body hover:bg-gold hover:text-white transition-colors">
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 text-sm font-body px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button onClick={() => send()} className="bg-gold text-white rounded-lg p-2 hover:bg-gold-dark transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        aria-label="Chat with us"
      >
        <MessageCircle className="w-6 h-6 text-navy" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-body px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ask Us
        </span>
      </button>
    </>
  );
};

export default ChatBot;
