import { Facebook, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white text-black border-t-[3px] border-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-12">
          <div>
            <div className="text-2xl font-semibold mb-4">Tausi Initiative</div>
            <p className="text-sm leading-relaxed text-black/80">
              Inspired by Johann von Goethe&apos;s belief in nurturing human potential, we are committed to enriching
              the lives of children, youth, women, and persons with disabilities through education and technology,
              economic empowerment, mental health, and Sexual Reproductive and Health Rights programming.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/80">
              We invite you to join us in our mission through donations, volunteering, or partnership. Your
              involvement can make a big difference.
            </p>
          </div>

          <div>
            <div className="text-md font-semibold mb-4">Quick Links</div>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-[#e83e8c] transition-colors">
                Home
              </Link>
              <Link to="/about" className="block hover:text-[#e83e8c] transition-colors">
                About Us
              </Link>
              <Link to="/focus-areas" className="block hover:text-[#e83e8c] transition-colors">
                Our Focus Areas
              </Link>
              <Link to="/about#partners" className="block hover:text-[#e83e8c] transition-colors">
                Partners
              </Link>
              <Link to="/stories" className="block hover:text-[#e83e8c] transition-colors">
                Stories
              </Link>
              <Link to="/gallery" className="block hover:text-[#e83e8c] transition-colors">
                Photo Gallery
              </Link>
              <Link to="/contact" className="block hover:text-[#e83e8c] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="text-md font-semibold mb-4">Contact</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#e83e8c]" />
                <span>P.O. Box 614553 - 00200, Nairobi, Kenya</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#e83e8c]" />
                <div>
                  <a href="tel:+254791133337" className="hover:text-[#e83e8c] transition-colors">
                    0791133337
                  </a>
                  <span> / </span>
                  <a href="tel:+254704178625" className="hover:text-[#e83e8c] transition-colors">
                    0704178625
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#e83e8c]" />
                <a href="mailto:info@tausiinitiative.com" className="hover:text-[#e83e8c] transition-colors">
                  info@tausiinitiative.com
                </a>
              </div>
            </div>

            <div className="text-md font-semibold mt-6 mb-3">Follow Us</div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/TAUSI-Initiative/61569955087680/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e83e8c] transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://x.com/tausinitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e83e8c] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/104585169"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e83e8c] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@tausiinitiative?si=Str6cB3kDyglow7T"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e83e8c] transition-colors"
              >
                <Youtube />
              </a>
            </div>
          </div>

        </div>

        <div className="py-6 border-t border-black/10 text-center text-sm">
          &copy; {new Date().getFullYear()} Tausi Initiative. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
