import { MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <a
      href="https://wa.me/2349139383474"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-cream" />
    </a>
  );
};

export default FloatingButtons;
