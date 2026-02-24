// export default function Contact() {
//   return (
//     <section id="contact" className="bg-blue-50 py-16 px-4">
//       <div className="container mx-auto max-w-xl">
//         <h2 className="mb-8 text-3xl font-bold text-gray-700 md:text-4xl">
//           Contact Us
//         </h2>
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="space-y-6"
//         >
//           <div>
//             <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Your name"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="your@email.com"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               placeholder="Your message..."
//               className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }



export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-700 md:text-4xl">
          Contact Us
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
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
  )
}