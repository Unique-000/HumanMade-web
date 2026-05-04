"use client"
import { Login } from '@hugeicons/core-free-icons'
import { useRouter } from 'next/navigation'

export default function Page(){
    const router = useRouter()

    return(
        <div className='flex flex-col'>
            <div className="flex flex-row items-center justify-center h-full w-full max-w-[1500px] gap-10">
                <div className="flex flex-col justify-evenly bg-[#AFFF5D] w-140 h-100 rounded-[30] ">
                    <div className="pl-10 pr-10 mt-8">
                        <p className="text-[#4C5C18] text-4xl font-bold mb-2">Starter</p>
                        <p className="text-[#4C5C18] text-xl font-bold">$29/mo</p>
                    </div>
                    <div className="flex flex-col pl-10 pr-10 mb-5 gap-5">
                        <p className='text-[#709200] text-2xl'>
                            Included API calls 10,000
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Rate limit 5 req/sec
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Extra calls $0.003 per call
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-[#AFFF5D] w-140 h-100 rounded-[30] ">
                    <div className="pl-10 pr-10 mt-8">
                        <p className="text-[#4C5C18] text-4xl font-bold mb-2">Growth</p>
                        <p className="text-[#4C5C18] text-xl font-bold">$149/mo</p>
                    </div>
                    <div className="flex flex-col pl-10 pr-10 mb-5 gap-5">
                        <p className='text-[#709200] text-2xl'>
                            Included API calls 100,000
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Rate limit 25 req/sec
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Extra calls $0.0015 per call
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-[#AFFF5D] w-140 h-100 rounded-[30] ">
                    <div className="pl-10 pr-10 mt-8">
                        <p className="text-[#4C5C18] text-4xl font-bold mb-2">Enterprise</p>
                        <p className="text-[#4C5C18] text-xl font-bold">$799/mo</p>
                    </div>
                    <div className="flex flex-col pl-10 pr-10 mb-5 gap-5">
                        <p className='text-[#709200] text-2xl'>
                            Included API calls 1,000,000
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Rate limit 100 req/sec
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Custom pricing
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-full w-full max-w-[1500px] mt-10">
                <div className="pl-10 pr-10">
                    <p onClick={() => router.push('/')} className="text-[#4C5C18] text-xl font-bold mb-1 cursor-pointer underline">Home</p>
                </div>
            </div>
        </div>
    )
}