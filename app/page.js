import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='grid grid-cols-1 justify-items-stretch'>
      <div>
         <Image src="/banner.png" alt="Trucks Image" layout="responsive" width={1920} height={1080} />
      </div>

      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-3xl font-bold text-yellow-500 underline">Services</h1>
       
      <div className="mt-5 md:grid grid-cols-3 md:space-x-2 ">
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-full h-80' src="/100ton.jpg" alt="100ton crane Image" />
          <div className='px-5 py-4'>
            <div className='font-semibold text-yellow-500 text-xl mb-2 text-nowrap'>Mobile Crane 100Ton Lifting Capacity </div>
            <p className='text-gray-700 text-base'>
            "Meet the German Tarrex Demage 100 Ton Mobile Crane - a powerhouse of lifting capabilities.
             Engineered for precision and strength, this crane is your ultimate solution for heavy-duty lifting operations.
              Trust in its German craftsmanship for reliable performance,"
            </p>
          </div>
        </div>


        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-2'>
          <img className='w-full h-80' src="/50ton.jpg" alt="50ton crane Image" />
          <div className='px-6 py-4'>
            <div className='font-semibold text-yellow-500 text-xl mb-2'>Mobile Crane 50Ton Lifting Capacity </div>
            <p className='text-gray-700 text-base justify-between'>
            Introducing our 50 Ton Mobile Crane, a versatile and reliable solution for your lifting needs. 
            Designed for efficiency and maneuverability,
             this crane is perfect for a wide range of projects, offering stability and precision in every operation
            </p>
          </div>
        </div>


        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-2'>
          <img className='w-full h-80' src="/20ton.jpg" alt="20ton crane Image" />
          <div className='px-6 py-4'>
            <div className='font-semibold text-yellow-500 text-xl mb-2'>Mobile Crane 20Ton Lifting Capacity </div>
            <p className='text-gray-700 text-base'>
            Explore our 20 Ton Mobile Crane, your go-to solution for agile and efficient lifting tasks. 
            With its compact design and robust capabilities,
             this crane is engineered to handle a variety of lifting operations with ease and precision.
            </p>
          </div>
        </div>


        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-2'>
          <img className='w-full' src="/trucks.jpg" alt="Trucks Image" />
          <div className='px-6 py-4'>
            <div className='font-bold text-yellow-500 text-xl mb-2'>Trucks of different Capability</div>
            <p className='text-gray-700 text-base'>
            Explore our extensive range of robust Tata trucks, each tailored to handle diverse weight lifting capacities.
             Discover the perfect solution for your hauling needs with our dependable and powerful fleet of trucks,
             designed to deliver exceptional performance and reliability."
            </p>
          </div>
        </div>


        <div className='max-w-sm rounded overflow-hidden shadow-lg mt-2'>
          <img className='w-full' src="/lowbed.jpg" alt="Low bed Image" />
          <div className='px-6 py-4'>
            <div className='font-bold text-yellow-500 text-xl mb-2'>LowBed Trailor For Heavy Load</div>
            <p className='text-gray-700 text-base'>
            "Discover the epitome of heavy-load transportation with our cutting-edge Lowbed Trailor.
             Designed for optimal stability and strength, our trailors are built to effortlessly handle your heaviest
              equipment and machinery, ensuring secure and efficient transport every time.
             Trust in our industry-leading technology for your oversized cargo needs."
            </p>
          </div>
        </div>


        </div>
      </div>

      <div className='flex flex-col justify-center items-center p-3 border rounded-lg shadow-lg mt-2 '>
        <h2 className="text-3xl font-bold text-yellow-500 mt-4 p-3  underline">Who We Are</h2>
        <h3 className="font-medium text-gray-700 text-base px-4 py-2 mt-2 flex flex-col">
           Established in 2007 in Al Ain, UAE, Badru-Zaman General Transport
            has been a trusted name in the transportation industry. With our 
            unwavering commitment to excellence and customer satisfaction, we
             have built a strong reputation for providing reliable and efficient 
             transportation services for various types of goods.
        </h3>
      </div>

      

      {/* our services segment */}

      

    </div>
  );
};

export default Home;
