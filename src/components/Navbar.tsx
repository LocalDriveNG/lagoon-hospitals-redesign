import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Facilities", to: "/facilities", children: [
    { label: "Ikoyi", to: "/facilities/ikoyi" },
    { label: "Ikeja", to: "/facilities/ikeja" },
    { label: "Victoria Island", to: "/facilities/victoria-island" },
    { label: "Outpatient Clinic", to: "/facilities/outpatient" },
    { label: "Worksite Management", to: "/facilities/worksite" },
  ]},
  { label: "Careers", to: "/careers" },
  { label: "Updates", to: "/news", children: [
    { label: "News", to: "/news" },
    { label: "Videos", to: "/videos" },
  ]},
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-navy text-cream text-xs md:text-sm text-center py-2 px-4 font-body relative z-50">
        🎙️ Tune In — <span className="font-semibold">Your Health and You</span> on Classic FM 97.3 | Tuesdays 5:30 PM
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logoWhite} alt="Iwosan Lagoon Hospitals" className="h-10 md:h-14 w-auto" loading="eager" width={160} height={56} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  to={link.to}
                  className={`px-3 py-2 text-sm font-body font-medium transition-colors rounded-md ${
                    location.pathname === link.to || location.pathname.startsWith(link.to + "/")
                      ? "text-gold"
                      : "text-cream/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2 text-sm font-body text-foreground hover:bg-muted hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA - only Book Appointment */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/book-appointment" className="btn-gold text-sm gap-2">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-cream/10 max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.to}
                      className={`block py-2.5 text-sm font-body font-medium ${
                        location.pathname === link.to ? "text-gold" : "text-cream/90"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="text-cream/60 p-2"
                      >
                        {openDropdown === link.label ? "−" : "+"}
                      </button>
                    )}
                  </div>
                  {link.children && openDropdown === link.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block py-2 text-sm font-body text-cream/70 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-cream/10">
                <Link to="/book-appointment" className="btn-gold w-full text-sm gap-2 text-center">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
