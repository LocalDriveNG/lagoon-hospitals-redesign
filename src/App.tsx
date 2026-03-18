import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Eager imports — eliminates blank page from lazy loading + Suspense + AnimatePresence conflict
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import FAQPage from "./pages/FAQPage";
import ServicesPage from "./pages/ServicesPage";
import FacilityPage from "./pages/FacilityPage";
import CareersPage from "./pages/CareersPage";
import NewsPage from "./pages/NewsPage";
import VideosPage from "./pages/VideosPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import PatientRightsPage from "./pages/PatientRightsPage";
import HealthEducationPage from "./pages/HealthEducationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const pageVariants = {
  initial: { opacity: 0, y: prefersReducedMotion() ? 0 : 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: prefersReducedMotion() ? 0 : -20 },
};

const pageTransition = {
  duration: prefersReducedMotion() ? 0.1 : 0.25,
  ease: "easeInOut" as const,
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/facilities" element={<FacilityPage />} />
          <Route path="/facilities/:facilityId" element={<FacilityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/patient-rights" element={<PatientRightsPage />} />
          <Route path="/health-education" element={<HealthEducationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
