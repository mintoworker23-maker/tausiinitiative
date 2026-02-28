"use client";

import React, { useState } from "react";
import Card from "./Card";

const LeafIcon = () => (
  <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,4c0,0-3-1-9.5,0.75C5,6.5,1.5,8.25,1.5,8.25S1,20.5,16,21C16,21,21,4,21,4z M7,14.5 c1.3,1.3,3.6,1,5.3-0.8s2.1-4,0.8-5.3s-3.6-1-5.3,0.8S5.7,13.2,7,14.5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-10 h-10 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-10 h-10 text-green-700" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6,10.8C8.2,14,10,15.8,13.2,17.4l2.5-2.5c0.3-0.3,0.7-0.4,1.1-0.3c1.2,0.4,2.5,0.6,3.8,0.6c0.6,0,1.1,0.5,1.1,1.1V20 c0,0.6-0.5,1.1-1.1,1.1C10.4,21.1,2.9,13.6,2.9,4.4C2.9,3.8,3.4,3.3,4,3.3h3.7c0.6,0,1.1,0.5,1.1,1.1c0,1.3,0.2,2.6,0.6,3.8 c0.1,0.4,0,0.8-0.3,1.1L6.6,10.8z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    preferredResponse: "Email",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email format";
    if (!formData.subject.trim()) return "Subject is required";
    if (!formData.message.trim()) return "Message is required";
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
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Thank you. Your message has been sent successfully.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        preferredResponse: "Email",
        message: "",
      });
    } catch (submitError) {
      console.error("Contact form error:", submitError);
      setError(submitError.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 200 200\'%3E%3Cdefs%3E%3Cpattern id=\'leafPattern\' patternUnits=\'userSpaceOnUse\' width=\'80\' height=\'80\'%3E%3Cpath fill=\'%23a3e635\' fill-opacity=\'0.15\' d=\'M30,20 Q42,25 45,40 T60,60 T80,45 T85,30 T70,10 T45,15 T30,20\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23leafPattern)\'/%3E%3C/svg%3E")',
        backgroundColor: "#f0fff4",
      }}
    >
      <div className="absolute top-10 left-10 transform -rotate-12 opacity-60">
        <LeafIcon />
      </div>
      <div className="absolute top-20 right-10 transform rotate-12 opacity-60">
        <MailIcon />
      </div>
      <div className="absolute bottom-10 right-10 transform -rotate-12 opacity-60">
        <PhoneIcon />
      </div>

      <div id="contact-form" className="max-w-4xl w-full bg-white rounded-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] p-8 relative z-10">
        <div className="my-4 relative">
          <div className="absolute -top-6 left-10 transform rotate-45">
            <LeafIcon />
          </div>
          <div className="absolute -top-6 right-10 transform -rotate-45">
            <LeafIcon />
          </div>

          <Card backgroundColor="bg-pink-500" textColor="text-black">
            <h1 className="text-3xl font-bold text-center p-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)]">
              Contact Us
            </h1>
          </Card>
          <p className="text-center text-gray-700 mt-4">
            Send us your question, partnership request, or feedback. We usually respond within 1-2 business days.
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-4 p-2 border-2 border-red-500 font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="your-details" className="col-span-full flex items-center gap-2 mt-2 mb-0 border-b-2 border-dashed border-green-500 pb-2">
            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-bold text-green-800">Your Details</span>
          </div>

          <div>
            <label className="block text-sm font-extrabold text-black mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-extrabold text-black mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div id="contact-details" className="col-span-full flex items-center gap-2 mt-4 mb-0 border-b-2 border-dashed border-blue-500 pb-2">
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-bold text-blue-800">Contact Details</span>
          </div>

          <div>
            <label className="block text-sm font-extrabold text-black mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-blue-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
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
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-blue-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div id="message-section" className="col-span-full flex items-center gap-2 mt-4 mb-0 border-b-2 border-dashed border-pink-500 pb-2">
            <svg className="w-6 h-6 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
            </svg>
            <span className="font-bold text-pink-800">Message</span>
          </div>

          <div>
            <label className="block text-sm font-extrabold text-black mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-extrabold text-black mb-1">Preferred Response</label>
            <select
              name="preferredResponse"
              value={formData.preferredResponse}
              onChange={handleChange}
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Either">Either</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-extrabold text-black mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full border-3 border-black rounded-none px-3 py-2 bg-yellow-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="col-span-full mt-6 relative">
            <button
              type="submit"
              disabled={loading}
              className={`w-full font-extrabold text-black bg-green-500 border-4 border-black px-8 py-3 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}