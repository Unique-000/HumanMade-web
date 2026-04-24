"use client"
import NumberGenerator from "@/components/NumberGenerator"
import AccountCreation from "@/components/AccountCreation"

export default function Page(){
    return(
        <div className="flex flex-row items-center justify-between h-full w-full max-w-[1500px]">
            <NumberGenerator/>
            <AccountCreation/>
        </div>
    )
}