import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ShieldCheck,
  Leaf,
} from "lucide-react";

/* ---------------- TYPES ---------------- */
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const messageText = `
Hello ZARB Team!
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Message: ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappNumber = "923261247039"; // ZARB WhatsApp number

    // Open WhatsApp chat in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    // Reset form & show success
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen py-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact <span className="text-[#786808]">ZARB</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a question about our products or want to partner with ZARB?
            We’d love to hear from you.
          </p>
        </motion.div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* SIDEBAR CONTACT CARDS */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="lg:col-span-1 space-y-6 sticky top-28"
          >
            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-7 h-7 text-[#786808] bg-gray-100 rounded-full p-1" />
                <h3 className="text-lg font-semibold">Contact Us</h3>
              </div>
              <p className="text-gray-600 text-sm">Customer care & product support</p>
              <p className="font-bold text-gray-900 mt-1">
                <a
                  href="https://wa.me/923261247039"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 326 1247039
                </a>
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-7 h-7 text-[#786808] bg-gray-100 rounded-full p-1" />
                <h3 className="text-lg font-semibold">Email Support</h3>
              </div>
              <p className="text-gray-600 text-sm">Quick response guaranteed</p>
              <p className="font-bold text-gray-900 mt-1">
                <a href="mailto:zarbhomecareindustries@gmail.com">
                  zarbhomecareindustries@gmail.com
                </a>
              </p>
            </div>

            {/* Why ZARB */}
            <div className="bg-[#786808] text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Why ZARB?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Trusted Quality
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" /> Safe & Eco-Friendly
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Nationwide Availability
                </li>
              </ul>
            </div>
          </motion.aside>

          {/* CONTACT FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 hidden md:block"
          >
            <h2 className="text-2xl font-bold mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form and our team will get back to you shortly.
            </p>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-green-100 text-green-700"
              >
                Thank you! WhatsApp chat opened with your message.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  icon={ArrowRight}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  icon={Mail}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                name="phone"
                placeholder="Phone (Optional)"
                icon={Phone}
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                rows={3}
                required
                placeholder="Tell us how we can help you…"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border focus:ring-[#786808] focus:border-[#786808]"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="w-full bg-[#786808] text-white py-3 rounded-xl font-semibold shadow-lg"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
                <Send className="inline-block w-5 h-5 ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

/* ---------------- INPUT COMPONENT ---------------- */
function Input({ icon: Icon, ...props }: any) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#786808]" />
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-[#786808] focus:border-[#786808]"
      />
    </div>
  );
}
