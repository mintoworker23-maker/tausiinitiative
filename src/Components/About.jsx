import React from 'react'; // Remove useState as it's not needed anymore
import Card from './Card';
import { AnimateOnScroll } from "./AnimateonScroll";
import { motion } from "framer-motion";

const About = () => {
    // Committee members with standardized image paths
    const members = [
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

    const partners = [
        { name: "Yes Foundation" },
        { name: "Green Horizon Trust" },
        { name: "Wildlife Care Network" },
        { name: "Community Impact Hub" },
        { name: "Planet Forward Foundation" },
        { name: "Youth Build Collective" },
    ];

  return (
    <div className="w-full min-h-screen">
        <div id="about-overview" className="container mx-auto py-10">
            <div className="flex w-full">
                <div className="flex justify-start items-start px-4">
            <AnimateOnScroll animation="slideIn">
                <Card backgroundColor="bg-[#3BDE3B]" textColor="text-black">
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
                        <div id="our-story" className="text-2xl font-bold mb-4 text-black">Our Story</div>
                        <div className="text-base mb-4 text-black">
                            The TAUSI Initiative is a transformative force of hope and resilience, committed to empowering individuals to unlock their potential and enrich their communities. We believe that with the right opportunities and support, every person can thrive and contribute meaningfully to the development of society.
                        </div>
                        {/*<div className="text-base text-black">
                            The TAUSI Initiative is a transformative force of hope and resilience, committed to empowering individuals to unlock their potential and enrich their communities. We believe that with the right opportunities and support, every person can thrive and contribute meaningfully to the development of society.
                        </div>*/}
                        </div>
                    </Card>
                </div>
                
                <div className="flex-1">
                    <Card backgroundColor="bg-white" textColor="text-black">
                        <div className="p-4 flex flex-col h-full">
                        <div id="about-impact" className="text-2xl font-bold mb-4 text-black">Our Impact</div>
                        <div className="space-y-4">
                            {[
                            'Rescued over 1,000 animals',
                            'Planted more than 5,000 trees',
                            'Active in multiple cities',
                            'Growing community of volunteers'
                            ].map((impact, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <div className="text-black">✓</div>
                                <div className="text-black">{impact}</div>
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
                          To create an enabling environment where vulnerable individuals can harness their potential, maximize their abilities, and positively impact both their personal lives and community development.
                        </div>
                      </div>

                      <div>
                        <div className="text-xl md:text-2xl font-bold mb-3 text-black">Our Vision</div>
                        <div className="text-sm md:text-base text-black">
                          A world where everyone, regardless of background, is empowered to thrive and contribute meaningfully to their communities. At TAUSI, we celebrate the unique beauty, strength, and dignity of every individual.
                        </div>
                      </div>

                      <div>
                        <div className="text-xl md:text-2xl font-bold mb-3 text-black">Core Values</div>
                        <div className="text-sm md:text-base text-black">
                          <ol>
                            <li className="mb-1">Diversity</li>
                            <li className="mb-1">Resilience</li>
                            <li className="mb-1">Transparency & Accountability</li>
                            <li className="mb-1">Professionalism</li>
                            <li className="mb-1">Collaboration</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimateOnScroll>
        </div>
        <div id="committee" className='bg-slate-100 container mx-auto'>
            <AnimateOnScroll animation="slideIn">
              <div className='flex w-full'>
                <div className="flex justify-start items-start px-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                  <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 lg:px-6">Meet Our Committee</div>
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

              <div className="overflow-hidden border-y-2 border-black/10 py-4">
                <motion.div
                  className="flex w-max gap-4 md:gap-6"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                >
                  {[...partners, ...partners].map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="min-w-[190px] md:min-w-[240px] h-20 md:h-24 border-2 border-black rounded-md bg-slate-50 flex items-center justify-center px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
                    >
                      <span className="text-sm md:text-base font-bold text-black text-center">{partner.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default About;