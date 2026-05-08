"use client"
import { GetBackButton } from '@/components/GetBackButton'
import Link from 'next/link'

const OfferContainer = ({name, price, first_perk, second_perk, third_perk})=>{
    const perks = [first_perk, second_perk, third_perk]
    return(
        <div className="flex flex-col justify-evenly bg-[#AFFF5D] w-140 h-100 rounded-[30] ">
            <div className="pl-10 pr-10 mt-8">
                <p className="text-[#4C5C18] text-4xl font-bold mb-2">{name}</p>
                <p className="text-[#4C5C18] text-xl font-bold">{price}</p>
            </div>
            <div className="flex flex-col pl-10 pr-10 mb-5 gap-5">
                {perks.map((perk)=>[
                    <p className='text-[#709200] text-2xl'>
                        {perk}
                    </p>
                ])}
            </div>
        </div>
    )
}

export default function Page(){
    return(
        <>
            <GetBackButton/>
            <div className='flex flex-col'>
                <div className="flex flex-col sm:flex-row items-center justify-center h-full w-full max-w-[1500px] gap-10">
                    <OfferContainer name={"Free"} price={"$0/month"} first_perk={"Mobile app"} second_perk={"Rate limit 5 calls/day"} third_perk={"Social Media image generator"}/>
                    <OfferContainer name={"Growth"} price={"$5/month"} first_perk={"Upload API access"} second_perk={"Password protected photos"} third_perk={"Everything in free"}/>
                    <OfferContainer name={"Enterprise"} price={"Custom"} first_perk={"Unlimited* API calls"} second_perk={"Custom volume"} third_perk={"Everything in Grow"}/>
                </div>

            </div>
        </>
    )
}