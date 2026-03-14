import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const knowledgeBase: { keywords: string[]; answer: string }[] = [
  { keywords: ["appointment", "book", "schedule"], answer: "You can book an appointment by visiting our Book Appointment page at /book-appointment, or call us at +234 708 639 3027. You can also WhatsApp us at +234 913 938 3474." },
  { keywords: ["location", "where", "address", "branch", "facility"], answer: "We have 6 locations across Lagos:\n\n• Ikoyi — 17B Bourdillon Road\n• Ikeja (Obafemi Awolowo) — 97/101 Obafemi Awolowo Ave\n• Ikeja (Adeniyi Jones) — 91 Adeniyi Jones Ave\n• Victoria Island — 3B Ligali Ayorinde Street\n• Outpatient Clinic, VI — 13A Idejo Street\n• Wellness Centre, VI — 13B Idejo Street" },
  { keywords: ["service", "offer", "specialty", "speciality", "department"], answer: "We offer a wide range of services including: Neurosurgery, General Surgery, Cardiology, Obstetrics & Gynaecology, Paediatrics & NICU, Orthopaedics, Nephrology & Dialysis, Bariatrics, Health Assessment Clinic, Worksite Clinic Management, Family Medicine, and more." },
  { keywords: ["hotline", "phone", "call", "number", "contact"], answer: "Our hotlines:\n\n• Ikoyi: 07086393027\n• Ikeja: 07086393027\n• Victoria Island: 09139383461\n• Outpatient PCS Line: 09139352778\n• Wellness Centre: 09139352779\n\nEmail: livemorelife@lagoonhospitals.com" },
  { keywords: ["emergency"], answer: "For emergencies, please call +234 708 639 3027 immediately. Our Ikoyi facility at 17B Bourdillon Road has 24/7 emergency services." },
  { keywords: ["hour", "time", "open", "when"], answer: "Our hospitals operate 24/7 for emergency services. Outpatient clinics typically run Monday–Friday, 8AM–5PM, and Saturdays 8AM–1PM. Please call +234 708 639 3027 to confirm." },
  { keywords: ["insurance", "hmo", "payment"], answer: "We accept various HMO plans and insurance providers. For specific coverage details, please contact us at +234 708 639 3027 or email livemorelife@lagoonhospitals.com." },
  { keywords: ["wellness", "spa", "massage"], answer: "Our Iwosan Wellness Centre at 13B Idejo Street, Victoria Island offers comprehensive wellness assessments, physiotherapy, mental health services, and lifestyle services for your physical, mental, and emotional health." },
  { keywords: ["career", "job", "work", "hiring"], answer: "We're always looking for talented healthcare professionals! Visit our Careers page at /careers to see current openings and apply." },
  { keywords: ["hello", "hi", "hey", "good"], answer: "Hello! Welcome to Iwosan Lagoon Hospitals. How can I assist you today? I can help with booking appointments, finding locations, learning about our services, and more." },
];

const fallback = "For further assistance, please call +234 708 639 3027 or email livemorelife@lagoonhospitals.com. You can also WhatsApp us at +234 913 938 3474.";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return fallback;
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! I'm the Iwosan Lagoon Hospitals assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: getResponse(userMsg) }]);
    }, 500);
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-scale-in" style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="text-cream font-display font-semibold text-sm">Iwosan Assistant</h3>
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
            {["Book appointment", "Locations", "Services", "Hotlines"].map(q => (
              <button key={q} onClick={() => { setInput(q); }}
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
            <button onClick={send} className="bg-gold text-white rounded-lg p-2 hover:bg-gold-dark transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        aria-label="Chat with us"
      >
        <MessageCircle className="w-6 h-6 text-gold" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy text-cream text-xs font-body px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ask Us
        </span>
      </button>
    </>
  );
};

export default ChatBot;
