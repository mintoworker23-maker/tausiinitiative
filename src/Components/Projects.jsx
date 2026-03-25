import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';
import Card from './Card';
import { AnimateOnScroll } from './AnimateonScroll';

const projects = [
  {
    title: 'Tausi Queens',
    overview:
      'Our flagship girls empowerment project equips adolescent girls with leadership skills, life skills, mentorship, and Sexual and Reproductive Health knowledge to thrive confidently in school and in life.',
    link: '/projects/tausi-queens',
    image: '/gallery/IMG-20240828-WA0041.jpg',
    icon: Sparkles,
    label: 'Flagship Project',
  },
  {
    title: 'Crown Scholarship Fund',
    overview:
      'A coming-soon education sponsorship project being designed to support academically promising yet financially vulnerable girls so hardship does not interrupt their education journey.',
    link: '/projects/crown-scholarship',
    image: '/gallery/IMG-20240828-WA0079.jpg',
    icon: Crown,
    label: 'Coming Soon',
  },
];

const Projects = () => {
  return (
    <div id="project-overview" className="w-full px-4 md:px-6 lg:px-8 overflow-x-hidden py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slideIn">
          <div className="inline-block">
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <div className="py-2 px-4 text-2xl md:text-4xl font-bold">Our Projects</div>
            </Card>
          </div>
        </AnimateOnScroll>

        <section id="projects-grid" className="mt-8 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <AnimateOnScroll animation="fadeUp" key={project.title}>
                  <article className="border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full flex flex-col">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 md:h-56 object-cover border-b-[3px] border-black"
                      loading="lazy"
                    />
                    <div className="p-5 flex flex-col h-full">
                      <div className="flex items-center gap-2">
                        <ProjectIcon className="w-5 h-5 text-[#e83e8c]" />
                        <p className="text-sm uppercase tracking-wide font-semibold text-black/70">{project.label}</p>
                      </div>

                      <h2 className="mt-3 text-2xl font-bold text-black">{project.title}</h2>
                      <p className="mt-3 text-black/80 text-sm md:text-base flex-grow">{project.overview}</p>

                      <div className="mt-5 w-fit">
                        <Card backgroundColor="bg-[#e83e8c] hover:bg-pink-600 transition-colors" textColor="text-black">
                          <Link to={project.link} className="flex items-center gap-2 px-4 py-2 font-bold text-sm md:text-base">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Card>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
