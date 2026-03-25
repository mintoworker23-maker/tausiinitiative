import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  HandHeart,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import Card from './Card';
import { AnimateOnScroll } from './AnimateonScroll';

const modelPillars = [
  {
    title: 'Identity & Confidence',
    points: ['Self-awareness', 'Self-esteem building', 'Personal values & purpose discovery'],
    icon: Sparkles,
  },
  {
    title: 'Leadership & Life Skills',
    points: ['Decision-making skills', 'Communication & public speaking', 'Goal setting & future planning'],
    icon: Target,
  },
  {
    title: 'Sexual & Reproductive Health & Rights (SRHR)',
    points: [
      'Menstrual health management',
      'HIV/STI prevention',
      'SGBV awareness',
      'Body autonomy & informed choices',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Mentorship & Safe Spaces',
    points: ['Guided discussions', 'Peer support circles', 'Positive role modeling'],
    icon: Users,
  },
];

const ActionButton = ({ to, label, state, primary = false }) => (
  <div className="w-fit">
    <Card
      backgroundColor={primary ? 'bg-[#e83e8c] hover:bg-pink-600 transition-colors' : 'bg-white hover:bg-gray-100 transition-colors'}
      textColor="text-black"
    >
      <Link to={to} state={state} className="px-4 py-2 font-bold text-sm md:text-base block">
        {label}
      </Link>
    </Card>
  </div>
);

const TausiQueens = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 overflow-x-hidden py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slideIn">
          <div className="inline-block">
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <div className="py-2 px-4 text-2xl md:text-4xl font-bold">TAUSI QUEENS - FLAGSHIP PROGRAM</div>
            </Card>
          </div>
        </AnimateOnScroll>

        <section id="tausi-overview" className="mt-6">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide font-semibold text-black/70">Year Started: 2024</p>
                  <p className="mt-2 text-sm md:text-base font-semibold text-[#e83e8c]">
                    Raising Confident, Informed, and Purpose-Driven Girls
                  </p>
                  <h1 className="mt-2 text-3xl md:text-5xl font-bold text-black leading-tight">
                    Empowering the Girl. Transforming the Future.
                  </h1>
                  <p className="mt-4 text-base md:text-lg text-black/85 leading-relaxed">
                    Tausi Queens is the flagship girls&apos; empowerment program equipping adolescent girls with
                    leadership skills, life skills, mentorship, and Sexual and Reproductive Health knowledge to
                    thrive confidently in school and in life.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <ActionButton to="/projects/tausi-queens" state={{ openDonate: true }} label="Sponsor a Queen" primary />
                    <ActionButton to="/contact#contact-form" label="Partner with Us" />
                    <ActionButton to="/volunteer" label="Volunteer as a Mentor" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="/gallery/IMG-20240828-WA0041.jpg"
                    alt="Tausi Queens in session"
                    className="w-full h-56 md:h-64 object-cover border-[3px] border-black"
                    loading="lazy"
                  />
                  <img
                    src="/gallery/IMG-20240828-WA0036.jpg"
                    alt="Girls engagement session"
                    className="w-full h-56 md:h-64 object-cover border-[3px] border-black"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section id="tausi-why" className="mt-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <h2 className="text-2xl md:text-3xl font-bold text-black">OUR WHY</h2>
              <p className="mt-4 text-black/85 leading-relaxed">
                Adolescent girls in underserved communities often face systemic barriers: limited access to accurate
                health information, low self-esteem, economic vulnerability, and cultural pressures that silence their
                voices.
              </p>
              <p className="mt-3 text-black/85 leading-relaxed">Tausi Queens was created to interrupt that cycle.</p>
              <p className="mt-3 text-black/85 leading-relaxed">
                We believe when a girl understands her worth, her body, her voice, and her potential, she becomes
                unstoppable.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <section id="tausi-model" className="mt-8">
          <AnimateOnScroll animation="slideIn">
            <div className="inline-block">
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className="py-2 px-4 text-2xl md:text-3xl font-bold">THE TAUSI QUEENS EMPOWERMENT MODEL</div>
              </Card>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {modelPillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <AnimateOnScroll animation="fadeUp" key={pillar.title}>
                  <div className="border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
                    <div className="flex items-center gap-2">
                      <PillarIcon className="w-5 h-5 text-[#e83e8c]" />
                      <h3 className="text-xl font-bold text-black">{pillar.title}</h3>
                    </div>
                    <ul className="mt-4 list-disc pl-5 space-y-2 text-black/85">
                      {pillar.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        <section id="tausi-impact" className="mt-8">
          <AnimateOnScroll animation="slideIn">
            <div className="inline-block">
              <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                <div className="py-2 px-4 text-2xl md:text-3xl font-bold">IMPACT AT A GLANCE</div>
              </Card>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { value: '1000+', label: 'adolescent girls reached', icon: Users },
              { value: '8+', label: 'partner schools engaged', icon: School },
              { value: 'Termly', label: 'empowerment sessions conducted', icon: Sparkles },
              { value: 'Dignity Kits', label: 'distributed to vulnerable girls', icon: HandHeart },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <AnimateOnScroll animation="fadeUp" key={item.label}>
                  <div className="border-[3px] border-black bg-white p-5 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
                    <ItemIcon className="w-7 h-7 text-[#e83e8c] mx-auto" />
                    <p className="mt-3 text-3xl font-bold text-black">{item.value}</p>
                    <p className="mt-2 text-sm md:text-base text-black/80">{item.label}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        <section id="tausi-achievements" className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-black">KEY ACHIEVEMENTS</h2>
              <ul className="mt-4 space-y-3">
                {[
                  'Established safe dialogue spaces in our partner schools',
                  'Increased SRHR awareness among participating girls',
                  'Strengthened girls\' confidence and classroom participation',
                  'Built a growing network of trained facilitators',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-black/85">
                    <BadgeCheck className="w-5 h-5 text-[#e83e8c] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-black">WHAT MAKES TAUSI QUEENS DIFFERENT?</h2>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-black/85">
                <li>Holistic approach (not limited to SRHR, mental health)</li>
                <li>Structured curriculum-based sessions</li>
                <li>School-based sustainability model</li>
                <li>Integration of dignity support with leadership development</li>
                <li>Community-sensitive engagement</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <section id="tausi-future" className="mt-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <h2 className="text-2xl md:text-3xl font-bold text-black">FUTURE VISION</h2>
              <p className="mt-3 text-black/85 leading-relaxed">
                Our next phase focuses on scaling Tausi Queens into a nationally recognized empowerment model.
              </p>
              <p className="mt-3 text-black/85 leading-relaxed">
                With strategic funding and partnerships, we aim to:
              </p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-black/85">
                <li>Expand to additional counties, establishing a national girls&apos; empowerment model</li>
                <li>Formalize the Tausi Queens Curriculum Toolkit for replication</li>
                <li>Launch a Tausi Queens Alumni Mentorship Network</li>
                <li>Establish a sustainable Dignity Kit Sponsorship Program</li>
                <li>
                  Launch the Crown Scholarship Fund to support vulnerable yet high-potential Queens in continuing
                  their education
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <section id="crown-scholarship" className="mt-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Education Sponsorship Vision: The Crown Scholarship Fund
              </h2>
              <p className="mt-3 text-black/85 text-sm md:text-base leading-relaxed max-w-4xl">
                This initiative now has its own standalone project page with full details on purpose, benefits,
                selection criteria, and long-term scholarship goals.
              </p>
              <div className="mt-5 w-fit">
                <Card backgroundColor="bg-[#e83e8c] hover:bg-pink-600 transition-colors" textColor="text-black">
                  <Link to="/projects/crown-scholarship" className="px-4 py-2 font-bold text-sm md:text-base block">
                    Open Crown Scholarship Project
                  </Link>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section id="tausi-get-involved" className="mt-8 mb-8">
          <div className="mt-6 w-fit">
            <Card backgroundColor="bg-white hover:bg-gray-100 transition-colors" textColor="text-black">
              <Link to="/projects" className="flex items-center gap-2 px-4 py-2 font-bold text-sm md:text-base">
                Back to All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TausiQueens;
