"use client"
import axios from "axios"
import "../app/globals.css"
import { useRouter } from 'next/navigation'
import { apiUrl } from '@/lib/config';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useState } from "react";

export default function AccountCreation(){
    const [accNumber, setAccNumber] = useState(String);
    const router = useRouter();

    function LoginAttempt(){
        if (!(document.getElementById("check") as HTMLInputElement).checked || accNumber.length != 16){
            alert("Check the checkbox and/or enter correct account number")
            return
        }
        axios.post(apiUrl("/api/users/register"), {
            login: accNumber
        })
        .then(() =>{
            localStorage.setItem("acc_num", accNumber)
            router.push('/')
        })
        .catch((err) => {
            alert(err)
        })
    }

    function CheckAcc(value: string) {
        
    }

    return (
        <div className="flex flex-col justify-center bg-[#AFFF5D] w-full sm:w-140 h-120 rounded-[30] p-10 space-y-10">
            <div className="">
                <p className="text-[#4C5C18] text-3xl font-semibold mb-1">Enter your account number</p>
                <p className="text-[#4C5C18] text-lg">Your account number is the only identifier you need to use our service. <span className="font-semibold">For security and privacy reasons we cannot show it again after login.</span></p>
            </div>
            <div className="flex flex-col space-y-2 text-[#709200] ">
                            <p className="font-bold">Account number</p>
                            <InputOTP maxLength={16} pattern={REGEXP_ONLY_DIGITS} value={accNumber} onChange={(value) => {
                                setAccNumber(value)}}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} isLogin={true}/>
                                <InputOTPSlot index={1} isLogin={true}/>
                                <InputOTPSlot index={2} isLogin={true}/>
                                <InputOTPSlot index={3} isLogin={true}/>
                                <InputOTPSlot index={4} isLogin={true}/>
                                <InputOTPSlot index={5} isLogin={true}/>
                                <InputOTPSlot index={6} isLogin={true}/>
                                <InputOTPSlot index={7} isLogin={true}/>
                                <InputOTPSlot index={8} isLogin={true}/>
                                <InputOTPSlot index={9} isLogin={true}/>
                                <InputOTPSlot index={10} isLogin={true}/>
                                <InputOTPSlot index={11} isLogin={true}/>
                                <InputOTPSlot index={12} isLogin={true}/>
                                <InputOTPSlot index={13} isLogin={true}/>
                                <InputOTPSlot index={14} isLogin={true}/>
                                <InputOTPSlot index={15} isLogin={true}/>
                            </InputOTPGroup>
                            </InputOTP>
                        </div>
                <div className="flex justify-center flex-row w-full">
                    <input type="checkbox" className="custom-checkbox" id="check"/>
                    <p className="text-[#4C5C18] text-xl ml-5 font-semibold mt-auto mb-auto">I confirm that I’ve saved my account number.</p>
                </div>
                <div onClick={LoginAttempt} className="flex justify-center bg-[#C6FF0E] h-10 w-full rounded-[10] cursor-pointer">
                    <p className="text-[#709200] text-xl font-semibold mt-auto mb-auto">Log In</p>
                </div>
        </div>
    )
}
