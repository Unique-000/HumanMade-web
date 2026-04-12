import InputForm from "@/components/InputForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-between h-full w-full max-w-[1500px]">
      <InputForm/>

      <div className="w-full flex justify-center">
        <h1 className="font-sans font-extrabold text-[90px] text-[#508B0D] ">Check the reality<br/>In front of your<br/>Eyes.</h1>
      </div>
    </div>
  );
}
