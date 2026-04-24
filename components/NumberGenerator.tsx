"use client"
import { useState } from "react"

export default function NumberGenerator(){
    const [number, setNumber] = useState(Math.floor(Math.random() * (9999999999999999 - 100000000000 + 1)) + 100000000000)

    return (
        <div className="flex flex-col justify-around bg-[#AFFF5D] w-140 h-90 rounded-[30] pt-10 pb-10">
            <div className="mr-auto ml-auto">
                <p className="text-[#4C5C18] text-3xl font-semibold mb-1">This is your account number.</p>
                <p className="text-[#4C5C18] text-3xl font-semibold">Save it - you'll need it to log in.</p>
            </div>
            <p className="text-[#709200] text-4xl font-semibold ml-auto mr-auto">{number.toString().replace(/\d{4}(?=.)/g, '$& ')}</p>
            <div onClick={() => navigator.clipboard.writeText(number.toString())} className="cursor-pointer flex justify-center bg-[#C6FF0E] h-16 w-100 rounded-[10] ml-auto mr-auto">
                <p className="text-[#709200] text-3xl font-semibold mt-auto mb-auto">Copy</p>
            </div>
        </div>
    )
}