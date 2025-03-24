import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, Mail, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Add custom X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const App: FC = () => {
  const socialLinks = [
    {
      icon: GithubIcon,
      url: "https://github.com/Chayan-Samanta",
      label: "GitHub",
      className: "hover:text-[#333] hover:bg-white"
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/chayan-samanta-687b85247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      className: "hover:text-white hover:bg-[#0A66C2]"
    },
    {
      icon: XIcon,
      url: "https://x.com/S87907949Chayan?t=BsfyEsiv_fz8_3TJJ3br5g&s=09",
      label: "X (Twitter)",
      className: "hover:text-white hover:bg-black"
    },
    {
      icon: Mail,
      url: "mailto:chayansamanta06@gmail.com",
      label: "Email",
      className: "hover:text-white hover:bg-[#EA4335]"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="mt-auto border-t backdrop-blur-lg border-neutral-800 bg-neutral-900/50">
        <div className="px-4 py-8 mx-auto max-w-6xl">
          <div className="grid gap-8 items-center md:grid-cols-3">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold font-syne gradient-text">
                CS
              </h3>
              <p className="text-sm text-neutral-400">
                © {new Date().getFullYear()} Chayan Samanta.<br />
                All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.icon !== Mail ? "_blank" : undefined}
                  rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    p-2 rounded-full 
                    border border-neutral-800
                    transition-all duration-300
                    ${link.className}
                    hover:border-transparent
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(link.url, link.icon !== Mail ? "_blank" : "_self");
                  }}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Made with Love */}
            <div className="text-center md:text-right">
              <motion.div 
                className="flex flex-col gap-1 items-center text-sm text-neutral-400 md:items-end"
                whileHover={{ scale: 1.05 }}
              >
                <p className="flex gap-1 items-center">
                  Made with 
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                </p>
                <p className="text-neutral-500">
                  React, Tailwind CSS, Vite,
                </p>
                <p className="text-neutral-500">
                  And Help Of AI
                </p>
                <p>in Kolkata, India</p>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
