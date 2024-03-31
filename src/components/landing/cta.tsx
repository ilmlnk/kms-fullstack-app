import Image from 'next/image'
import React from 'react'

const CTA = () => {
    return (
        <div className='w-full bg-[#E9F8F3] dark:bg-[#379e7d] py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                <Image src="/ceo.jpg" alt='image' width={650} height={650} className="w-[650px] mx-auto rounded-md shadow-lg" />
                <div>
                    <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-[#42e2b0]'>World&apos;s largest</span> learning platform today </h1>
                    <p className='py-2 text-lg text-slate-200'>Start learning by registering for free</p>
                    <button className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#34af88] hover:bg-[#44bd97] hover:shadow-lg transition duration-150 text-white font-bold'>Sign Up For Free</button>
                </div>
            </div>
        </div>
    )
}

export default CTA