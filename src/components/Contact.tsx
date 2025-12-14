import React, { useState } from 'react';
// 1. Import Framer Motion components
import { motion } from 'framer-motion';
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
  ArrowRight,
  Sparkles,
  Target,
  Globe // Added for location card
} from 'lucide-react';

// --- Types ---
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// --- Main Component ---
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Submit Handler with a simulated delay
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log and handle success
    console.log('Form Data Submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Reset submission status after a brief moment
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Input Field Component with subtle animation
  const FormInput = ({ name, type, label, icon: Icon, required = false, placeholder, span = 'md:col-span-1' }: { name: keyof FormData, type: string, label: string, icon: React.ElementType, required?: boolean, placeholder?: string, span?: string }) => (
    <motion.div
      className={`relative mb-6 ${span}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 sr-only">
        {label}
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="w-5 h-5 text-[#786808]" aria-hidden="true" />
      </div>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder={placeholder || label}
        value={formData[name]}
        onChange={handleChange}
        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-[#786808] focus:border-[#786808] transition duration-300 text-base font-sans"
      />
    </motion.div>
  );

  // A shared Framer Motion stagger container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // A shared Framer Motion item variant
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Contact Card Component with hover animation
  const ContactCard = ({ title, content, subtext, icon: Icon, bgColor, iconColor, delay }: { title: string, content: string, subtext: string, icon: React.ElementType, bgColor: string, iconColor: string, delay: number }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center"
      variants={itemVariants}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 font-serif mb-2">{title}</h3>
      <p className="text-base text-gray-700 font-sans mb-1">{content}</p>
      <p className="text-sm text-gray-500 font-sans">{subtext}</p>
    </motion.div>
  );

  return (
    // Add Google Font class here and a soft background
    <div className="min-h-screen bg-gray-50 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- 1. Catchy Header --- */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-bold text-[#786808] uppercase tracking-wider">
            Ready to Connect?
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-serif mt-2">
            Get in <span className="text-[#786808]">Touch</span>
          </h1>
          <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto font-semibold">
            We're here to answer your questions and start a partnership that makes a difference.
          </p>
        </motion.header>

        {/* --- 2. Contact Cards Section (Placed here for better flow) --- */}
        <motion.section
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactCard
            title="Call Us"
            content="+91 1800-123-4567"
            subtext="Mon-Sat, 9AM-6PM IST"
            icon={Phone}
            bgColor="bg-gray-100"
            iconColor="text-[#786808]"
            delay={0.2}
          />
          <ContactCard
            title="Email Support"
            content="support@ecoclean.in"
            subtext="Guaranteed 24/7 Response"
            icon={Mail}
            bgColor="bg-gray-100"
            iconColor="text-[#786808]"
            delay={0.4}
          />
        </motion.section>

        {/* --- 3. Form and Info Panel Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* A. Contact Form (Spanning 2/3) */}
          <motion.div
            className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center font-serif">
               Let's Start a Conversation
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Tell us about your project or query. The fields marked with * are required.
            </p>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-lg"
                role="alert"
              >
                <span className="font-medium">Success!</span> Thank you for contacting us. We will get back to you within one business day.
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormInput name="name" type="text" label="Full Name *" icon={ArrowRight} required placeholder="Your Full Name" />
                <FormInput name="email" type="email" label="Email Address *" icon={Mail} required placeholder="you@example.com" />
                <FormInput name="phone" type="tel" label="Phone Number" icon={Phone} placeholder="(+92) 123-456-7890 (Optional)" />
              </div>

              {/* Message Area */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us more about your query and how we can assist..."
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-[#786808] focus:border-[#786808] transition duration-300 text-base font-sans"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-lg font-semibold rounded-xl shadow-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#786808] transition duration-300 disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Send className="w-5 h-5 ml-3" />
              </motion.button>
            </form>
          </motion.div>

          {/* B. Info Panel/Social Links (1/3) */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-8 h-full flex flex-col shadow-2xl">
              <div>
                <h3 className="text-3xl font-bold font-serif mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-2" /> Global Presence
                </h3>
                <p className="text-[#786808] text-lg mb-8">
                  We're committed to sustainability worldwide. Connect with our community across the globe.
                </p>

                {/* Quick Info Points */}
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 flex-shrink-0 text-emerald-300 mt-1" />
                    <div className="ml-4">
                      <p className="text-xl font-semibold">Working Hours</p>
                      <p className="text-[#786808]">Monday - Saturday: 9am to 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 flex-shrink-0 text-emerald-300 mt-1" />
                    <div className="ml-4">
                      <p className="text-xl font-semibold">Headquarters</p>
                      <p className="text-[#786808]">New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto pt-6 border-t border-[#786808]">
                <h4 className="text-xl font-semibold mb-4">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition duration-300"
                      aria-label={Icon.name}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}