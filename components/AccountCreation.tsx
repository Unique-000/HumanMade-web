"use client"
import axios from "axios"
import "../app/globals.css"

const API_URL = "http://localhost:5000"

export default function AccountCreation(){
    function LoginAttempt(){
        if (!(document.getElementById("check") as HTMLInputElement).checked || (document.getElementById("acc") as HTMLInputElement).value.length != 16){
            alert("Check the checkbox and/or enter correct account number")
            return
        }
        axios.post(API_URL + "/api/users/register", {
            login: (document.getElementById("acc") as HTMLInputElement).value
        })
        .then((res) =>{
            console.log(res.data)
            alert("Account created")
        })
        .catch((err) => {
            alert(err)
        })
    }

    return (
        <div className="flex flex-col justify-around bg-[#AFFF5D] w-140 h-120 rounded-[30] ">
            <div className="mr-auto ml-auto pl-10 pr-10">
                <p className="text-[#4C5C18] text-3xl font-semibold mb-1">Enter your account number</p>
                <p className="text-[#4C5C18] text-lg">Your account number is the only identifier you need to use our service. <span className="font-semibold">For security and privacy reasons we cannot show it again after login.</span></p>
            </div>
            <div className="flex justify-center -m-10">
                <input type="checkbox" className="custom-checkbox" id="check"/>
                <p className="text-[#4C5C18] text-xl ml-5 font-semibold mt-auto mb-auto">I confirm that I’ve saved my account number.</p>
            </div>
            <input type="text" id="acc" className="text-[#709200] text-4xl font-semibold ml-auto mr-auto w-100" placeholder="Account number"></input>
            <div onClick={LoginAttempt} className="flex justify-center bg-[#C6FF0E] h-16 w-100 rounded-[10] ml-auto mr-auto -mt-10 cursor-pointer">
                <p className="text-[#709200] text-3xl font-semibold mt-auto mb-auto">Log In</p>
            </div>
        </div>
    )
}