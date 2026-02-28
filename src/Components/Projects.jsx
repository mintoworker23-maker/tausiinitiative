import Card from "./Card"
import ProgressBar from "./ProgressBar"
import { AnimateOnScroll } from "./AnimateonScroll"

const eventsData = [
    {
        title: "Community Tree Drive",
        description: "A volunteer-led tree planting day focused on restoring green cover in local neighborhoods.",
        date: "March 22, 2026",
        location: "Dandora, Nairobi",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Youth Leadership Workshop",
        description: "Interactive sessions helping youth build confidence, communication skills, and social impact plans.",
        date: "April 5, 2026",
        location: "Umoja III, Nairobi",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Health & Dignity Outreach",
        description: "A field event offering wellbeing resources, mentorship conversations, and referral support.",
        date: "April 20, 2026",
        location: "Kayole, Nairobi",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    },
];

const causesData = [
    {
        name: "Education Access",
        description: "Supporting equitable access to learning resources, digital literacy, and growth opportunities.",
    },
    {
        name: "Women Empowerment",
        description: "Strengthening economic independence through entrepreneurship and practical financial training.",
    },
    {
        name: "Mental Wellbeing",
        description: "Creating safe community spaces for awareness, peer support, and emotional resilience.",
    },
    {
        name: "Community Health",
        description: "Connecting underserved groups with essential information, outreach, and support pathways.",
    },
];

