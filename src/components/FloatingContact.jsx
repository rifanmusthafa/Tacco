import { useState, useEffect } from "react";
import { Phone, Instagram, MessageCircle, Plus } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  // Auto close after 3 seconds
  useEffect(() => {
    let timer;

    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 3000); // 3 seconds
    }

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {open && (
        <div className="flex flex-col items-center space-y-3">
          
          <a
            href="tel:+919876543210"
            className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:scale-110"
          >
            <Phone className="text-blue-600" size={20} />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:scale-110"
          >
            <Instagram className="text-pink-500" size={20} />
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:scale-110"
          >
            <MessageCircle className="text-green-500" size={20} />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-white/20 p-4 text-blue-600 shadow-xl backdrop-blur-md border border-white/40 transition hover:scale-110 hover:bg-white/30"
      >
        <Plus
          size={24}
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
}