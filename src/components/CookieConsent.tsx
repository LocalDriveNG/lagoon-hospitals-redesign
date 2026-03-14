import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-navy/95 backdrop-blur-sm border-t border-cream/10 px-4 py-4 animate-fade-in">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cream/80 text-sm font-body text-center sm:text-left">
          We use cookies to improve your experience. By continuing to use this site, you agree to our{" "}
          <Link to="/privacy-policy" className="text-gold underline hover:text-gold-light">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Link to="/privacy-policy" className="text-sm font-body text-cream/60 hover:text-cream transition-colors">
            Learn More
          </Link>
          <button onClick={accept} className="btn-gold text-sm px-6 py-2">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
