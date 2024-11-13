// 'use client'

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Menu, X } from 'lucide-react';

// export default function FuturisticHomepage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'services', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (currentSection) setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15),transparent_50%)]" />
//         {/* Animated Lines */}
//         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" style={{ stopColor: 'rgb(45,212,191)', stopOpacity: 0.3 }} />
//               <stop offset="100%" style={{ stopColor: 'rgb(29,78,216)', stopOpacity: 0.3 }} />
//             </linearGradient>
//           </defs>
//           <motion.path
//             d="M0 700 Q 400 600, 800 750 T 1600 700"
//             fill="none"
//             stroke="url(#grad1)"
//             strokeWidth="2"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 1 }}
//             transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
//           />
//         </svg>
//       </div>

//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
//         <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold"
//           >
//             <span className="text-cyan-400">Nexus</span>
//             <span className="text-fuchsia-400">Tech</span>
//           </motion.div>
//           <div className="hidden md:flex space-x-6">
//             {['Home', 'About', 'Services', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className={`hover:text-cyan-400 transition-colors ${
//                   activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(true)}
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '100%' }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black bg-opacity-90 backdrop-blur-lg shadow-lg"
//           >
//             <div className="flex justify-end p-4">
//               <button onClick={() => setIsMenuOpen(false)}>
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="px-4 py-8">
//               {['Home', 'About', 'Services', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="block py-4 text-lg hover:text-cyan-400"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
// import { Button } from "@/components/ui/button"

// export default function FuturisticHomepage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('home')

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'services', 'contact']
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section)
//         if (element) {
//           const rect = element.getBoundingClientRect()
//           return rect.top <= 100 && rect.bottom >= 100
//         }
//         return false
//       })
//       if (currentSection) setActiveSection(currentSection)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Dynamic background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(45,212,191,0.1),transparent_50%)]" />
//         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" style={{ stopColor: 'rgb(45,212,191)', stopOpacity: 0.3 }} />
//               <stop offset="100%" style={{ stopColor: 'rgb(29,78,216)', stopOpacity: 0.3 }} />
//             </linearGradient>
//           </defs>
//           <motion.path
//             d="M0 700 Q 400 600, 800 750 T 1600 700"
//             fill="none"
//             stroke="url(#grad1)"
//             strokeWidth="2"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 1 }}
//             transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
//           />
//           <motion.path
//             d="M0 500 Q 200 450, 400 500 T 800 450 T 1200 500 T 1600 450"
//             fill="none"
//             stroke="url(#grad1)"
//             strokeWidth="2"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 1 }}
//             transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Header */}
//         <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
//           <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-2xl font-bold"
//             >
//               <span className="text-cyan-400">Nexus</span>
//               <span className="text-fuchsia-400">Tech</span>
//             </motion.div>
//             <div className="hidden md:flex space-x-6">
//               {['Home', 'About', 'Services', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className={`hover:text-cyan-400 transition-colors ${
//                     activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
//                   }`}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//             {/* <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Open menu</span>
//             </Button> */}
//           </nav>
//         </header>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: '100%' }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: '100%' }}
//               transition={{ type: 'tween', duration: 0.3 }}
//               className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black bg-opacity-90 backdrop-blur-lg shadow-lg"
//             >
//               <div className="flex justify-end p-4">
//                 {/* <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <X className="h-6 w-6" />
//                   <span className="sr-only">Close menu</span>
//                 </Button> */}
//               </div>
//               <nav className="px-4 py-8">
//                 {['Home', 'About', 'Services', 'Contact'].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="block py-4 text-lg hover:text-cyan-400 transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Sections */}
//         <section id="home" className="min-h-screen flex items-center justify-center">
//           <div className="text-center">
//             <motion.h1 
//               initial={{ opacity: 0, x: '100%' }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: '100%' }}
//               transition={{ type: 'tween', duration: 0.2 }}
//               className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-500"
//               >Welcome to the Future
//             </motion.h1>
//           </div>
//         </section>
        
//         <section id="about" className="min-h-screen flex items-center justify-center">/* Content */</section>
//         <section id="services" className="min-h-screen flex items-center justify-center">/* Content */</section>
//         <section id="contact" className="min-h-screen flex items-center justify-center">/* Content */</section>
//       </div>
//     </div>
//   )
// }





export default function FuturisticHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(45,212,191,0.1),transparent_50%)]" />
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(45,212,191)', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(29,78,216)', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 700 Q 400 600, 800 750 T 1600 700"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.path
            d="M0 500 Q 200 450, 400 500 T 800 450 T 1200 500 T 1600 450"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              <span className="text-cyan-400">Nexus</span>
              <span className="text-fuchsia-400">Tech</span>
            </motion.div>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-20 pb-24"> {/* Added padding to top and bottom to account for fixed header and nav */}
          {/* Hero section */}
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-square max-w-md mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse" />
                  <img
                    src="/WhatsApp Image 2024-08-04 at 21.38.58_e016dc15.jpg"
                    alt="Professional headshot"
                    className="relative rounded-2xl object-cover w-full h-full"
                  />
                </motion.div>
                <div className="text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-500"
                  >
                    Welcome to the Future
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-300 mb-8 max-w-2xl"
                  >
                    Experience cutting-edge technology and innovative solutions
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {/* <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      Explore Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* About section */}
          <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">About Us</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    At NexusTech, we're pioneering the future of technology. Our team of experts is dedicated to creating innovative solutions that push the boundaries of what's possible.
                  </p>
                  <p className="text-lg text-gray-300">
                    From artificial intelligence to quantum computing, we're at the forefront of technological advancements, shaping the world of tomorrow.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-lg shadow-lg transform rotate-3"></div>
                  <div className="absolute inset-0 w-full h-64 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services section */}
          <section id="services" className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-400">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'AI Solutions', icon: '🤖', description: 'Cutting-edge artificial intelligence for your business needs' },
                  { title: 'Quantum Computing', icon: '⚛️', description: 'Harnessing the power of quantum mechanics for unprecedented computing capabilities' },
                  { title: 'Cybersecurity', icon: '🛡️', description: 'Advanced protection against evolving digital threats' },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact section */}
          <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Get in Touch</h2>
              <div className="max-w-md mx-auto">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" required></textarea>
                  </div>
                  <div>
                    {/* <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      Send Message
                    </Button> */}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Navigation menu */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md py-4">
          <div className="container mx-auto px-4">
            <ul className="flex justify-center space-x-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-cyan-400 transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}