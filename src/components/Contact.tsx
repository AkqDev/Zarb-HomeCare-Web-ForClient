import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight
} from 'lucide-react';


interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// 2. Export as default for standard React component usage
export default function Contact() { 
  // Initial state uses the FormData interface
  const [formData, setFormData] = useState<FormData>({ 
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Type for the submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., call an API)
    console.log('Form Data Submitted:', formData); 
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  // Type for the change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-xl text-emerald-100">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-20 relative z-10">
            {/* Card 1: Phone */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+91 1800-123-4567</p>
              <p className="text-sm text-gray-600">Mon-Sat, 9AM-6PM</p>
            </div>
            {/* Card 2: Email */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 text-center">
              {/* Adjusted color to be more distinct/professional */}
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600">support@ecoclean.in</p>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </div>
            {/* Card 3: Office */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <p className="text-sm text-gray-600">123 Green Street</p>
              <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
            </div>
            {/* Card 4: Working Hours */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-sm text-gray-600">Mon-Fri: 9AM-7PM</p>
              <p className="text-sm text-gray-600">Sat: 10AM-4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map/Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className='bg-white p-8 rounded-xl shadow-lg'>
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our dedicated support team will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none appearance-none transition"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none resize-none transition"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 rounded-lg inline-flex items-center justify-center gap-2 transition transform hover:scale-[1.005] font-semibold"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Information & Map */}
            <div className='lg:pt-8'>
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-gray-600 mb-6">
                We're always happy to meet our customers in person. Drop by our office during business hours.
              </p>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 mb-8 overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.693424683515!2d72.83602167520038!3d19.03541748215682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a75d5e2e4f%3A0x6b1c7c9c0b1e1f72!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location in Mumbai"
                ></iframe>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 border-l-4 border-emerald-500">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  Quick Links & FAQs
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-emerald-600 hover:text-emerald-700 transition flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> What are your shipping times?
                  </a></li>
                  <li><a href="#" className="text-emerald-600 hover:text-emerald-700 transition flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Do you offer COD?
                  </a></li>
                  <li><a href="#" className="text-emerald-600 hover:text-emerald-700 transition flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> What is your return policy?
                  </a></li>
                  <li><a href="#" className="text-emerald-600 hover:text-emerald-700 transition flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> How do I track my order?
                  </a></li>
                </ul>
              </div>

              {/* Social Links - Added Lucide Icons */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Follow us on social media for eco-tips, product updates, and special offers.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}