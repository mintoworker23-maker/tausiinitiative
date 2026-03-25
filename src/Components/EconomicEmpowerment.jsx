import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, BriefcaseBusiness } from 'lucide-react';
import Card from './Card';
import { AnimateOnScroll } from './AnimateonScroll';

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

const EconomicEmpowerment = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 overflow-x-hidden py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slideIn">
          <div className="inline-block">
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <div className="py-2 px-4 text-2xl md:text-4xl font-bold">Economic Empowerment</div>
            </Card>
          </div>
        </AnimateOnScroll>

        <section className="mt-6">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide font-semibold text-black/70">Year Started: 2025</p>
                  <h1 className="mt-2 text-3xl md:text-5xl font-bold text-black leading-tight">Economic Empowerment</h1>
                  <p className="mt-4 text-base md:text-lg text-black/85 leading-relaxed">
                    We equip youth and women with entrepreneurship and financial literacy skills to build sustainable
                    livelihoods and economic resilience.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <ActionButton to="/projects/economic-empowerment" state={{ openDonate: true }} label="Fund a Training" primary />
                    <ActionButton to="/contact#contact-form" label="Become a Corporate Partner" />
                  </div>
                </div>

                <img
                  src="/gallery/IMG-20240828-WA0038.jpg"
                  alt="Economic empowerment session"
                  className="w-full h-60 md:h-72 object-cover border-[3px] border-black"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="w-6 h-6 text-[#e83e8c]" />
                <h2 className="text-2xl font-bold text-black">Key Focus Areas</h2>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-black/85">
                <li>Entrepreneurship Training</li>
                <li>SME Development</li>
                <li>Financial Literacy Workshops</li>
                <li>Mentorship & Funding Linkages</li>
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-6 h-6 text-[#e83e8c]" />
                <h2 className="text-2xl font-bold text-black">Achievements</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  '50 youth & women trained',
                  'SME capacity strengthened',
                  'Participants linked to funding opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-black/85">
                    <ArrowRight className="w-4 h-4 mt-1 text-[#e83e8c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="mt-8 mb-8">
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

export default EconomicEmpowerment;
