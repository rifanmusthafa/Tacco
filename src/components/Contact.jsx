import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919074039713";

    const text = `Hi Tacco,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="bg-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-700 md:text-4xl">
          Contact Us
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-600 hover:shadow-lg"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Map (UNCHANGED) */}
          <div className="h-[350px] w-full overflow-hidden rounded-xl shadow-lg md:h-auto">
            <iframe
              title="Shop Location"
              src="https://www.google.com/maps?q=14.906168,78.007286&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}