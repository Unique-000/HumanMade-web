"use client"
import { Login } from '@hugeicons/core-free-icons'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const API_URL = "http://localhost:5000";

export default function Page(){
    const router = useRouter()

    function LoginHandle(){
        if ((document.getElementById("acc") as HTMLInputElement).value.length != 16){
            alert("Enter correct account number")
            return
        }
        axios.post(API_URL + "/api/users/login", {
            login: (document.getElementById("acc") as HTMLInputElement).value
        })
        .then(()=>{
            alert("logged in")
        })
        .catch((err) =>{
            alert(err)
        })
    }

    return(
        <div className="flex flex-row items-center justify-center h-full w-full max-w-[1500px]">
            <div className="flex flex-col justify-around bg-[#AFFF5D] w-140 h-100 rounded-[30] ">
                <div className="pl-10 mt-8">
                    <p className="text-[#4C5C18] text-4xl font-bold mb-1">Log in</p>
                </div>
                <input type="text" id="acc" className="text-[#709200] text-4xl font-semibold ml-15 w-100" placeholder="Account number"></input>
                <div onClick={LoginHandle} className="flex justify-center bg-[#C6FF0E] h-16 w-100 rounded-[10] ml-auto mr-auto cursor-pointer">
                    <p className="text-[#709200] text-3xl font-semibold mt-auto mb-auto">Log In</p>
                </div>
                <div onClick={() => router.push('/register')} className="flex justify-center bg-[#C6FF0E]/25 border-5 border-[#C6FF0E] h-16 w-100 rounded-[10] mb-8 ml-auto mr-auto cursor-pointer">
                    <p className="text-[#709200] text-3xl font-semibold mt-auto mb-auto">Create new account</p>
                </div>
            </div>
        </div>
    )
}