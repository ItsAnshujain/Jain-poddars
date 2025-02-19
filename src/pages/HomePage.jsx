import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const services = [
  "Statutory Audit",
  "Internal Financial Controls",
  "Direct Tax Consultancy",
  "Direct Tax Advisory",
  "Corporate Law",
  "Government Audit",
  "Management Audit",
  "Concurrent Audit",
  "GST Consultancy Services",
  "GST Advisory Services",
  "Loan Syndication",
  "Project Consultancy",
  "Due Diligence",
  "Legal & Secretarial Services",
  "Accounting Solutions",
  "Risk Advisory Services",
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};
const smoothFadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const HomePage = () => {
  return (
    <>
      <Navbar className="w-full relative z-10" />

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/67/95/99/360_F_267959978_mg8IbiXMiL636E8GgZP2RC7zaCrMOLF1.jpg')",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center text-white max-w-2xl"
        >
          <h1
            className="text-4xl md:text-5xl font-bold "
            style={{ textShadow: "2px 2px 4px black" }}
          >
            Your Trusted Partner in Tax Consultancy, Business Decisions &
            Financial Planning
          </h1>
        </motion.div>
      </div>

      <section className="text-center bg-[#EEF7FF] py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={smoothFadeIn}
        >
          <h2 className="text-4xl font-bold text-[#4D869C] mb-8">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="shadow-md p-6 text-[#3B6790] font-semibold text-lg bg-white rounded-lg transition-all duration-300"
              >
                <Link
                  to={`/services`}
                  className="block hover:text-[#2C5B77] transition-colors duration-300"
                >
                  {service}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* About Us Section */}
      <section className="py-10 px-6 md:px-12 lg:px-20 bg-[#EEF7FF] items-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-[#4D869C] mb-6 text-center"
        >
          About Us
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-[18rem]"
          >
            <img
              src="https://www.shutterstock.com/image-photo/judge-hammer-lawyer-businessman-suit-600nw-2368402707.jpg"
              alt="About Us"
              className="w-full h-auto shadow-md rounded-lg"
            />
          </motion.div>

          {/* Content Section with Fade Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:w-[48rem]"
          >
            <p className="text-gray-700 text-md leading-relaxed text-justify">
              We are a leading firm of Chartered Accountants based at Ranchi and
              Ramgarh providing a plethora of services relating to Taxation,
              Audit, Accounting, Corporate Matters, Finance, and Consultancy. We
              are specialized in Income Tax Consultancy, GST Consultancy,
              Statutory and Internal Audits, Project Financing and Project
              Consultancy, Preparation and Presentation of Projected Financial
              Statements, Corporate Law Matters, Financial and Tax Planning,
              Management Consultancy services, etc.
            </p>
            <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
              Our firm has worked for a number of high-profile clients,
              including companies, banks, trusts & societies (charitable &
              educational), firms, and individuals, and given results to their
              best satisfaction.
            </p>
            <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
              <span className="font-semibold">"Client Satisfaction"</span>,
              these two words embody the way we work—flexible, integrated, and
              tailored to specific client situations.
            </p>
            <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
              Our work style is that of partnering change, and we play the role
              of a facilitator. In this process, we work with our clients to
              augment internal resources and strengthen capabilities.
            </p>
            <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
              Our objective is to ensure quality service and unquestioned
              integrity in our work methods. We try and evolve alternatives that
              are customized, practical, unique, and foresighted.
            </p>
            <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
              To a large extent, this is due to the fact that we have access to
              the expertise that is available at different places but is
              delivered locally to our clients, under one roof.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
