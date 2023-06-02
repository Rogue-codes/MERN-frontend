import Image from 'next/image'
import React from 'react'
import { profile } from '../../../public/assets'

export default function Profile() {
  return (
    <div className='justify-start gap-2 ml-5 mb-[1.25rem] flex items-center'>
        <div className='w-11 h-11 border border-[#6368D9] rounded-full'>
            <Image src={profile} alt=''/>
        </div>
        <p className='text-[#6368D9] text-sm font-medium'>Hello, <br /><span className='text-sm font-bold'>Shafa Salsabilla!</span></p>
    </div>
  )
}
