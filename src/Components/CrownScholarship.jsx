import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Crown, GraduationCap, School } from 'lucide-react';
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

const CrownScholarship = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 overflow-x-hidden py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slideIn">
          <div className="inline-block">
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <div className="py-2 px-4 text-2xl md:text-4xl font-bold">
                Education Sponsorship Vision: The Crown Scholarship Fund
              </div>
            </Card>
          </div>
        </AnimateOnScroll>

        <section className="mt-6">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide font-semibold text-black/70">Under Tausi Queens - Tausi Initiative</p>
                  <p className="mt-3 inline-flex w-fit items-center border-2 border-black bg-[#f8d8e8] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
                    Coming Soon
                  </p>
                  <h1 className="mt-2 text-3xl md:text-5xl font-bold text-black leading-tight">The Crown Scholarship Fund</h1>
                  <p className="mt-4 text-base md:text-lg text-black/85 leading-relaxed">
                    The Crown Scholarship Fund is part of our future vision and is not yet active. This page shares
                    the direction of the initiative we are preparing to build.
                  </p>
                  <p className="mt-3 text-black/75 leading-relaxed">
                    Once launched, it will support academically promising yet financially vulnerable girls within the
                    Tausi Queens program so that economic hardship does not interrupt their education journey.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <ActionButton to="/contact#contact-form" label="Register Interest" primary />
                    <ActionButton to="/contact#contact-form" label="Partner on the Launch" />
                    <ActionButton to="/volunteer" label="Volunteer as a Mentor" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="/gallery/IMG-20240828-WA0079.jpg"
                    alt="Crown Scholarship beneficiaries"
                    className="w-full h-56 md:h-64 object-cover border-[3px] border-black"
                    loading="lazy"
                  />
                  <img
                    src="/gallery/IMG-20240828-WA0037.jpg"
                    alt="Student mentorship support"
                    className="w-full h-56 md:h-64 object-cover border-[3px] border-black"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#e83e8c]" />
                <h2 className="text-xl md:text-2xl font-bold text-black">Purpose</h2>
              </div>
              <p className="mt-4 text-black/85 text-sm md:text-base leading-relaxed">
                Prepare a scholarship pathway that will ensure girls with strong academic potential are not forced
                out of school due to financial hardship.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#e83e8c]" />
                <h2 className="text-xl md:text-2xl font-bold text-black">What the Fund Is Being Designed to Provide</h2>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-black/85 text-sm md:text-base">
                <li>Partial or full school fee sponsorship</li>
                <li>Learning materials and uniforms</li>
                <li>Academic mentorship and monitoring</li>
                <li>Psychosocial support where necessary</li>
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
              <div className="flex items-center gap-2">
                <School className="w-6 h-6 text-[#e83e8c]" />
                <h2 className="text-xl md:text-2xl font-bold text-black">Planned Selection Criteria</h2>
              </div>
              <p className="mt-4 text-black/85 text-sm md:text-base">When launched, scholarships will prioritize:</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-black/85 text-sm md:text-base">
                <li>Girls from underprivileged backgrounds</li>
                <li>Strong academic potential</li>
                <li>Active participation in Tausi Queens sessions</li>
                <li>Demonstrated leadership and commitment</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="mt-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="border-[3px] border-black bg-white p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-[#e83e8c]" />
                <h2 className="text-2xl md:text-3xl font-bold text-black">Long-Term Vision</h2>
              </div>
              <p className="mt-3 text-black/85 text-sm md:text-base">The Crown Scholarship Fund is intended to:</p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-black/85 text-sm md:text-base">
                <li>Sponsor at least 50 Queens annually within five years</li>
                <li>Build a network of Crown Scholars who give back as mentors</li>
                <li>Partner with schools and CSR institutions for co-funding models</li>
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

export default CrownScholarship;
