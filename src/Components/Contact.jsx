import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Card from './Card';

const contactCards = [
  {
    id: 'contact-details',
    title: 'Address',
    description: 'P.O. Box 614553 - 00200, Nairobi, Kenya',
    icon: MapPin,
  },
  {
    id: 'call-us',
    title: 'Call',
    description: '0791133337 / 0704178625',
    icon: Phone,
  },
  {
    id: 'email-us',
    title: 'Email',
    description: 'info@tausiinitiative.com',
    icon: Mail,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Your name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
    if (!formData.subject.trim()) return 'Subject is required';
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error('Contact service is not configured yet.');
      }

      const payload = {
        firstName: formData.name,
        lastName: '',
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message.trim() || 'No additional message provided.',
      };

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      alert('Thank you. Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (submitError) {
      console.error('Contact form error:', submitError);
      setError(submitError.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4fff5] py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
            <h1 className="text-3xl md:text-5xl font-bold p-4 md:p-6">Contact</h1>
          </Card>
        </div>

        <div className="mt-6 border-[3px] border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
          <p className="text-sm uppercase tracking-[0.2em] text-black/70">Get in touch</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">How can we help you?</h2>
          <p className="mt-4 text-black/85 max-w-3xl leading-relaxed">
            TAUSI Initiative is committed to helping those in need. Contact us to see how we can help you or someone
            you know, or to explore ways you can support our mission through partnerships, donations, or volunteering.
          </p>
          <p className="mt-3 text-black/75">
            Follow us on our social media pages through the links in the footer for future updates and community
            highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                id={card.id}
                className="border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]"
              >
                <Icon className="w-8 h-8 text-[#e83e8c]" />
                <h3 className="mt-4 text-2xl font-bold text-black">{card.title}</h3>
                {card.title === 'Email' ? (
                  <a href={`mailto:${card.description}`} className="mt-2 block text-black/80 hover:text-[#e83e8c]">
                    {card.description}
                  </a>
                ) : card.title === 'Call' ? (
                  <a href="tel:+254791133337" className="mt-2 block text-black/80 hover:text-[#e83e8c]">
                    {card.description}
                  </a>
                ) : (
                  <p className="mt-2 text-black/80">{card.description}</p>
                )}
              </article>
            );
          })}
        </div>

        <div
          id="contact-form"
          className="mt-8 border-[4px] border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black">Send us a message</h3>
          <p className="mt-2 text-black/75">
            Share your name, your email, a subject, and any details you would like us to know.
          </p>

          {error && (
            <div className="text-red-600 text-center mt-4 mb-2 p-3 border-2 border-red-500 font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-extrabold text-black mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-[3px] border-black px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold text-black mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-[3px] border-black px-3 py-2 bg-blue-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold text-black mb-1">Phone (Optional)</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-[3px] border-black px-3 py-2 bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold text-black mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-[3px] border-black px-3 py-2 bg-yellow-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-extrabold text-black mb-1">Your Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full border-[3px] border-black px-3 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-extrabold text-black bg-green-500 border-[4px] border-black px-8 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
