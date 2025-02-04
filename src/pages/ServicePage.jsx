import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const serviceDetails = {
  "Statutory Audit": `A statutory audit is a legally required review of financial statements to ensure accuracy and compliance with accounting standards and regulations. It helps in detecting fraud, ensuring transparency, and improving financial credibility. Our firm provides high-quality statutory audit services for businesses, government organizations, and non-profits.`,

  "Internal Financial Controls": `Internal Financial Controls (IFC) refer to the processes designed to ensure the accuracy and reliability of financial reporting, compliance with regulations, and safeguarding of assets. We help businesses establish and strengthen their IFC framework to minimize financial risks and operational inefficiencies.`,

  "Direct Tax Consultancy": `Our direct tax consultancy services cover tax planning, return filing, tax compliance, and representation before tax authorities. We assist businesses and individuals in optimizing their tax liabilities while ensuring full compliance with the Income Tax Act.`,

  "Direct Tax Advisory": `We provide strategic tax advisory services to businesses and individuals, helping them navigate complex tax laws. Our expert team ensures effective tax planning, minimizes risks, and identifies opportunities for tax savings while maintaining compliance with direct tax regulations.`,

  "Corporate Law": `Our corporate law services cover company registration, corporate governance, regulatory compliance, contract drafting, and legal advisory. We help businesses stay compliant with corporate laws and ensure smooth business operations with legally sound strategies.`,

  "Government Audit": `A government audit is an assessment of government financial transactions, policies, and procedures to ensure accountability, transparency, and compliance with regulations. We conduct government audits for various agencies, focusing on fraud detection and efficiency improvements.`,

  "Management Audit": `A management audit evaluates the efficiency and effectiveness of a company’s management processes, internal controls, and decision-making. Our services help businesses identify operational weaknesses, optimize resource utilization, and enhance overall performance.`,

  "Concurrent Audit": `A concurrent audit is a real-time review of financial transactions to detect errors and fraud at an early stage. It is crucial for banks, financial institutions, and large organizations to ensure compliance and operational integrity. We provide expert concurrent audit services to mitigate risks.`,

  "GST Consultancy Services": `Our GST consultancy services cover GST registration, compliance, return filing, audits, and litigation support. We help businesses understand GST laws, claim input tax credits, and minimize tax liabilities while ensuring compliance with GST regulations.`,

  "GST Advisory Services": `We offer expert guidance on GST implications for businesses, including transaction structuring, tax planning, and compliance strategies. Our advisory services ensure that businesses stay ahead of regulatory changes and optimize their GST position.`,

  "Loan Syndication": `Loan syndication involves arranging large-scale financing for businesses through multiple lenders. We assist businesses in structuring and securing loans, negotiating terms, and ensuring smooth fund disbursement for projects and expansions.`,

  "Project Consultancy": `Our project consultancy services help businesses with project planning, financial feasibility studies, risk assessment, and implementation strategies. We assist in securing funding, preparing detailed project reports, and ensuring regulatory compliance.`,

  "Due Diligence": `Due diligence involves a comprehensive review of financial, legal, and operational aspects of a business before a merger, acquisition, or investment. We conduct in-depth due diligence to identify potential risks and provide actionable insights for informed decision-making.`,

  "Legal & Secretarial Services": `We provide legal and secretarial services to ensure corporate compliance, including company incorporation, regulatory filings, board meeting documentation, and corporate restructuring. Our services help businesses meet statutory requirements seamlessly.`,

  "Accounting Solutions": `Our accounting solutions cover bookkeeping, financial statement preparation, payroll processing, and tax accounting. We help businesses maintain accurate financial records and comply with accounting standards while optimizing their financial performance.`,
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const serviceInfo = serviceDetails[serviceName];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#EEF7FF] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-3xl font-bold text-[#4D869C] mb-4">{serviceName}</h1>
          <p className="text-gray-700 text-lg">{serviceInfo || "Details coming soon..."}</p>
          <Link
            to="/#services"
            className="inline-block mt-6 bg-[#4D869C] text-white px-6 py-2 rounded-md hover:bg-[#3B6790] transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
