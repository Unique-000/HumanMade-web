"use client"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { FileInput } from "@/components/ui/FileInput";
export default function InputForm(){
    return(
        <div className="w-[400px] bg-background/50 backdrop-blur-[250px] p-7 rounded-[30] squircle text-[#709200] font-sans font-bold text-sm flex flex-col items-center">
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
            </InputOTP>

            <FileInput/>
        </div>
    )
}