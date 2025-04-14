import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import akhil from "../images/akhil.jpeg"; 
import anish from "../images/anish.jpg"; 
import uttam from "../images/uttam.jpg"; 
import rahul from "../images/rahul.jpg"; 
const teamMembers = [
  {
    name: "CA. Akhil Poddar",
    image: akhil,
    description: "CA. Akhil Poddar is the senior partner of the Firm and is in practice as Chartered Accountant since 2002. He holds bachelor's degree from St. Xavier's College. He also cleared Company Secretary exams in 2002. He has qualified DISA from ICAI.\n\nCompleted Certificate course on Concurrent Audit & Certificate course on IFRS.\n\nExpertise in Accounts, Statutory Audits, Internal Audits, Audits of banks & Govt. Institutions, Cost Audit, Direct Taxation, Due Diligence, Company Law Matters, Finance & Banking related matters etc.\n\nExpertise in Loan Syndication and Investment consultancy."
  },
  {
    name: "CA. Uttam Jain",
    image: uttam,
    description: "CA. Uttam Jain is the senior partner of the Firm and is in practice as Chartered Accountant since 2002.\n\nHe was placed in the merit list of the ICAI in CA Final (All India Rank 30), Inter (All India Rank 36) & Foundation (All India Rank 19) & qualified the ISA/ DISA by ICAI. He also cleared Company Secretary exams in 2002.\n\nCompleted Certificate course on Concurrent Audit & Certificate course on IFRS.\n\nExpertise in Project Consultancy, Statutory Audits, Internal Audits, Audits of banks & Govt. Institutions, Cost Audit, Direct Taxation, Due Diligence, Company Law Matters, Finance & Banking related matters etc.\n\nHis core competency is in Bank Financing Activities, Direct Taxation and Company Law."
  },
  {
    name: "CA. Rahul Saraf",
    image: rahul,
    description: "CA. Rahul Saraf, senior partner of the Firm, joined firm after completion of Chartered Accountancy in 2007. He holds bachelor's degree in Commerce from Calcutta University. He has qualified DISA from ICAI.\n\nCompleted Certificate course on Concurrent Audit.\n\nExpertise in Statutory Audits, Internal Audits, Audits of banks & Govt. Institutions, Cost Audit, Direct Taxation, Due Diligence, Company Law Matters, Project consultancy and Finance matters.\n\nHis core competency and interest areas include Management Audit, Process Audit and consultancy."
  },
  {
    name: "CA. Anish Agarwal",
    image: anish,
    description: "CA. Anish Agarwal is a Commerce Graduate and is in practice as Chartered Accountant since 2016.\n\nExpertise in Statutory Audits, Management Audit, Internal Audits, Audits of banks & Govt. Institutions, Indirect Taxation, Direct Taxation, DGFT Duty Drawback, Due Diligence, Company Law Matters, Finance & Banking related matters etc.\n\nHis core competency is in GST Consultancy, GST Dispute Redressal and Appeal Matters.\n\nHe is a reservoir of knowledge when it comes to matters of GST and other Indirect taxation."
  }
];

const TeamPage = () => {
  return (
    <>
    <Navbar />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#EEF7FF] py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-center"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#4D869C] mb-10"
      >
        TEAM LEADERS OF JPC
      </motion.h2>
      
      <div className="space-y-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg transition-transform 
              ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full sm:w-3/4 md:w-1/3 h-auto mb-4 md:mb-0 rounded-lg"
            />
            <div className="md:w-2/3 md:px-6 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#3B6790] mb-2">{member.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base text-justify whitespace-pre-line">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <Footer />
  </>
  );
};

export default TeamPage;
