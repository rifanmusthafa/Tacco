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
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {open && (
        <div className="flex flex-col items-center space-y-3">

          {/* Phone */}
          <a
            href="tel:+919074039713"
            className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:scale-110"
          >
            <Phone className="text-blue-600" size={20} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/tacco.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:scale-110"
          >
            <Instagram className="text-pink-500" size={20} />
          </a>

          {/* WhatsApp */}
<a
  href="https://wa.me/919074039713"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:scale-110"
>
  <svg
    className="h-5 w-5 text-green-500"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.4 0 .12 5.28.12 11.92c0 2.1.55 4.15 1.6 5.97L0 24l6.25-1.64a11.87 11.87 0 005.79 1.48h.01c6.64 0 11.92-5.28 11.92-11.92 0-3.18-1.24-6.17-3.45-8.44zM12.05 21.5a9.53 9.53 0 01-4.86-1.34l-.35-.21-3.71.98.99-3.62-.23-.37a9.47 9.47 0 01-1.46-5.02c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.92.99 6.71 2.8a9.45 9.45 0 012.8 6.72c0 5.25-4.27 9.52-9.51 9.52zm5.37-7.13c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.1-.27-.15-.56-.29z" />
  </svg>
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