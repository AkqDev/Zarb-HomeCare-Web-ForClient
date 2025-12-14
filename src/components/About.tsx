import { motion } from "framer-motion";  // runtime import
import type { Variants } from "framer-motion"; // type-only import
import { Award, Heart, Shield } from 'lucide-react'; 
import about from '../assets/about.jpg'; 

// Animation variants for re-use
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20 } 
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white font-poppins"> 
      
      {/* Our Story */}
      <motion.section 
        className="py-10 bg-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Story Text */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.h2 
                variants={item} 
                className="text-4xl mb-6 font-bold text-[#786808] text-center md:text-left px-3"
              >
                Our Story
              </motion.h2>
              <div className="space-y-4 text-gray-600 text-center md:text-left mx-3 md:mx-auto">
                <motion.p variants={item}>
                  <strong>ZARB</strong> was founded with a simple goal: to deliver reliable, durable, and ethically made everyday essentials. Our stainless steel scourers are crafted for superior performance, scratch resistance, and a premium, long-lasting finish.
                </motion.p>
                <motion.p variants={item}>
                  Beyond quality, we are a purpose-driven brand. Through the <strong>ZARB Support Initiative</strong>, a portion of every purchase supports humanitarian relief efforts in Palestine.
                </motion.p>
                <motion.p variants={item}>
                  Choosing ZARB means choosing <strong>quality with conscience</strong>—cleaning your home while helping build hope.
                </motion.p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img
                src={about}
                alt="Our Story"
                className="w-full h-full object-contain" 
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#786808]">Our Values</h2>
            <p className="text-gray-600 text-sm font-semibold">The principles that guide everything we do</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 bg-gray-50 px-5 py-5 rounded-xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Value 1 */}
            <motion.div variants={item} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#786808]" /> 
              </div>
              <h3 className="text-xl mb-3 font-medium">Uncompromising Quality</h3>
              <p className="text-gray-600">
                We use premium stainless steel, engineered for superior durability, maximum scrubbing power, and long-lasting, scratch-resistant performance.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={item} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#786808]" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Social Commitment</h3>
              <p className="text-gray-600">
                We are a purpose-driven brand, ensuring ethical sourcing and committing a portion of every sale to humanitarian and relief efforts.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={item} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#786808]" /> 
              </div>
              <h3 className="text-xl mb-3 font-medium">Reliability & Design</h3>
              <p className="text-gray-600">
                Providing professional-grade cleaning tools with a modern, premium look that you can trust to handle the toughest jobs every time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
