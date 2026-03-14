import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

// Simple X (Twitter) icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Simple TikTok icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-navy text-cream/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoDark} alt="Iwosan Lagoon Hospitals" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-cream/70 font-body leading-relaxed">
              We are a consistently patient-first, world-class healthcare service provider and the leading private tertiary care organization in Nigeria.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/LagoonHospitals" },
                { icon: XIcon, href: "https://twitter.com/LagoonHospitals", label: "X" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCV-qp1z_RpXO_5WY3r37iXQ" },
                { icon: Instagram, href: "https://www.instagram.com/lagoonhospitalsng/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/lagoon-hospitals/" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@lagoonhospitals", label: "TikTok" },
                { icon: Mail, href: "mailto:livemorelife@lagoonhospitals.com" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label={label || "Social link"}>
                  {typeof Icon === 'function' && Icon.toString().includes('svg') ? <Icon /> : <Icon className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Locations</h4>
            <ul className="space-y-2 text-sm font-body">
              {["Ikoyi", "Obafemi Awolowo", "Adeniyi Jones", "Ligali Ayorinde", "Idejo", "Alaro City"].map((loc) => (
                <li key={loc}>
                  <Link to="/facilities" className="text-cream/70 hover:text-gold transition-colors">{loc}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body">
              {[
                { label: "Services", to: "/services" },
                { label: "Our Team", to: "/team" },
                { label: "About Us", to: "/about" },
                { label: "FAQ", to: "/faq" },
                { label: "Appointments", to: "/book-appointment" },
                { label: "Patient Rights", to: "/patient-rights" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-cream/70 hover:text-gold transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm font-body">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <div>
                  <a href="tel:+2347086393027" className="text-cream/70 hover:text-gold transition-colors">+234 708 639 3027</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="mailto:livemorelife@lagoonhospitals.com" className="text-cream/70 hover:text-gold transition-colors">
                  livemorelife@lagoonhospitals.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/2349139383474"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald text-cream px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50 font-body">
          <p>© 2026 Iwosan Lagoon Hospitals. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/patient-rights" className="hover:text-cream transition-colors">Patient Rights</Link>
            <Link to="/about" className="hover:text-cream transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
