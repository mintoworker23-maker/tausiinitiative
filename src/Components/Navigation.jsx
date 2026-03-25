import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from './Card';
import Donate from './Donate';
import Login from './Login';
import { UserMenu } from './UserMenu';

const aboutFeaturedMembers = [
  {
    name: 'Elizabeth Yotto',
    position: 'Founder',
    image: '/members/Elizabeth Yotto.png',
  },
  {
    name: 'Daphine Yotto',
    position: 'Team Member',
    image: '/members/Daphine Yotto.png',
  },
  {
    name: 'Teddy Omondi',
    position: 'Volunteer IT Team Lead',
    image: '/members/Teddy Omondi.png',
  },
  {
    name: 'Boke Tifanny',
    position: 'Team Member',
    image: '/members/Boke Tifanny.png',
  },
  {
    name: 'Grace Mcyoto',
    position: 'Team Member',
    image: '/members/Grace Mcyoto.png',
  },
];

const desktopMenuContent = {
  about: {
    label: 'About Us',
    route: '/about',
    panelTitle: 'About Us',
    description:
      'Learn who Tausi Initiative is, why we exist, and how our team is building long-term community impact.',
    learnMore: { label: 'Explore About Us', to: '/about' },
    sections: [
      { label: 'About Us', to: '/about#our-story' },
      { label: 'Strategic Objectives', to: '/about#about-impact' },
      { label: 'Our Team', to: '/about#our-team' },
      { label: 'Partners', to: '/about#partners' },
      { label: 'Mission, Vision, Values', to: '/about#about-overview' },
    ],
    featured: {
      title: 'Featured Team',
      subtitle: 'Meet Our Team',
      description: 'Discover the people driving Tausi Initiative forward.',
      to: '/about#our-team',
    },
  },
  projects: {
    label: 'Projects',
    route: '/projects',
    panelTitle: 'Projects',
    description:
      'Explore our current project portfolio, led by Tausi Queens and the Crown Scholarship Fund vision.',
    learnMore: { label: 'View All Projects', to: '/projects' },
    sections: [
      { label: 'Overview', to: '/projects#project-overview' },
      { label: 'Tausi Queens', to: '/projects/tausi-queens' },
      { label: 'Crown Scholarship Fund', to: '/projects/crown-scholarship' },
    ],
    featured: {
      title: 'Featured Project',
      subtitle: 'Tausi Queens',
      description: 'Our flagship girls empowerment project centered on mentorship, dignity, leadership, and SRHR knowledge.',
      to: '/projects/tausi-queens',
    },
  },
  focusAreas: {
    label: 'Our Focus Areas',
    route: '/focus-areas',
    panelTitle: 'Our Focus Areas',
    description:
      'Explore the three focus areas that guide Tausi Initiative programs and impact delivery.',
    learnMore: { label: 'View All Focus Areas', to: '/focus-areas' },
    sections: [
      { label: 'Overview', to: '/focus-areas#project-overview' },
      { label: 'SRHR and Mental Health', to: '/projects/tausi-queens' },
      { label: 'Education and Technology', to: '/projects/education-technology' },
      { label: 'Economic Empowerment (Financial Literacy)', to: '/projects/economic-empowerment' },
    ],
    featured: {
      title: 'Featured Focus Area',
      subtitle: 'SRHR and Mental Health',
      description: 'A key area delivered through Tausi Queens with mentorship, dignity support, and leadership development.',
      to: '/projects/tausi-queens',
    },
  },
  stories: {
    label: 'Stories',
    route: '/stories',
    panelTitle: 'Stories',
    description:
      'Read story highlights from Tausi Initiative events and browse the photo gallery collections.',
    learnMore: { label: 'Open Stories Page', to: '/stories' },
    sections: [
      { label: 'Story Highlights', to: '/stories' },
      { label: 'Photo Gallery', to: '/gallery' },
    ],
    featured: {
      title: 'Featured Section',
      subtitle: 'Photo Gallery',
      description: 'Browse highlights from mentorship sessions, events, and community activities.',
      to: '/gallery',
    },
  },
  volunteer: {
    label: 'Volunteer',
    route: '/volunteer',
    panelTitle: 'Volunteer',
    description:
      'Join our volunteer network and choose how you want to support Tausi Initiative.',
    learnMore: { label: 'Become a Volunteer', to: '/volunteer' },
    sections: [
      { label: 'Personal Info', to: '/volunteer#personal-info' },
      { label: 'Contact Info', to: '/volunteer#contact-info' },
      { label: 'Location Details', to: '/volunteer#location-details' },
      { label: 'Skills & Experience', to: '/volunteer#skills-experience' },
    ],
    featured: {
      title: 'Get Involved',
      subtitle: 'Volunteer Form',
      description: 'Share your details, interests, and how you would like to help.',
      to: '/volunteer#volunteer-form',
    },
  },
  contact: {
    label: 'Contact',
    route: '/contact',
    panelTitle: 'Contact',
    description:
      'Reach out for partnerships, school collaborations, donations, or general support.',
    learnMore: { label: 'Open Contact Page', to: '/contact' },
    sections: [
      { label: 'Address & Phone', to: '/contact#contact-details' },
      { label: 'Email Us', to: '/contact#email-us' },
      { label: 'Get in Touch', to: '/contact#contact-form' },
    ],
    featured: {
      title: 'Fast Access',
      subtitle: 'Contact Form',
      description: 'Send a direct message to the Tausi Initiative team.',
      to: '/contact#contact-form',
    },
  },
};

