import { TreePine, Heart, UsersRound } from 'lucide-react';
import Card from "./Card";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateonScroll";
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';
// import bg from '../../public/bg.jpg';
const bg = '/bg.jpg';
const impactData = [
  { number: '1000', text: 'People Impacted', color: 'text-[#3BDE3B]' },
  { number: '30', text: 'Schools Reached', color: 'text-blue-500' },
  { number: '50', text: 'Communities Served', color: 'text-[#3BDE3B]' },
  { number: '10', text: 'Volunteers', color: 'text-blue-500' }
];

const blogPosts = [
  {
    id: 1,
    title: "Building Confidence Through Youth Mentorship",
    preview: "We share practical mentorship sessions helping young people build purpose, confidence, and direction.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Women-Led Enterprises Creating Local Change",
    preview: "A look at how entrepreneurship coaching is helping women create stable income and stronger households.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "Recent: New Learning Hub Opens for Community Training",
    preview: "Our most recent initiative launched a training hub focused on digital literacy and employable skills.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1800&q=80",
  },
];

const HomePage = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const navigate = useNavigate();

  // Backend coldstart function
  const initializeBackend = async () => {
    try {
      // Send a request to backend health/ping endpoint
       // Using environment variable for backend URL
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ping`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Backend initialized:', response.ok);
    } catch (error) {
      // Silent fail - we don't want to interrupt user experience
      // if backend is down or unreachable
      console.log('Backend coldstart attempt:', error.message);
    }
  };

  // Send backend initialization request on component mount
  useEffect(() => {
    // Immediately trigger backend warmup
    initializeBackend();
    
    // You could also add a retry mechanism if needed
    // const retryTimer = setTimeout(() => {
    //   initializeBackend();
    // }, 5000);
    // return () => clearTimeout(retryTimer);
  }, []);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 800);
    const card1Timer = setTimeout(() => setShowCard1(true), 900);
    const card2Timer = setTimeout(() => setShowCard2(true), 910);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(card1Timer);
      clearTimeout(card2Timer);
    };
  }, []);

  const handleVolunteerClick = () => {
    navigate('/volunteer');
  };

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-between items-center min-h-screen w-full"
      >
        <div style={{ backgroundImage: `url(${bg})` }} className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0" >
        <div className="absolute inset-0 bg-black/25 z-0" />


        <div className="relative flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto px-4 z-10 pt-44">
            <div className={`transform transition-all duration-1000 opacity-0 ${showTitle ? 'opacity-100' : ''}`}>
                <div className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-bold px-2 md:px-6 py-4 md:py-7">Uplifting Lives Together</div>
            </div>
            <div className={`hidden md:block px-4 transform transition-all duration-1000 opacity-0 ${showCard1 ? 'opacity-100' : ''}`}>
                <div className="py-3 md:py-5 text-white px-2 md:px-4 w-full md:w-[700px] text-base md:text-xl text-center">We are Tausi Initiative — uplifting lives through compassion, community, and real impact.
Join us in building a future where dignity, care, and hope are for everyone.</div>
            </div>
            <div className={`mt-3 md:mt-5 transform transition-all duration-1000 opacity-0 ${showCard2 ? 'opacity-100' : ''}`}>
                <Card backgroundColor="bg-[#e83e8c] hover:bg-orange-600 transition-colors" textColor="text-black">
                    <button 
                      onClick={handleVolunteerClick}
                      className="py-3 md:py-4 px-6 md:px-10 text-base md:text-lg"
                    >
                      Join Our Mission
                    </button>
                </Card>
            </div>
        </div>
        </div>
      </motion.div>

      {/* Focus Areas Section */}
      <div className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="slideIn">
            <div className="inline-block mb-10">
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className='py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap'>Our Focus Areas</div>
              </Card>
            </div>
          </AnimateOnScroll>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <AnimateOnScroll animation="fadeUp">
              <div className="">
                <Card backgroundColor="bg-white" textColor="text-black">
                    <div className="p-6">
                        <div className=''><TreePine size={50} color="#00c700" strokeWidth={3.5} absoluteStrokeWidth/></div>
                        <div className='text-2xl font-semibold py-4'>Sexual Health and Mental Well-Being</div>
                        <div className=''>We promote health awareness, from mental health to Sexual and Reproductive Health and Rights</div>
                    </div>
                </Card>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp">
              <div className="">
                <Card backgroundColor="bg-white" textColor="text-black">
                    <div className="p-6">
                        <div className=''><Heart size={50} color="#ff0000" strokeWidth={3.5} absoluteStrokeWidth/></div>
                        <div className='text-2xl font-semibold py-4'>Economic Empowerment</div>
                        <div className=''>We fight poverty by equipping youth and women with entrepreneurial and financial literacy skills.</div>
                    </div>
                </Card>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp">
              <div className="">
                <Card backgroundColor="bg-white" textColor="text-black">
                    <div className="p-6">
                        <div className=''><UsersRound size={50} color="#4268ff" strokeWidth={3.5} absoluteStrokeWidth/></div>
                        <div className='text-2xl font-semibold py-4'>Education and Technology</div>
                        <div className=''>We recognize education as a catalyst for transformation.</div>
                    </div>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className='bg-slate-100 py-12 md:py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <AnimateOnScroll animation="slideIn">
            <div className='inline-block mb-10'>
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className='py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap'>Achievable Goals</div>
              </Card>
            </div>
          </AnimateOnScroll>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <AnimateOnScroll animation="scale">
              <div className='flex flex-col justify-center items-center bg-white w-full h-32 rounded-xl border-dashed border-green-400 border-2 text-center'>
                  <div className='text-2xl font-bold p-2'>
                    <AnimatedCounter end={1000000} /> People
                  </div>
                  <div className='text-sm p-2'>Target People to be inspired</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scale">
              <div className='flex flex-col justify-center items-center bg-white w-full h-32 rounded-xl border-dashed border-green-400 border-2 text-center'>
                  <div className='text-2xl font-bold p-2'>
                    <AnimatedCounter end={3000} /> Schools
                  </div>
                  <div className='text-sm p-2'>Target Schools to be built</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scale">
              <div className='flex flex-col justify-center items-center bg-white w-full h-32 rounded-xl border-dashed  border-green-400 border-2 text-center'>
                  <div className='text-2xl font-bold p-2'>
                    <AnimatedCounter end={50} /> Communities
                  </div>
                  <div className='text-sm p-2'>Target Communities to Empower</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className='py-12 md:py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <AnimateOnScroll animation="slideIn">
            <div className='inline-block mb-10'>
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className='py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap'>Our Impact</div>
              </Card>
            </div>
          </AnimateOnScroll>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {impactData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-full'>
                  <Card backgroundColor="bg-white hover:bg-gray-50 transition-colors" textColor="text-black">
                    <div className='flex flex-col justify-center items-center h-28 w-full'>
                      <div className={`text-4xl font-bold ${item.color}`}>
                        <AnimatedCounter end={parseInt(item.number)} />
                      </div>
                      <div className='text-gray-600 font-medium'>{item.text}</div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </div>

      {/* Blog Section */}
      <div className='py-12 md:py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4'>
          <AnimateOnScroll animation="slideIn">
            <div className='inline-block mb-10'>
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className='py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap'>Blog</div>
              </Card>
            </div>
          </AnimateOnScroll>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            {blogPosts.slice(0, 2).map((post) => (
              <AnimateOnScroll animation="fadeUp" key={post.id}>
                <article className='overflow-hidden rounded-lg border-2 border-black bg-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-[280px] md:h-[320px] object-cover'
                    loading='lazy'
                  />
                  <div className='bg-white p-5'>
                    <h3 className='text-xl md:text-2xl font-bold text-black'>{post.title}</h3>
                    <p className='mt-2 text-black/85 text-sm md:text-base'>{post.preview}</p>
                    <button
                      onClick={() => navigate('/blog')}
                      className='mt-3 text-sm font-semibold text-[#e83e8c] hover:text-black transition-colors'
                    >
                      Read more
                    </button>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeUp">
            <article className='overflow-hidden rounded-lg border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]'>
              <img
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                className='w-full h-[320px] md:h-[440px] object-cover'
                loading='lazy'
              />
              <div className='bg-gradient-to-b from-transparent via-white/85 to-white p-6'>
                <p className='text-xs uppercase tracking-wider text-[#e83e8c] font-bold mb-2'>Most Recent</p>
                <h3 className='text-2xl md:text-3xl font-bold text-black'>{blogPosts[2].title}</h3>
                <p className='mt-3 text-black/85 text-sm md:text-base max-w-3xl'>{blogPosts[2].preview}</p>
                <button
                  onClick={() => navigate('/blog')}
                  className='mt-4 text-sm font-semibold text-[#e83e8c] hover:text-black transition-colors'
                >
                  Read more
                </button>
              </div>
            </article>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Founder Section */}
      <section className='w-full bg-[#f8d8e8]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center min-h-[340px] px-6 md:px-14 lg:px-20 py-10 md:py-0'>
          <div className='flex flex-col justify-center text-left'>
            <p className='text-sm md:text-base uppercase tracking-[0.2em] text-black/70 mb-3'>
              Founder and Director
            </p>
            <h2 className='text-4xl md:text-6xl font-extrabold text-black leading-tight'>
              Elizabeth Yotto
            </h2>
          </div>

          <div className='flex justify-center md:justify-end items-center'>
            <img
              src='/liz-kate.png'
              alt='Liz Kate'
              className='w-full max-w-[380px] md:max-w-[460px] h-auto object-contain'
              loading='lazy'
            />
          </div>
        </div>
      </section>

    </div>
  );
}


export default HomePage;