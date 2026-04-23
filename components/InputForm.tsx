"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { FileInput } from "@/components/ui/FileInput";
import axios from "axios"

const API_URL = "http://localhost:5000"

export default function InputForm(){
    const router = useRouter();
    const [code, setCode] = useState("")

    function CheckCode(value: string){
        if (value.length == 6){
            axios.get(API_URL+"/api/images/"+value)
            .then(function (response){
                router.push('/photo/'+value);
            })
            .catch(function (error) {
                alert(error)
            })
        }
    }
    
    return(
        <div className="w-[400px] bg-background/50 backdrop-blur-[250px] p-7 rounded-[30] squircle text-[#709200] font-sans font-bold text-sm flex flex-col items-center">
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} value={code} onChange={(value) => {
                setCode(value)
                CheckCode(value)}}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5}/>
            </InputOTPGroup>
            </InputOTP>

            <FileInput/>
        </div>
    )
}