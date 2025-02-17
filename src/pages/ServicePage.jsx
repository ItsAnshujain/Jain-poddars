import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import '../App.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import RepeatIcon from '@mui/icons-material/Repeat';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AddTaskIcon from '@mui/icons-material/AddTask';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const serviceDetails = {
  "Statutory Audit": {
    icon: <AdUnitsIcon size={24} />,
    description: `A statutory audit is a legally required review of financial statements to ensure accuracy and compliance with accounting standards and regulations. It helps in detecting fraud, ensuring transparency, and improving financial credibility. Our firm provides high-quality statutory audit services for businesses, government organizations, and non-profits.`,
  },
  "Internal Financial Controls": {
    icon: <RepeatIcon size={24} />,
    description: `Internal Financial Controls (IFC) refer to the processes designed to ensure the accuracy and reliability of financial reporting, compliance with regulations, and safeguarding of assets. We help businesses establish and strengthen their IFC framework to minimize financial risks and operational inefficiencies.`,
  },
  "Direct Tax Consultancy": {
    icon: <AttachMoneyIcon size={24} />,
    description: `Our direct tax consultancy services cover tax planning, return filing, tax compliance, and representation before tax authorities. We assist businesses and individuals in optimizing their tax liabilities while ensuring full compliance with the Income Tax Act.`,
  },
  "Direct Tax Advisory": {
    icon: <MarkUnreadChatAltIcon size={24} />,
    description: `We provide strategic tax advisory services to businesses and individuals, helping them navigate complex tax laws. Our expert team ensures effective tax planning, minimizes risks, and identifies opportunities for tax savings while maintaining compliance with direct tax regulations.`,
  },
  "Corporate Law": {
    icon: <GavelIcon size={24} />,
    description: `Our corporate law services cover company registration, corporate governance, regulatory compliance, contract drafting, and legal advisory. We help businesses stay compliant with corporate laws and ensure smooth business operations with legally sound strategies.`,
  },
  "Government Audit": {
    icon: <VerifiedUserIcon size={24} />,
    description: `A government audit is an assessment of government financial transactions, policies, and procedures to ensure accountability, transparency, and compliance with regulations. We conduct government audits for various agencies, focusing on fraud detection and efficiency improvements.`,
  },
  "Management Audit": {
    icon: <AssuredWorkloadIcon size={24} />,
    description: `A management audit evaluates the efficiency and effectiveness of a company’s management processes, internal controls, and decision-making. Our services help businesses identify operational weaknesses, optimize resource utilization, and enhance overall performance.`,
  },
  "Concurrent Audit": {
    icon: <RoomServiceIcon size={24} />,
    description: `A concurrent audit is a real-time review of financial transactions to detect errors and fraud at an early stage. It is crucial for banks, financial institutions, and large organizations to ensure compliance and operational integrity. We provide expert concurrent audit services to mitigate risks.`,
  },
  "GST Consultancy Services": {
    icon: <DisplaySettingsIcon size={24} />,
    description: `Our GST consultancy services cover GST registration, compliance, return filing, audits, and litigation support. We help businesses understand GST laws, claim input tax credits, and minimize tax liabilities while ensuring compliance with GST regulations.`,
  },
  "GST Advisory Services": {
    icon: <AccountBalanceWalletIcon size={24} />,
    description: `We offer expert guidance on GST implications for businesses, including transaction structuring, tax planning, and compliance strategies. Our advisory services ensure that businesses stay ahead of regulatory changes and optimize their GST position.`,
  },
  "Loan Syndication": {
    icon: <CreditScoreIcon size={24} />,
    description: `Loan syndication involves arranging large-scale financing for businesses through multiple lenders. We assist businesses in structuring and securing loans, negotiating terms, and ensuring smooth fund disbursement for projects and expansions.`,
  },
  "Project Consultancy": {
    icon: <AccountTreeIcon size={24} />,
    description: `Our project consultancy services help businesses with project planning, financial feasibility studies, risk assessment, and implementation strategies. We assist in securing funding, preparing detailed project reports, and ensuring regulatory compliance.`,
  },
  "Due Diligence": {
    icon: <CastForEducationIcon size={24} />,
    description: `Due diligence involves a comprehensive review of financial, legal, and operational aspects of a business before a merger, acquisition, or investment. We conduct in-depth due diligence to identify potential risks and provide actionable insights for informed decision-making.`,
  },
  "Legal & Secretarial Services": {
    icon: <AddTaskIcon size={24} />,
    description: `We provide legal and secretarial services to ensure corporate compliance, including company incorporation, regulatory filings, board meeting documentation, and corporate restructuring. Our services help businesses meet statutory requirements seamlessly.`,
  },
  "Accounting Solutions": {
    icon: <BorderColorIcon size={24} />,
    description: `Our accounting solutions cover bookkeeping, financial statement preparation, payroll processing, and tax accounting. We help businesses maintain accurate financial records and comply with accounting standards while optimizing their financial performance.`,
  },
  "Risk Advisory Services": {
    icon: <SchoolIcon size={24} />,
    description: `Our Risk Advisory services help businesses identify, assess, and mitigate financial, operational, and compliance risks. We provide tailored risk management strategies, internal control assessments, and regulatory compliance support to enhance business resilience and ensure long-term success.`,
  },
};
const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (serviceName) => {
    setSelectedService(serviceName);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#EEF7FF] px-6 md:px-12 lg:px-20 py-10">
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-[#4D869C] mb-8">
            Our Services
          </h1>

          {/* Services list with icons in rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.keys(serviceDetails).map((serviceName) => (
              <div
                key={serviceName}
                className="border-[#4D869C] border border-b-4 text-[#4D869C] p-6 cursor-pointer rounded-lg shadow-xl transition transform hover:scale-105"
                onClick={() => openModal(serviceName)}
              >
                <div className="flex items-center justify-center mb-4 font-bold">
                  {serviceDetails[serviceName].icon}
                </div>
                <h3 className="text-lg">{serviceName}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with transparent background */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 modal-overlay flex justify-center items-center z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-[#EEF7FF] border-[#4D869C] border-t-4 p-8 w-1/2 shadow-lg relative z-60"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#4D869C] mb-4 text-center">
              {selectedService}
            </h2>
            <p className="text-gray-700 text-md mb-6 text-justify">
              {serviceDetails[selectedService].description}
            </p>
            <div className="text-center">
              <button
                className="bg-[#4D869C] text-white px-6 py-2 hover:bg-[#6899ac] transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default ServicePage;