import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";
import Footer from '../components/Footer';
const services = [
  "Statutory Audit", "Internal Financial Controls", "Direct Tax Consultancy", "Direct Tax Advisory", "Corporate Law",
  "Government Audit", "Management Audit", "Concurrent Audit", "GST Consultancy Services", "GST Advisory Services",
  "Loan Syndication", "Project Consultancy", "Due Diligence", "Legal & Secretarial Services", "Accounting Solutions"
];

const HomePage = () => {
  return (<>
      <Navbar className="w-full relative z-10" />
    <div className="relative h-screen bg-cover bg-center " style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/02/67/95/99/360_F_267959978_mg8IbiXMiL636E8GgZP2RC7zaCrMOLF1.jpg')" }}>
      <div className="absolute inset-0 bg-opacity-70"></div>
      <section className="h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 relative z-10">
        {/* Centered Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Your Trusted Partner in Tax Consultancy, Business Decisions & Financial Planning</h1>
          
        </motion.div>
      </section>
       {/* Our Services Section */}
       <section className="text-center bg-[#EEF7FF]">
        <h2 className="text-4xl font-bold text-[#4D869C] py-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="shadow-lg  p-6 text-[#3B6790] font-semibold text-lg transition"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </section>
       {/* About Us Section */}
       {/* About Us Section */}
<section className="py-16 px-6 md:px-12 lg:px-20 bg-[#EEF7FF] items-center">
  <h2 className="text-4xl font-bold text-[#4D869C] mb-6 text-center ">About Us</h2>
  {/* Image Section */}
  <div className='flex flex-col md:flex-row  gap-10'>
  <div className="md:w-[18rem]">
    <img 
      src="https://www.shutterstock.com/image-photo/judge-hammer-lawyer-businessman-suit-600nw-2368402707.jpg" 
      alt="About Us" 
      className="w-full h-auto  shadow-md"
    />
  </div>

  {/* Content Section */}
  <div className="md:w-[48rem]">

    <p className="text-gray-700 text-md leading-relaxed text-justify">
      We are a leading firm of Chartered Accountants based at Ranchi and Ramgarh providing a plethora of services relating to Taxation, Audit, Accounting, Corporate Matters, Finance, and Consultancy. We are specialized in Income Tax Consultancy, GST Consultancy, Statutory and Internal Audits, Project Financing and Project Consultancy, Preparation and Presentation of Projected Financial Statements, Corporate Law Matters, Financial and Tax Planning, Management Consultancy services, etc.
    </p>
    <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
      Our firm has worked for a number of high-profile clients, including companies, banks, trusts & societies (charitable & educational), firms, and individuals, and given results to their best satisfaction.
    </p>
    <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
      <span className="font-semibold">"Client Satisfaction"</span>, these two words embody the way we work—flexible, integrated, and tailored to specific client situations.
    </p>
    <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
      Our work style is that of partnering change, and we play the role of a facilitator. In this process, we work with our clients to augment internal resources and strengthen capabilities.
    </p>
    <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
      Our objective is to ensure quality service and unquestioned integrity in our work methods. We try and evolve alternatives that are customized, practical, unique, and foresighted.
    </p>
    <p className="text-gray-700 text-md mt-2 leading-relaxed text-justify">
      To a large extent, this is due to the fact that we have access to the expertise that is available at different places but is delivered locally to our clients, under one roof.
    </p>
  </div>
  </div>
</section>

      <Footer/>
    </div>
    </>
  )
}

export default HomePage
