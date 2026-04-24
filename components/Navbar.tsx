"use client"
import { useRouter } from 'next/navigation'

export default function Navbar(){
    const router = useRouter()

    return(
        <div className="flex justify-around pr-2 pl-2 absolute bg-[#DAFF62] w-90 h-10 bottom-10 right-50 rounded-[6]">
            <p className="text-[#508B0D] mt-auto mb-auto text-sm underline">Pricing</p>
            <p className="text-[#508B0D] mt-auto mb-auto text-sm underline">Contact</p>
            <p className="text-[#508B0D] mt-auto mb-auto text-sm underline">Can you spot AI?</p>
            <p onClick={() => router.push('/login')} className="text-[#508B0D] mt-auto mb-auto text-sm underline cursor-pointer">Login</p>
        </div>
    )
}