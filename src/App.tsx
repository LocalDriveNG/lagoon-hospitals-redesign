import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
