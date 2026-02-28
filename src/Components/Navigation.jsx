import Card from './Card';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Donate from './Donate';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserMenu } from './UserMenu';

const aboutFeaturedMembers = [
  { 
      name: "Elizabeth Yotto", 
      position: "Founder", 
      image: "/members/Elizabeth Yotto.png"  // Fixed filename format
  },
  { 
      name: "Daphine Yotto", 
      position: "Team Member", 
      image: "/members/Daphine Yotto.png"  // Standardized path
  },
  { 
      name: "Teddy Omondi", 
      position: "Volunteer IT Team Lead", 
      image: "/members/Teddy Omondi.png"  // Standardized path
  },
  { 
      name: "Boke Tifanny", 
      position: "Team Member", 
      image: "/members/Boke Tifanny.png"  // Standardized path
  },
  { 
      name: "Grace Mcyoto", 
      position: "Team Member", 
      image: "/members/Grace Mcyoto.png"
  },
];

const desktopMenuContent = {
  about: {
    label: 'About',
    route: '/about',
    panelTitle: 'About Us',
    description:
      'Learn about our story, mission, and how our leadership drives long-term impact.',
    learnMore: { label: 'Learn More About Us', to: '/about' },
    sections: [
      { label: 'Our Story', to: '/about#our-story' },
      { label: 'Our Impact', to: '/about#about-impact' },
      { label: 'Committee', to: '/about#committee' },
      { label: 'Our Partners', to: '/about#partners' },
      { label: 'Mission, Vision, Values', to: '/about#about-overview' },
    ],
    featured: {
      title: 'Leadership Spotlight',
      subtitle: 'Meet Our Committee',
      description: 'Explore the people guiding Tausi Initiative forward.',
      to: '/about#committee',
    },
  },
  projects: {
    label: 'Our Work',
    route: '/projects',
    panelTitle: 'Our Work',
    description:
      'See our flagship initiatives, project milestones, and program details.',
    learnMore: { label: 'Explore Projects', to: '/projects' },
    sections: [
      { label: 'Overview', to: '/projects#project-overview' },
      { label: 'Project Details', to: '/projects#project-details' },
      { label: 'Our Causes', to: '/projects#causes' },
      { label: 'Upcoming Events', to: '/projects#events' },
    ],
    featured: {
      title: 'Featured Program',
      subtitle: 'Project Rewild',
      description: 'Wildlife rescue, rehabilitation, and habitat restoration.',
      to: '/projects#project-rewild',
    },
  },
  volunteer: {
    label: 'Volunteer',
    route: '/volunteer',
    panelTitle: 'Get Involved',
    description:
      'Join our volunteer network and choose how you want to contribute.',
    learnMore: { label: 'Become a Volunteer', to: '/volunteer' },
    sections: [
      { label: 'Personal Info', to: '/volunteer#personal-info' },
      { label: 'Contact Info', to: '/volunteer#contact-info' },
      { label: 'Location Details', to: '/volunteer#location-details' },
      { label: 'Skills & Experience', to: '/volunteer#skills-experience' },
    ],
    featured: {
      title: 'Start Here',
      subtitle: 'Volunteer Registration',
      description: 'Complete your profile and share your interests.',
      to: '/volunteer#volunteer-form',
    },
  },
  contact: {
    label: 'Contact',
    route: '/contact',
    panelTitle: 'Contact Us',
    description:
      'Reach out for partnerships, feedback, support, or general inquiries.',
    learnMore: { label: 'Open Contact Page', to: '/contact' },
    sections: [
      { label: 'Your Details', to: '/contact#your-details' },
      { label: 'Contact Details', to: '/contact#contact-details' },
      { label: 'Message', to: '/contact#message-section' },
    ],
    featured: {
      title: 'Fast Access',
      subtitle: 'Contact Form',
      description: 'Send your message directly to our team.',
      to: '/contact#contact-form',
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
  const navTextClass = isTransparent ? 'text-white' : 'text-dark';
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
              {Object.keys(desktopMenuContent).map((menuKey) => (
                <Link
                  key={menuKey}
                  to={desktopMenuContent[menuKey].route}
                  onMouseEnter={() => setActiveDesktopMenu(menuKey)}
                  className={`py-1 px-2 ${navTextClass} hover:text-[#e83e8c]`}
                >
                  {desktopMenuContent[menuKey].label}
                </Link>
              ))}
              <Link
                to="/blog"
                className={`py-1 px-2 ${navTextClass} hover:text-[#e83e8c]`}
              >
                Blog
              </Link>
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
              className="md:hidden p-2 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
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
              </svg>
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
                        <p className="text-xs text-gray-600">{aboutFeaturedMembers[aboutFeaturedIndex].credential}</p>
                      </div>
                    </div>
                    <Link
                      to="/about#committee"
                      className="inline-block mt-4 text-sm font-semibold text-[#e83e8c] hover:text-black"
                    >
                      Meet committee
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

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4">
            <div className="flex flex-col space-y-3">
              <Link to="/about" className='py-1 text-dark hover:text-[#e83e8c]'>About</Link>
              <Link to="/projects" className='py-1 text-dark hover:text-[#e83e8c]'>Our Work</Link>
              <Link to="/blog" className='py-1 text-dark hover:text-[#e83e8c]'>Blog</Link>
              <Link to="/volunteer" className='py-1 text-dark hover:text-[#e83e8c]'>Volunteer</Link>
              <Link to="/contact" className='py-1 text-dark hover:text-[#e83e8c]'>Contact</Link>

              {isAuthenticated && (
                <div className="py-1">
                  <UserMenu />
                </div>
              )}
            </div>
          </div>
        )}
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