import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

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
                { icon: Twitter, href: "https://twitter.com/LagoonHospitals" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCV-qp1z_RpXO_5WY3r37iXQ" },
                { icon: Instagram, href: "https://www.instagram.com/lagoonhospitalsng/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/lagoon-hospitals/" },
                { icon: Mail, href: "mailto:livemorelife@lagoonhospitals.com" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Icon className="w-4 h-4" />
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
                { label: "Patient Rights", to: "/about" },
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
            <Link to="/about" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-cream transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
