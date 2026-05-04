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
                        <p className="text-[#4C5C18] text-4xl font-bold mb-1">Bruno</p>
                    </div>
                    <div className="flex flex-col pl-10 pr-10 mb-5 gap-5">
                        <p className='text-[#709200] text-2xl'>
                            Email: <a href='mailto:bruno.cobbler@gmail.com'>bruno.cobbler@gmail.com</a>
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Telegram: <a href='https://t.me/src_guy'>@src_guy</a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly bg-[#AFFF5D] w-140 h-100 rounded-[30] ">
                    <div className="pl-10 pr-10 mt-8">
                        <p className="text-[#4C5C18] text-4xl font-bold mb-1">Rafał</p>
                    </div>
                    <div className="flex flex-col pl-10 pr-10 mb-5 gap-5">
                        <p className='text-[#709200] text-2xl'>
                            Email: <a href='mailto:'></a>
                        </p>
                        <p className='text-[#709200] text-2xl'>
                            Telegram: <a href=''></a>
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