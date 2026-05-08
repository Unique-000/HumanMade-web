"use client"
import NumberGenerator from "@/components/NumberGenerator"
import AccountCreation from "@/components/AccountCreation"
import { GetBackButton } from "@/components/GetBackButton"

export default function Page(){
    return(
        <>
        <GetBackButton/>
        <div className="flex sm:flex-row flex-col items-center justify-between h-full w-full max-w-[1500px] sm:bg-transparent bg-[#AFFF5D]">
            <NumberGenerator/>
            <AccountCreation/>
        </div>
        </>
    )
}