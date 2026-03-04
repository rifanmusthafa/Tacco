const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
] 

const socialLinks = [
  // Instagram
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tacco.in/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
  },

  // WhatsApp
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919074039713',
    icon: (
      <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.4 0 .12 5.28.12 11.92c0 2.1.55 4.15 1.6 5.97L0 24l6.25-1.64a11.87 11.87 0 005.79 1.48h.01c6.64 0 11.92-5.28 11.92-11.92 0-3.18-1.24-6.17-3.45-8.44zM12.05 21.5a9.53 9.53 0 01-4.86-1.34l-.35-.21-3.71.98.99-3.62-.23-.37a9.47 9.47 0 01-1.46-5.02c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.92.99 6.71 2.8a9.45 9.45 0 012.8 6.72c0 5.25-4.27 9.52-9.51 9.52zm5.37-7.13c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.1-.27-.15-.56-.29z" />
    </svg>
    ),
  },

  // Gmail
  {
    name: 'Gmail',
    href: 'mailto:footweartacco@gmail.com',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.065L.8 4.8V19.2c0 .66.54 1.2 1.2 1.2h20c.66 0 1.2-.54 1.2-1.2V4.8L12 13.065zM12 10.935L23.2 2.7C22.99 2.28 22.56 2 22.08 2H1.92C1.44 2 1.01 2.28.8 2.7L12 10.935z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0069B4] text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Tacco</h3>
            <p className="mt-3 text-sm text-white">
              Premium sandals crafted for everyday comfort and modern style.
              Walk confidently from beach days to city nights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <nav className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white transition hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Connect
            </h4>
            <p className="mt-3 text-sm text-white">
              Have questions about sizing, materials, or bulk orders?
              Reach out and we&apos;ll be happy to help.
            </p>

            <p className="mt-3 text-sm text-white">
              Email{' '}
              <a
                href="mailto:footweartacco@gmail.com"
                className="font-medium text-white underline-offset-2 hover:underline"
              >
                footweartacco@gmail.com
                <br />
                Phone 91 9074039713
              </a>
            </p>

            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="rounded-full bg-[#0069B4] p-2 text-white transition hover:opacity-80"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white pt-6 text-center text-xs text-white">
          &copy; {new Date().getFullYear()} Tacco. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
// const navLinks = [
//   { href: '#home', label: 'Home' },
//   { href: '#about', label: 'About' },
//   { href: '#products', label: 'Products' },
//   { href: '#gallery', label: 'Gallery' },
//   { href: '#contact', label: 'Contact' },
// ]

// const socialLinks = [
//   {
//     name: 'Instagram',
//     href: 'https://www.instagram.com/tacco.in/',
//     icon: (
//       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'WhatsApp',
//     href: 'https://wa.me/919074039713',
//     icon: (
//       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.4 0 .12 5.28.12 11.92c0 2.1.55 4.15 1.6 5.97L0 24l6.25-1.64a11.87 11.87 0 005.79 1.48z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'Gmail',
//     href: 'mailto:footweartacco@gmail.com',
//     icon: (
//       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 13.065L.8 4.8V19.2c0 .66.54 1.2 1.2 1.2h20c.66 0 1.2-.54 1.2-1.2V4.8L12 13.065z" />
//       </svg>
//     ),
//   },
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-[#38649C] text-white">
//       <div className="container mx-auto max-w-6xl px-4 py-12">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">

//           {/* Brand */}
//           <div>
//             <h3 className="text-xl font-semibold tracking-tight">Tacco</h3>
//             <p className="mt-3 text-sm text-white/90">
//               Premium sandals crafted for everyday comfort and modern style.
//               Walk confidently from beach days to city nights.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
//               Quick Links
//             </h4>
//             <nav className="mt-4 space-y-2 text-sm">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="block text-white/90 transition hover:text-white"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
//               Connect
//             </h4>
//             <p className="mt-3 text-sm text-white/90">
//               Have questions about sizing, materials, or bulk orders?
//               Reach out and we&apos;ll be happy to help.
//             </p>

//             <p className="mt-3 text-sm text-white/90">
//               Email{' '}
//               <a
//                 href="mailto:footweartacco@gmail.com"
//                 className="font-medium text-white underline-offset-2 hover:underline"
//               >
//                 footweartacco@gmail.com
//               </a>
//             </p>

//             <div className="mt-4 flex items-center gap-4">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={link.name}
//                   className="rounded-full bg-[#2F5585] p-2 text-white transition hover:bg-[#2A4C77]"
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>

//         <div className="mt-10 border-t border-[#2F5585] pt-6 text-center text-xs text-white/80">
//           &copy; {new Date().getFullYear()} Tacco. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }