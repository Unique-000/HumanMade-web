"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import axios from "axios"
import Image from "next/image";

interface PhotoData {
    url: string;
    lat: number;
    lng: number;
    takenAt: number;
}

const API_URL = "http://localhost:5000"

export default function Page(){
    const params = useParams();
    const [photoData, setPhotoData] = useState<PhotoData>()
    const [location, setLocation] = useState<string>("No location provided")

    function GetLocation(lat: number, lng: number){
        return "Location"; //gets the exact location using provided lat and lng
    }

    useEffect(() =>{
        axios.get(API_URL+"/api/images/"+params.tag)
        .then(function (response){
            setPhotoData(response.data)
            if (response.data.lat != null && response.data.lng != null){
                GetLocation(response.data.lat, response.data.lng)
            }
        })
        .catch(function (error) {
            alert(error)
        })
    }, [params.tag])

    if (!photoData) {
        return <div>Loading...</div>
    }

    return(
        <div className=''>
            <Image src={photoData.url} alt='Verified image' width={700} height={700}
            className='rounded-[30]'/>
            <div className='bg-neutral-300/30 w-100 h-70 rounded-[30] p-8 m-auto mt-10'>
                <div className='flex items-center mb-2'>
                    <svg width="10px" height="10px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                        <circle fill="#6FFF00" cx="18" cy="18" r="18"></circle>
                    </svg>
                    <p className='text-white ml-2 pt-[1]'>The same image</p>
                </div>
                <p className='text-white text-lg'>{location}</p>
                <p className='text-white text-lg mb-1'>{photoData.takenAt != null ? photoData.takenAt : "No time provided"}</p>
                <p className='text-white text-lg bg-neutral-200/30 rounded-[5] flex items-stretch mb-3'>
                    <span className='text-white text-sm bg-[#6FFF00]/75 rounded-[5] flex items-center px-2'>SHA256</span>
                    <span className='ml-1 flex items-center'>example</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto mr-1 mt-[2] flex items-center'>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                    </svg>
                </p>
                <p className='text-white text-lg bg-neutral-200/30 rounded-[5] flex items-stretch mb-3'>
                    <span className='text-white text-sm bg-[#6FFF00]/75 rounded-[5] flex items-center px-2'>pHash</span>
                    <span className='ml-1 flex items-center'>example</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto mr-1 mt-[2] flex items-center'>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                    </svg>
                </p>
                <p className='text-white text-lg bg-neutral-200/30 rounded-[5] flex items-stretch mb-3'>
                    <span className='text-white text-sm bg-[#6FFF00]/75 rounded-[5] flex items-center px-2'>SolScan</span>
                    <span className='ml-1 flex items-center'>example</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto mr-1 mt-[2] flex items-center'>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg>
                </p>
            </div>
        </div>
    )
}