const Projects = () => {
    return (
        <div id="project-overview" className="w-full px-4 md:px-6 lg:px-8 overflow-x-hidden">
            <div className='flex py-4 w-full sm:w-64'>
                <div className='flex justify-start items-start w-full'>
                    <Card backgroundColor="bg-[#3BDE3B]" textColor="text-black">
                        <div className='py-2 px-4 text-2xl md:text-3xl lg:text-4xl font-bold'>Our Projects</div>
                    </Card>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <div className="w-full py-4">
                    <Card backgroundColor="bg-white" textColor="text-black">
                        <div className="flex flex-col md:flex-row w-full justify-center items-start mx-auto p-2 md:p-4 lg:p-6">
                            <div className="w-full flex flex-col justify-start items-start">
                                <div id="project-economic" className="text-2xl md:text-3xl font-bold p-2 md:p-4">
                                    Economic Empowerment (Financial Literacy)
                                </div>
                                <div id="project-stats" className="w-full md:w-[85%] flex justify-start items-start">
                                    <ProgressBar items={[
                                        { label: "Women & Youth Empowered", value: 500, progress: 85 },
                                        { label: "Small Businesses Launched", value: 50, progress: 70 },
                                        { label: "Financial Literacy Workshops", value: 20, progress: 60 },
                                        { label: "Counties Reached", value: 3, progress: 50 }
                                    ]}/>
                                </div>
                                <div className="px-4 text-2xl md:text-3xl font-semibold mt-4">Details:</div>
                            </div>
                        </div>
                        <div className="py-2 px-4 md:px-8 text-base md:text-lg leading-relaxed">
                            <pre className="whitespace-pre-wrap font-sans">
Economic Empowerment is a core pillar of the Tausi Initiative, focused on breaking the cycle of poverty by equipping the most vulnerable members of our community with the tools to build their own futures. We believe that financial independence is the foundation of dignity.
<br /><br />
<b>How It Began</b>
<br /><br />
Starting as a grassroots effort to help local women in Busia and Nairobi, we realized that many talented individuals lacked only the "business bridge"�the knowledge of financial literacy and entrepreneurial skills�to turn their crafts into sustainable income.
<br /><br />
<b>Core Mission</b>
<br /><br />
Skill Building: Providing hands-on training in entrepreneurship and digital literacy.
<br />
Financial Inclusion: Equipping women and youth with the knowledge to manage savings and access credit.
<br />
Mentorship: Connecting aspiring entrepreneurs with established business leaders to ensure long-term success.
<br /><br />
<b>Achievements</b>
<br />
Successfully trained over 500 individuals in essential business management and financial literacy.
<br />
Facilitated the launch of 50+ women-led micro-enterprises.
<br />
Formed strategic partnerships with local cooperatives to provide better market access for our beneficiaries.</pre>
                        </div>
                    </Card>
                </div>

                <div className="w-full py-4">
                    <Card backgroundColor="bg-white" textColor="text-black">
                        <div className="flex flex-col md:flex-row w-full justify-center items-start mx-auto p-2 md:p-4 lg:p-6">
                            <div className="w-full flex flex-col justify-start items-start">
                                <div id="project-healthy-futures" className="text-2xl md:text-3xl font-bold p-2 md:p-4">
                                    Healthy Futures (SRHR & Education)
                                </div>
                                <div className="w-full md:w-[85%] flex justify-start items-start">
                                    <ProgressBar items={[
                                        { label: "Girls Supported", value: 2000, progress: 90 },
                                        { label: "Hygiene Kits Distributed", value: 5000, progress: 95 },
                                        { label: "Schools Partnered", value: 15, progress: 65 },
                                        { label: "Community Dialogues", value: 40, progress: 75 }
                                    ]}/>
                                </div>
                                <div className="px-4 text-2xl md:text-3xl font-semibold mt-4">Details:</div>
                            </div>
                        </div>
                        <div className="py-2 px-4 md:px-8 text-base md:text-lg leading-relaxed">
                            <pre className="whitespace-pre-wrap font-sans">
Healthy Futures is our dedicated program for Sexual and Reproductive Health and Rights (SRHR) and Menstrual Hygiene Management. We work to ensure that no girl misses school or feels ashamed because of her biological reality.
<br /><br />
<b>How It Began</b>
<br /><br />
This project was born from the "School For Girls" initiative, where we noticed a high dropout rate among adolescent girls in rural communities. We stepped in to bridge the gap between education and health by providing both resources and stigma-breaking education.
<br /><br />
<b>Core Mission</b>
<br /><br />
Period Dignity: Distributing sanitary products and hygiene kits to keep girls in the classroom.
<br />
Health Education: Providing accurate, age-appropriate information on SRHR to empower bodily autonomy.
<br />
Infrastructure: Working with schools to ensure safe, private sanitation facilities for girls.
<br /><br />
<b>Achievements</b>
<br />
Reached over 2,000 girls with life-changing health education and mentorship.
<br />
Distributed 5,000+ hygiene kits across marginalized communities.
<br />
Reduced school absenteeism related to menstrual health by an estimated 30% in partner schools.</pre>
                        </div>
                    </Card>
                </div>
            </div>
            <div id="events" className="py-10 md:py-14">
                <AnimateOnScroll animation="slideIn">
                    <div className="inline-block mb-8">
                        <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                            <div className="py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap">Events</div>
                        </Card>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventsData.map((event, index) => (
                        <AnimateOnScroll animation="fadeUp" key={index}>
                            <article className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-52 md:h-56 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-black">{event.title}</h3>
                                    <p className="mt-2 text-sm md:text-base text-gray-700">{event.description}</p>
                                    <div className="mt-4 text-xs md:text-sm text-gray-600">
                                        <div><span className="font-semibold text-black">Date:</span> {event.date}</div>
                                        <div className="mt-1"><span className="font-semibold text-black">Location:</span> {event.location}</div>
                                    </div>
                                </div>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>

            <div id="causes" className="py-8 md:py-12">
                <AnimateOnScroll animation="slideIn">
                    <div className="inline-block mb-8">
                        <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
                            <div className="py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap">Cause</div>
                        </Card>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {causesData.map((cause, index) => (
                        <AnimateOnScroll animation="fadeUp" key={index}>
                            <Card backgroundColor="bg-white hover:bg-gray-50 transition-colors" textColor="text-black">
                                <div className="p-5 md:p-6 min-h-[170px]">
                                    <div className="text-xl font-bold text-black">{cause.name}</div>
                                    <div className="mt-3 text-sm md:text-base text-gray-700">{cause.description}</div>
                                </div>
                            </Card>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects

