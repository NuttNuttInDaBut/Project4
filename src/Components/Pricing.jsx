import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../assets/constants'


const Pricing = () => {
  return (
    <div className='mt-20 border-b border-neutral-800 pb-20'>
    <div className="text-3xl sm:text-5xl lg:text-6xl text-center my-10
    tracking-wide">
        Pricing
    </div>

    <div className='flex flex-wrap'>
        {pricingOptions.map((item, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'> 
                <div className='p-10 border border-neutral-700 rounded-xl'>
                    <p className='text-4xl mb-8'>
                        {item.title}
                        {item.title === "Pro" && <span className='
                        bg-gradient-to-r from-orange-500 to-red-400
                        text-transparent bg-clip-text text-sm ml-2 font-bold'>
                            (Most popular)</span>}
                    </p>
                    <p className='mb-8'>
                        <span className='text-5xl mr-1'>
                            {item.price}
                        </span>
                        <span className='text-sm text-neutral-400 tracking-tight'>
                            /Month
                        </span>
                    </p>
                    <ul className='mb-8 space-y-6'>
                    {item.features.map((feature, index) => (
                        <li key={index} className='flex space-x-2'>
                            <CheckCircle2 className=' text-neutral-400' />
                            <span>{feature}</span>
                        </li>
                    ))}
                    </ul>

                    <a href='#' className='w-full inline-flex justify-center items-center
                    text-center tracking-tight text-xl hover:bg-orange-900 transition duration-200
                    border border-orange-900 rounded-lg px-6 py-2'>Subscribe</a>
                </div>
            </div>
        ))}
    </div>

    </div>
  )
}

export default Pricing