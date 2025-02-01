import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#4D869C] text-white py-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Other Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://icai.org/" className="hover:underline">
                  Institute of Chartered Accountants of India
                </a>
              </li>
              <li>
                <a
                  href="https://www.incometax.gov.in/iec/foportal/"
                  className="hover:underline"
                >
                  Income Tax Department of INDIA
                </a>
              </li>
              <li>
                <a
                  href="https://www.mca.gov.in/content/mca/global/en/home.html"
                  className="hover:underline"
                >
                  Ministry of Corporate Affairs
                </a>
              </li>
              <li>
                <a href="https://www.gst.gov.in/" className="hover:underline">
                  Goods and Tax Services [GST]
                </a>
              </li>
              <li>
                <a href="https://rbi.org.in/" className="hover:underline">
                  Reserve Bank of India [RBI]
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-sm text-white hover:text-gray-200 transition "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-white hover:text-gray-200 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-sm text-white hover:text-gray-200 transition"
                >
                  Team JPC
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-sm text-white hover:text-gray-200 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://www.facebook.com/jainpoddarco"
              className="px-4 py-2 "
            >
              Follow us : <FacebookRoundedIcon />
            </a>
            <div className="flex flex-col items-center mt-4">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=260,h=238,fit=crop/Y4L809DEXbT2ajlj/412658712_806532011194524_595915117869892154_n-mk3ypq66z7ijoz6G.jpg"
                alt="QR Code"
                className="w-24 h-24"
              />
              <p className="mt-2">Scan for Knowledge Updates</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-4 text-center text-sm text-white mt-4">
          © {new Date().getFullYear()} Terms & Conditions | Privacy Policy. All
          rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
