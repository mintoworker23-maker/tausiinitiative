import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { AnimateOnScroll } from "./AnimateonScroll";
import { motion } from "framer-motion";

const About = () => {
  const members = [
    {
      name: "Elizabeth Yotto",
      position: "Founder",
      image: "/members/Elizabeth Yotto.png"
    },
    {
      name: "Daphine Yotto",
      position: "Team Member",
      image: "/members/Daphine Yotto.png"
    },
    {
      name: "Teddy Omondi",
      position: "IT team Member",
      image: "/members/Teddy Omondi.png"
    },
    {
      name: "Boke Tifanny",
      position: "Team Member",
      image: "/members/Boke Tifanny.png"
    },
    {
      name: "Grace Mcyoto",
      position: "Team Member",
      image: "/members/Grace Mcyoto.png"
    },
  ];

  const strategicObjectives = [
    'Expand access to quality education, learning support, and digital opportunity for vulnerable children and youth.',
    'Socially and economically empower women and young people through practical skills, entrepreneurship, and mentorship.',
    'Create safe spaces that strengthen dignity, confidence, mental well-being, and Sexual and Reproductive Health awareness.',
    'Build strong partnerships that enable communities to contribute meaningfully toward the 2030 Sustainable Development Goals.'
  ];

  const partnerSchools = [
    { name: "Tender Heart Educational Center" },
    { name: "Mathare Child Development Center (MCDC)" },
    { name: "Showers Children Home" },
  ];

  const partners = [
    { name: "Yes Foundation" },
    { name: "Green Horizon Trust" },
    { name: "Community Impact Hub" },
    { name: "Planet Forward Foundation" },
    { name: "Youth Build Collective" },
  ];

  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [activeSchoolIndex, setActiveSchoolIndex] = useState(0);
  const partnerCarouselRef = useRef(null);
  const schoolCarouselRef = useRef(null);
  const partnerCardRefs = useRef([]);
  const schoolCardRefs = useRef([]);

  const scrollToActiveCard = (containerRef, cardsRef, activeIndex) => {
    const container = containerRef.current;
    const activeCard = cardsRef.current[activeIndex];

    if (!container || !activeCard) return;

    const targetLeft = activeCard.offsetLeft - (container.clientWidth - activeCard.clientWidth) / 2;
    container.scrollTo({ left: Math.max(targetLeft, 0), behavior: 'smooth' });
  };

  useEffect(() => {
    if (partners.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % partners.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [partners.length]);

  useEffect(() => {
    if (partnerSchools.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSchoolIndex((prev) => (prev + 1) % partnerSchools.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [partnerSchools.length]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      scrollToActiveCard(partnerCarouselRef, partnerCardRefs, activePartnerIndex);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activePartnerIndex]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      scrollToActiveCard(schoolCarouselRef, schoolCardRefs, activeSchoolIndex);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeSchoolIndex]);

  return (
    <div className="w-full min-h-screen">
      <div id="about-overview" className="container mx-auto py-10">
        <div className="flex w-full">
          <div className="flex justify-start items-start px-4">
            <AnimateOnScroll animation="slideIn">
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className="text-4xl font-bold px-6 py-2 text-black">About Tausi Initiative</div>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll animation="slideIn">
          <div className="flex flex-col md:flex-row gap-6 py-4 px-4 w-full">
            <div className="flex-1">
              <Card backgroundColor="bg-white" textColor="text-black">
                <div className="p-4 flex flex-col h-full">
                  <div id="our-story" className="text-2xl font-bold mb-4 text-black">About Us</div>
                  <div className="text-base mb-4 text-black">
                    Making the world a better place.
                  </div>
                  <div className="text-base text-black">
                    TAUSI Initiative is a nonprofit organization founded in 2023 with the aim of socially and
                    economically empowering vulnerable and marginalized individuals in local communities.
                    The organization strives to achieve a society where children, youth, women, and persons
                    with disabilities have a chance to contribute toward attaining the 2030 Sustainable
                    Development Goals.
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex-1">
              <Card backgroundColor="bg-white" textColor="text-black">
                <div className="p-4 flex flex-col h-full">
                  <div id="about-impact" className="text-2xl font-bold mb-4 text-black">Strategic Objectives</div>
                  <div className="space-y-4">
                    {strategicObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="text-black font-bold">•</div>
                        <div className="text-black">{objective}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div className="px-4 py-4 w-full">
            <Card backgroundColor="bg-white" textColor="text-black">
              <div className="p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div>
                    <div className="text-xl md:text-2xl font-bold mb-3 text-black">Our Mission</div>
                    <div className="text-sm md:text-base text-black">
                      To create an enabling environment where vulnerable individuals can harness their potential,
                      maximize their abilities, and positively impact both their personal lives and community
                      development.
                    </div>
                  </div>

                  <div>
                    <div className="text-xl md:text-2xl font-bold mb-3 text-black">Our Vision</div>
                    <div className="text-sm md:text-base text-black">
                      A society where children, youth, women, and persons with disabilities are empowered to
                      thrive and contribute meaningfully toward the 2030 Sustainable Development Goals.
                    </div>
                  </div>

                  <div>
                    <div className="text-xl md:text-2xl font-bold mb-3 text-black">Core Values</div>
                    <div className="text-sm md:text-base text-black">
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="mb-1">Diversity</li>
                        <li className="mb-1">Resilience</li>
                        <li className="mb-1">Transparency & Accountability</li>
                        <li className="mb-1">Professionalism</li>
                        <li className="mb-1">Collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimateOnScroll>
      </div>

      <div id="our-team" className='bg-slate-100 container mx-auto'>
        <AnimateOnScroll animation="slideIn">
          <div className='flex w-full'>
            <div className="flex justify-start items-start px-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 lg:px-6">
                  Our Team
                </div>
              </Card>
            </div>
          </div>
        </AnimateOnScroll>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-5 mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-10 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-10 py-4 sm:py-6 md:py-8 lg:py-10'>
          {members.map((item, index) => (
            <AnimateOnScroll
              key={index}
              animation="fadeUp"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex justify-start w-full"
              >
                <Card backgroundColor="bg-white" textColor="text-black" className="w-full">
                  <div>
                    <div className="w-full h-44 sm:h-52 md:h-56 lg:h-60 shadow-lg border-b-2 border-green-700 overflow-hidden bg-gradient-to-b from-green-100 to-green-200 relative">
                      <img
                        src={item.image}
                        alt={`${item.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-center">{item.name}</div>
                      <div className="text-xs sm:text-sm md:text-base text-center text-gray-600">{item.position}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <div id="partners" className="bg-white py-12 md:py-16 container mx-auto">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <AnimateOnScroll animation="slideIn">
            <div className="flex justify-start items-start px-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="inline-block">
                <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 lg:px-6">Our Partners</div>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8 border-y-2 border-black/10 py-6">
            <div className="w-full">
              <div className="text-xl font-bold text-black px-1">Partners</div>

              <div ref={partnerCarouselRef} className="mt-4 overflow-x-auto pb-3">
                <div
                  className="flex flex-nowrap gap-3 w-max"
                  style={{ paddingLeft: 'calc(50% - 130px)', paddingRight: 'calc(50% - 130px)' }}
                >
                {partners.map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                      ref={(node) => {
                        partnerCardRefs.current[index] = node;
                      }}
                      animate={{
                        opacity: index === activePartnerIndex ? 1 : 0.45,
                        scale: index === activePartnerIndex ? 1.02 : 0.98
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-[260px] h-20 md:h-24 border-2 border-black rounded-md flex items-center justify-center px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] ${
                      index === activePartnerIndex
                          ? "bg-[#f8d8e8]"
                        : "bg-slate-100 grayscale"
                    }`}
                  >
                      <span className="text-sm md:text-base font-semibold text-black text-center">{partner.name}</span>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="text-xl font-bold text-black px-1">Partner Schools</div>

              <div ref={schoolCarouselRef} className="mt-4 overflow-x-auto pb-3">
                <div
                  className="flex flex-nowrap gap-3 w-max"
                  style={{ paddingLeft: 'calc(50% - 130px)', paddingRight: 'calc(50% - 130px)' }}
                >
                {partnerSchools.map((school, index) => (
                  <motion.div
                    key={`${school.name}-${index}`}
                      ref={(node) => {
                        schoolCardRefs.current[index] = node;
                      }}
                      animate={{
                        opacity: index === activeSchoolIndex ? 1 : 0.45,
                        scale: index === activeSchoolIndex ? 1.02 : 0.98
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-[260px] h-20 md:h-24 border-2 border-black rounded-md flex items-center justify-center px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] ${
                      index === activeSchoolIndex
                          ? "bg-[#f8d8e8]"
                        : "bg-slate-100 grayscale"
                    }`}
                  >
                      <span className="text-sm md:text-base font-semibold text-black text-center">{school.name}</span>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
