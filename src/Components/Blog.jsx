import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { AnimateOnScroll } from './AnimateonScroll';

const stories = [
  {
    title: 'International Day of Education',
    date: 'January 24, 2025',
    excerpt:
      'We celebrated the importance of learning by bringing together young people, mentors, and community partners around the belief that education changes futures.',
    image: '/gallery/IMG-20240905-WA0035.jpg',
  },
  {
    title: 'World Menstrual Hygiene Day',
    date: 'May 28, 2025',
    excerpt:
      'Through Tausi Queens, we created safe spaces for menstrual health conversations, dignity support, and practical guidance for adolescent girls.',
    image: '/gallery/IMG-20240828-WA0042.jpg',
  },
  {
    title: 'International Day of the Girl Child',
    date: 'October 11, 2025',
    excerpt:
      'Our entrepreneurship and Tausi showcase day highlighted girls\' leadership, creativity, and the importance of investing boldly in their potential.',
    image: '/gallery/IMG-20240828-WA0079.jpg',
  },
];

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slideIn">
          <div className="inline-block mb-8 md:mb-10">
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <div className="py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap">Stories</div>
            </Card>
          </div>
        </AnimateOnScroll>

        <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
          <p className="text-black/85 max-w-4xl text-sm md:text-base leading-relaxed">
            These stories capture moments of learning, mentorship, empowerment, dignity, and shared action across
            the Tausi Initiative community. They reflect the spirit of the programs and gatherings highlighted in the
            website brief.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Card backgroundColor="bg-[#e83e8c] hover:bg-pink-600 transition-colors" textColor="text-black">
              <Link to="/contact#contact-form" className="flex items-center gap-2 px-4 py-2 font-bold">
                Share Your Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
            <Card backgroundColor="bg-white hover:bg-gray-100 transition-colors" textColor="text-black">
              <Link to="/gallery" className="flex items-center gap-2 px-4 py-2 font-bold">
                Browse the Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {stories.map((story) => (
            <AnimateOnScroll animation="fadeUp" key={story.title}>
              <article className="overflow-hidden rounded-lg border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full flex flex-col">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-56 object-cover border-b-[3px] border-black"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col h-full">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#e83e8c] font-bold">{story.date}</p>
                  <h2 className="mt-3 text-xl md:text-2xl font-bold text-black">{story.title}</h2>
                  <p className="mt-3 text-sm md:text-base text-black/80 flex-grow">{story.excerpt}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
