import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import location from "../images/location.png"; 

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const ContactPage = () => {
  return (
    <>
      <Navbar className="w-full relative z-10" />
      <motion.div
        initial="hidden"
        animate="visible"
        className="bg-[#EEF7FF] min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-10"
      >
        {/* Addresses Section */}
        <motion.div variants={fadeIn} className="max-w-5xl w-full bg-white shadow-lg p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#4D869C] mb-4 text-center">Our Offices</h3>
          <div className="text-gray-700 space-y-4 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-[#4D869C]">Head Office</h4>
              <p>502-03-04, Mangal Tower, Old HB Road, Kantatoli, Ranchi - 834001, Jharkhand, India.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#4D869C]">Branch Office</h4>
              <p>Anshu Medico, Gurudwara Road, Near Gurudwara, Ramgarh Cantt - 829122, Jharkhand, India.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#4D869C]">Contacts</h4>
              <p>Mobile: <a href="tel:+918102319400" className="hover:underline">+91-81023 19400</a></p>
              <p>Phone: (0651) 253 0318 / (0651) 297 2617</p>
              <p>Email: <a href="mailto:jainpoddarco@gmail.com" className="hover:underline">jainpoddarco@gmail.com</a></p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form & Map (Side by Side) */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Contact Form */}
          <motion.div variants={slideInLeft} className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#4D869C] mb-4 text-center">Get In Touch</h3>
            <form  action="https://formsubmit.co/anshujain8844@gmail.com" 
  method="POST"  className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-md focus:outline-none" required />
              <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md focus:outline-none" required />
              <input type="tel" placeholder="Mobile Number" className="p-2 border border-gray-300 rounded-md focus:outline-none" required />
              <textarea placeholder="Message" rows="4" className="p-2 border border-gray-300 rounded-md focus:outline-none" required></textarea>
              <button type="submit"
                className="bg-[#4D869C] text-white py-2 rounded-md hover:bg-[#3B6790] transition"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div variants={slideInRight} className="flex justify-center items-center">
            <a
              href="https://www.google.com/maps/place/Jain+Poddar+%26+Co./@23.3655929,85.3446201,17z/data=!3m2!4b1!5s0x39f4e19fa2fdf76b:0x7867e1264933206!4m6!3m5!1s0x39f4e17975a9faa9:0xccdc72fd3a60e2e2!8m2!3d23.365588!4d85.347195!16s%2Fg%2F1w0hz0jc?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={location}
                alt="Map Location"
                className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition"
                whileHover={{ scale: 1.05 }}
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ContactPage;
