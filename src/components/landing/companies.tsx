import React from 'react';
import Image from 'next/image';

const Companies = () => {
  return (
    <div className='w-full bg-white dark:bg-background py-[20px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <Image src={'/company-logo-1.png'} alt='company logo' width={100} height={100}/>
                  <Image src={'/company-logo-2.png'} alt='company logo' width={100} height={100}/>
                  <Image src={'/company-logo-3.png'} alt='company logo' width={100} height={100}/>
                  <Image src={'/company-logo-4.png'} alt='company logo' width={100} height={100}/>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies