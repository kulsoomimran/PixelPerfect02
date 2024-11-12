import React from "react"
import { Inter } from "next/font/google"
import { FaArrowRight } from 'react-icons/fa';


const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});



const Hero = () => {
  return (
    <div className='w-[1920px]  h-[829px] py-[140px] px-[220px] flex items-center bg-[#043873]'>
      <div className={`w-[656px] h-[361px] ${inter.className} flex flex-col gap-[50px] `}>
        <div className='w-[656px] h-[238px] gap-[24px] '>
          <h2 className='w-[656px] h-[154px] text-[64px] font-bold leading-[77.45px] tracking-[-2%] text-left text-white' >Get More Done with whitepace</h2>
          <p className='w-[656px] pt-6 h-[60px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-white'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        </div>
        <div>
          <button className='w-[240px] h-[63px] p-5 gap-[10px]  rounded-lg bg-[#4F9CF9] hover:bg-[#3c8bf3] '>
            <p className='flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>Try Whitepace free <FaArrowRight /></p></button>
        </div>
      </div>
      <div className='w-[824px] h-[549px] gap-1 bg-[#C4DEFD]'></div>
    </div>


  )
}

export default Hero