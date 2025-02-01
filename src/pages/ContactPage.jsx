import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
      <Navbar className="w-full relative z-10" />
      <div className="bg-[#EEF7FF] min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
     
        
        {/* Contact Form & Details */}
        <div className=" bg-white shadow-lg p-8 m-4 max-w-5xl w-full">
            <h3 className="text-2xl font-semibold text-[#4D869C] mb-4 text-center">Get In Touch</h3>
          {/* Contact Form */}
          <div className='flex flex-col md:flex-row'>
          <div className="md:w-1/2 p-4">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-md focus:outline-none" required />
              <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md focus:outline-none" required />
              <input type="tel" placeholder="Mobile Number" className="p-2 border border-gray-300 rounded-md focus:outline-none" required />
              <textarea placeholder="Message" rows="4" className="p-2 border border-gray-300 rounded-md focus:outline-none" required></textarea>
              <button className="bg-[#4D869C] text-white py-2 rounded-md hover:bg-[#3B6790] transition">Submit</button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="md:w-1/2 p-4 flex flex-col ">
            <div className="text-gray-700 space-y-4">
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
                <p>Mobile: +91-81023 19400</p>
                <p>Phone: (0651) 253 0318 / (0651) 297 2617</p>
                <p>Email: jainpoddarco@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
