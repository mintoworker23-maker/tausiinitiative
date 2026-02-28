import { Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-white text-black'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12'>
          <div>
            <div className='text-xl font-semibold mb-4'>Tausi Initiative</div>
            <div><a href="https://maps.app.goo.gl/8732154215421542" target="_blank" rel="noopener noreferrer">Showers Education Center, Umoja III, Off Kangundo Road, near Kiyonga Girls Secondary School, Dandora</a></div>
          </div>
          <div>
            <div className='text-md font-semibold mb-4'>Quick Links</div>
            <div className='space-y-2'>
              <Link to='/about' className='block hover:text-gray-300 cursor-pointer transition-colors'>
                About Us
              </Link>
              <Link to='/projects' className='block hover:text-gray-300 cursor-pointer transition-colors'>
                Our Work
              </Link>
              <Link to='/blog' className='block hover:text-gray-300 cursor-pointer transition-colors'>
                Blog
              </Link>
              <Link to='/volunteer' className='block hover:text-gray-300 cursor-pointer transition-colors'>
                Volunteer
              </Link>
              <Link to='/' state={{ openLogin: true }} className='block hover:text-gray-300 cursor-pointer transition-colors'>
                Login
              </Link>
              <Link to='/contact' className='block hover:text-gray-300 cursor-pointer transition-colors'>
                Contact
              </Link>
            </div>
          </div>
          <div>
            <div className='text-md font-semibold mb-4'>Connect</div>
            <div className='flex gap-4'>
              <div className='hover:text-gray-300 cursor-pointer'>
                <a href='https://www.facebook.com/people/TAUSI-Initiative/61569955087680/' target='_blank' rel='noopener noreferrer'>
                  <Facebook />
                </a>
              </div>
              <div className='hover:text-gray-300 cursor-pointer'>
                <a href='https://x.com/tausinitiative' target='_blank' rel='noopener noreferrer'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7' viewBox='0 0 50 50' fill='currentColor'>
                    <path d='M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z' />
                  </svg>
                </a>
              </div>
              <div className='text-black hover:text-gray-300 cursor-pointer'>
                <a href='https://linkedin.com/company/104585169' target='_blank' rel='noopener noreferrer' fill='currentColor'>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
                </a>
              </div>
              <div className='hover:text-gray-300 cursor-pointer'>
                <a href='https://youtube.com/@tausiinitiative?si=Str6cB3kDyglow7T' target='_blank' rel='noopener noreferrer'>
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className='text-md font-semibold mb-4'>Contact</div>
            <div className='space-y-2'>
              <div>Email: 
                <a href='mailto:info@tausiinitiative.com'> info@tausiinitiative.com</a>
              </div>
              <div>Phone: 
                <a href='tel:+254704178625'> +254704178625</a>
              </div>
            </div>
          </div>
        </div>
        <div className='py-6 border-t border-slate-100/30 text-center text-sm'>
          &copy; 2025 Tausi Initiative. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;