import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import akhil from "../images/akhil.jpeg";
import anish from "../images/anish.jpg";
import uttam from "../images/uttam.jpg";
import rahul from "../images/rahul.jpg";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
import about4 from "../images/about4.jpg";
import about6 from "../images/about6.jpg";
import about7 from "../images/about7.jpg";
import about8 from "../images/about8.jpg";
import about9 from "../images/about9.jpg";
import about10 from "../images/about10.jpg";
const teamImages = [akhil, uttam, rahul, anish];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#EEF7FF] py-16 px-6 md:px-12 lg:px-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#4D869C] text-center"
        >
          We as Team JPC
        </motion.h2>

        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="text-justify py-6">
            <p className="text-gray-700 mt-4">
              We are a leading Chartered Accountant Firm in India providing
              financial and accounting services to individuals and businesses.
              Our firm specialize in various aspects of Advisory and accounting,
              including auditing, taxation, financial planning, and advisory
              services.
              <br />
              We are staffed by highly trained and qualified personnels who have
              undergone rigorous education and training. We play a crucial role
              in helping businesses manage their financial affairs and ensuring
              compliance with applicable laws and regulations.
            </p>
            <h4 className="text-xl font-semibold text-[#3B6790] mt-6">
              We assist in:
            </h4>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Preparing financial statements</li>
              <li>Analyzing financial data</li>
              <li>Offering expert advice on financial matters</li>
            </ul>
            <p className="text-gray-700 mt-4">
              With their extensive knowledge and expertise, find ourselves as
              trusted partners for seeking reliable and accurate financial
              services in India.
              <br />
              We have a team of qualified professionals to look after your
              customized needs and to advice and guide you from time to time at
              every step relating to services of Accounting, Income Tax
              Consultancy, GST Consultancy, Company Law Matters, Audit &
              assurance and Project Financing & Consultancy Services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 shadow-lg rounded-lg text-center font-semibold text-[#3B6790]">
                Organised Approach
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg text-center font-semibold text-[#3B6790]">
                Knowledge Management
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg text-center font-semibold text-[#3B6790]">
                Transparency
              </div>
              <div className="bg-white p-4 shadow-lg rounded-lg text-center font-semibold text-[#3B6790]">
                Broad Reach
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="m-2 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={about3}
              alt="About Us"
              className="w-full h-auto shadow-md"
            />
          </motion.div>

          {/* Grid Images with Hover Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2">
            {[about1, about2, about4, about6].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="About Us"
                className="w-full h-auto md:h-[350px] shadow-md object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2">
            {[about7, about8, about9, about10].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="About Us"
                className="w-full h-auto md:h-[350px] shadow-md object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10"
        >
          <div className="md:w-1/2 ">
            <h3 className="text-2xl font-semibold text-[#3B6790] text-center">
              Our Mission
            </h3>
            <p className="text-gray-700 mt-4 text-justify">
              We wish to play a crucial role in the financial landscape of the
              country. With our expertise and knowledge, we aim to provide
              exceptional accounting services to businesses and individuals
              alike.
              <br />
              <br />
              We offer a wide range of services including tax planning,
              auditing, financial reporting, and advisory services. We ensure
              compliance with the various regulatory frameworks and help clients
              navigate the complex taxation system of the country. We also
              assist in strategic financial decision-making, helping businesses
              grow and thrive. With our dedication and professionalism, JPC
              strive to maintain the highest standards of ethics and integrity
              in our practice. Team JPC wish to contribute to the economic
              growth of the nation by providing accurate financial information
              and ensuring financial stability for clients.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#3B6790] text-center">
              Our Vision
            </h3>
            <p className="text-gray-700 mt-4 text-justify">
              TEAM JPC have a clear vision to provide reliable financial
              solutions. We aim to ensure transparency and accuracy in financial
              reporting and assist in making informed decisions. We strive to
              uphold the highest standards of professionalism and ethics in
              their services.
              <br />
              <br />
              By offering comprehensive services, such as financial planning,
              risk assessment, and business advisory, we contribute to the
              growth and success of our clients. With a commitment to excellence
              and a deep understanding of the Indian business landscape, we are
              dedicated to serving our clients' financial needs effectively and
              efficiently.
            </p>
          </div>
        </motion.div>

        {/* Third Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-full md:w-[50rem] text-justify md:pr-6">
            <h3 className="text-2xl font-semibold text-[#3B6790]">Our Team</h3>
            <p className="text-gray-700 mt-4">
              The TEAM JPC is composed of highly skilled and experienced
              professionals who are dedicated to providing exceptional financial
              services and guidance. With years of experience, they have
              developed a deep understanding of various financial regulations
              and can navigate complex tax laws effortlessly. Their expertise
              extends beyond traditional accounting practices, as they also
              offer valuable insights into business planning and risk
              management.
              <br />
              <br />
              The team prides itself on its personalized approach, taking the
              time to understand each client's unique needs and goals. They
              strive to build long-lasting relationships based on trust and
              integrity, ensuring that clients receive the highest level of
              service and support. With their comprehensive knowledge and
              unwavering commitment, the team at JPC is well-equipped to meet
              all financial needs and help businesses thrive in today's
              competitive landscape.
            </p>
          </div>

          <div className="w-full md:w-[25rem] grid grid-cols-2 gap-4 ">
            {teamImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Team Member"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutPage;
