"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react';
import axios from "axios"
import Image from "next/image";
import { apiUrl } from "@/lib/config";
import Link from 'next/link';
import { GetBackButton } from '@/components/GetBackButton';

interface PhotoData {
    url: string;
    takenAt: number;
    localization: string;
    sha256: string;
    phash: string
}

const OpenLinkIcon = ()=>{
    return (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto mr-1 mt-[2] flex items-center'>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg>
    )
}

const CopyValueIcon = ()=>{
    return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto mr-1 mt-[2] flex items-center'>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                    </svg>
    )
}


const DescriptionTags = ({ tagName, tagIcon, photoData }) => {
    const handleCopy = useCallback(async () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(photoData)
            } catch (err) {
                console.error('Failed to copy:', err)
            }
        }
    }, [photoData])

    return (
        <div className="text-white text-lg bg-neutral-400/50 rounded-md flex items-stretch mb-3 overflow-hidden">
            <span className="text-white text-sm bg-[#6FFF00]/75 flex items-center px-2 shrink-0">
                {tagName}
            </span>

            <span className="ml-2 flex items-center truncate min-w-0">
                {photoData}
            </span>

            <button
                type="button"
                onClick={handleCopy}
                className="ml-auto mr-1 my-1 flex items-center justify-center cursor-pointer"
                aria-label={`Copy ${tagName}`}
            >
                {tagIcon}
            </button>
        </div>
    )
}

const CloseUpView = ({photoData, closeUp, setCloseUp})=>{
    return(
        <div className='w-dvw h-dvh flex justify-center flex-col absolute z-10 bg-black/50 backdrop-blur-3xl'>
            <nav className='h-25 w-full px-10 flex items-center justify-end absolute top-0'>
                <div className='h-5 w-5 bg-black' onClick={() => setCloseUp(!closeUp)}></div>
            </nav>
            <div className="w-full h-full flex items-center justify-center overflow-hidden p-10 rounded-4xl">
                <Image
                    src={photoData.url}
                    alt="Verified image"
                    width={600}
                    height={600}
                    className="rounded-4xl max-w-full max-h-full object-contain w-full h-full"
                />
            </div>
        </div>
    )
}


export default function Page(){
    const params = useParams();
    const [photoData, setPhotoData] = useState<PhotoData>()
    const [closeUp, setCloseUp] = useState(false)
    
    useEffect(() =>{
        if (localStorage.getItem("similar") == undefined){
            localStorage.setItem("similar", "false")
        }
        axios.get(apiUrl(`/api/images/${encodeURIComponent(params.tag as string)}`))
        .then(function (response){
            setPhotoData(response.data)
        })
        .catch(function (error) {
            alert(error)
        })
    }, [params.tag])

    if (!photoData) {
        return <div>Loading...</div>
    }

    return(
        <div className='h-dvh w-full flex justify-center items-center flex-col'>
            <GetBackButton/>
            <div className="w-dvw h-dvh absolute overflow-hidden inset-0 -z-50">
              <Image
                src={photoData.url}
                alt=""
                fill
                className="object-cover blur-2xl scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            {closeUp ? <CloseUpView closeUp={closeUp} setCloseUp={setCloseUp} photoData={photoData}/> : <></>}
            <div className='max-w-100'>
                <Image src={photoData.url} alt='Verified image' width={300} height={300}
                className={`rounded-4xl cursor-pointer w-full h-max squircle`}
                onClick={() => setCloseUp(!closeUp)}
                />
                <div className='bg-black/25 backdrop-blur-[1000px] w-full rounded-4xl squircle p-8 mt-10'>
                    <div className='flex items-center mb-2'>
                        {localStorage.getItem("similar") != "true" ? (
                            <>
                            <svg width="10px" height="10px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                                <circle fill="#6FFF00" cx="18" cy="18" r="18"></circle>
                            </svg>
                            <p className='text-white ml-2 pt-[1]'>The same image</p>
                            </>
                        ) : (
                            <>
                            <svg width="10px" height="10px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                                <circle fill="#FFC800" cx="18" cy="18" r="18"></circle>
                            </svg>
                            <p className='text-white ml-2 pt-[1]'>Very similar image</p>
                            </>
                        )}
                    </div>
                    <p className='text-white text-lg'>{photoData.localization}</p>
                    <p className='text-white text-lg mb-2'>{photoData.takenAt != null ? photoData.takenAt : "No time provided"}</p>

                    <DescriptionTags tagName={"SHA256"} tagIcon={<CopyValueIcon/>} photoData={photoData.sha256}/>
                    <DescriptionTags tagName={"pHash"} tagIcon={<CopyValueIcon/>} photoData={photoData.phash}/>
                    <DescriptionTags tagName={"SolScan"} tagIcon={<OpenLinkIcon/>} photoData={photoData.url}/>
                </div>
            </div>
        </div>
    )
}
