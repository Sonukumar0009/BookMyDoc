import React from 'react'
import { assets } from '../assets/assets'
import resizedIcon from '../assets/logoipsum-296.png'; 
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
         {/* <img className='mb-5 w-40' src={assets.logo} alt="" />*/}
          <div className="flex items-center gap-2">
            <img
              onClick={() => navigate('/')}
              className="w-10 h-10 cursor-pointer"
              src={resizedIcon}
              alt="Logo"
            />
            <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" fill="black" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700">
                BookMyDoc
              </text>
            </svg>
          </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>BookMyDoc connects patients with trusted doctors across multiple specialties, making healthcare accessible and hassle-free.Our platform ensures easy appointment booking, transparent fees, and quality medical care at your fingertips.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 8102465590</li>
            <li>Sonukumarpn5658@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ BookMyDoc.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
