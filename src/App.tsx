import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const FacilityPage = lazy(() => import("./pages/FacilityPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const VideosPage = lazy(() => import("./pages/VideosPage"));
const BookAppointmentPage = lazy(() => import("./pages/BookAppointmentPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const PatientRightsPage = lazy(() => import("./pages/PatientRightsPage"));
const HealthEducationPage = lazy(() => import("./pages/HealthEducationPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center font-body text-sm text-muted-foreground">
    Loading...
  </div>
);

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
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
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