const navigationItems = [
  { label: 'About Us', to: '/about', menu: 'about' },
  { label: 'Projects', to: '/projects', menu: 'projects' },
  { label: 'Our Focus Areas', to: '/focus-areas', menu: 'focusAreas' },
  { label: 'Stories', to: '/stories', menu: 'stories' },
  { label: 'Volunteer', to: '/volunteer', menu: 'volunteer' },
  { label: 'Contact', to: '/contact', menu: 'contact' },
];

const mobileMenuContainerVariants = {
  closed: {
    opacity: 0,
    height: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
      when: 'afterChildren',
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

const mobileMenuItemVariants = {
  closed: {
    opacity: 0,
    y: -8,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Navigation = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDonateVisible, setIsDonateVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [aboutFeaturedIndex, setAboutFeaturedIndex] = useState(0);
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      setIsPopupVisible(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDesktopMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (activeDesktopMenu !== 'about') return;
    setAboutFeaturedIndex((prev) => {
      if (aboutFeaturedMembers.length <= 1) return 0;
      let next = prev;
      while (next === prev) {
        next = Math.floor(Math.random() * aboutFeaturedMembers.length);
      }
      return next;
    });
  }, [activeDesktopMenu]);

  const toggleDonatePopup = () => {
    setIsDonateVisible(!isDonateVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeLoginPopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (location.state?.openLogin && !isAuthenticated) {
      setIsPopupVisible(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, isAuthenticated]);

  useEffect(() => {
    if (location.state?.openDonate) {
      setIsDonateVisible(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && isAtTop;
  const navTextClass = isTransparent ? 'text-white' : 'text-black';
  const activeMenu = activeDesktopMenu ? desktopMenuContent[activeDesktopMenu] : null;

  return (
    <>
      <nav
        onMouseLeave={() => setActiveDesktopMenu(null)}
        className={`${isHomePage ? 'fixed' : 'sticky'} top-0 left-0 z-40 w-full px-4 md:px-8 transition-all duration-300 ${
          isTransparent ? 'bg-transparent border-b-0' : 'bg-white border-b-4 border-[#e83e8c]'
        }`}
      >
        <div className='flex justify-between items-center gap-2 p-3'>
          <Link to="/" className='flex items-center gap-2 px-0 md:px-1 hover:opacity-90'>
            <div className='flex items-center min-w-[170px] min-h-[70px]'>
              <img src="/favicon.png" alt="Tausi Initiative Logo" className="w-[70px] h-auto my-auto object-contain" />
              <p className={`text-lg font-bold ${navTextClass} hidden md:block`}>Tausi Initiative</p>
            </div>
          </Link>

          <div className='hidden md:block'>
            <div className='flex gap-2 pt-2'>
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onMouseEnter={() => setActiveDesktopMenu(item.menu || null)}
                  className={`py-1 px-2 ${navTextClass} hover:text-[#e83e8c] whitespace-nowrap`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <button onClick={toggleDonatePopup} className='py-1 px-3 md:py-2 md:px-6 text-sm md:text-base'>
                Donate
              </button>
            </Card>

            {isAuthenticated && (
              <div className="hidden md:block">
                <UserMenu />
              </div>
            )}

            <button
              type="button"
              className="md:hidden p-2 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <motion.svg
                animate={{ rotate: isMobileMenuOpen ? 90 : 0, scale: isMobileMenuOpen ? 1.05 : 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className={`w-6 h-6 ${navTextClass}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        <div
          className={`hidden md:block overflow-hidden bg-white px-2 transition-all duration-300 ease-out ${
            activeMenu
              ? 'max-h-[420px] opacity-100 translate-y-0 border-t border-black/10 py-6'
              : 'max-h-0 opacity-0 -translate-y-2 border-t-0 py-0 pointer-events-none'
          }`}
        >
          {activeMenu && (
            <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
              <div className="pr-4">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{activeMenu.panelTitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{activeMenu.description}</p>
                <Link
                  to={activeMenu.learnMore.to}
                  className="inline-block mt-4 text-sm font-semibold text-[#e83e8c] hover:text-black"
                >
                  {activeMenu.learnMore.label}
                </Link>
              </div>

              <div className="px-2">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Sections</p>
                <div className="space-y-2">
                  {activeMenu.sections.map((section) => (
                    <Link
                      key={section.to}
                      to={section.to}
                      className="block text-sm text-black hover:text-[#e83e8c]"
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pl-2">
                {activeDesktopMenu === 'about' ? (
                  <div className="h-full border border-black/10 rounded-md p-4 bg-slate-50">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Featured Leadership</p>
                    <div className="flex items-center gap-3 border border-black/10 rounded-md bg-white p-3">
                      <img
                        src={aboutFeaturedMembers[aboutFeaturedIndex].image}
                        alt={aboutFeaturedMembers[aboutFeaturedIndex].name}
                        className="w-16 h-16 rounded-md object-cover border border-black/10"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-black truncate">{aboutFeaturedMembers[aboutFeaturedIndex].name}</p>
                        <p className="text-xs text-gray-600">{aboutFeaturedMembers[aboutFeaturedIndex].position}</p>
                      </div>
                    </div>
                    <Link
                      to="/about#our-team"
                      className="inline-block mt-4 text-sm font-semibold text-[#e83e8c] hover:text-black"
                    >
                      Meet our team
                    </Link>
                  </div>
                ) : (
                  <div className="h-full border border-black/10 rounded-md p-4 bg-slate-50">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{activeMenu.featured.title}</p>
                    <h3 className="text-lg font-bold text-black">{activeMenu.featured.subtitle}</h3>
                    <p className="text-sm text-gray-700 mt-2">{activeMenu.featured.description}</p>
                    <Link
                      to={activeMenu.featured.to}
                      className="inline-block mt-4 text-sm font-semibold text-[#e83e8c] hover:text-black"
                    >
                      Open section
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-navigation"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuContainerVariants}
              className="md:hidden overflow-hidden bg-white px-4 border-t border-black/10"
            >
              <div className="flex flex-col space-y-3 py-3">
                {navigationItems.map((item) => (
                  <motion.div key={item.label} variants={mobileMenuItemVariants}>
                    <Link to={item.to} className='block py-1 text-black hover:text-[#e83e8c]'>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {isAuthenticated && (
                  <motion.div variants={mobileMenuItemVariants} className="py-1">
                    <UserMenu />
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <Card backgroundColor="bg-white" textColor="text-black">
              <div className="relative p-2">
                <button
                  onClick={closeLoginPopup}
                  className="absolute top-2 right-2 hover:bg-gray-100 p-1"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="min-w-[320px]">
                  <Login onClose={closeLoginPopup} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {isDonateVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative p-2 w-full max-w-2xl">
            <Donate onClose={toggleDonatePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
