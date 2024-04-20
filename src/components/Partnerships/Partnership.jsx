import React from 'react'
import Form from '../Form'

const Partnership = () => {
  return (
<div>
<div className='mt-[100px] mx-auto max-w-[1140px] w-full font-poppins'>
    <div className='mt-[85px]'>
  <h1 className="flex items-center text-center justify-center mb-[15px] font-poppins text-[40px] font-bold">Our Partnerships</h1>
  <p className='font-poppins text-[23px] text-center mb-[25px]'>
  Over the years, we have identified and worked with several brands and organisations that share our mission amd passion to provide better opportunities for less opportune people especially women, girls and children. These brands and organisations are represented below. We are open to more of these partnerships. 
  </p>
  </div>
  </div>

  <div className='mt-[84px] bg-[#f6530834]'>
    <div className='py-[22px] flex flex-col'>
        <div className='flex flex-row gap-[213px] items-center justify-center'>
        <img src="https://miracle.sirv.com/kachem-young-initiative/ShieldedBit%20Logo%201.png" className='object-cover w-[254px] h-[254px] '/>
        <img src="https://miracle.sirv.com/kachem-young-initiative/codeflare-logo-orange%201.png" className='object-cover  w-[396px] h-[112px]' />
        <img src="https://miracle.sirv.com/kachem-young-initiative/IMG_4695%201.png" className='object-cover h-[143px] w-[227px]'/>
        </div>
        <div className='flex flex-row gap-[213px] items-center justify-center'>
        <img src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Image%202023-08-06%20at%203.42%201.png" className='object-cover w-[347px] h-[183px] '/>
        <img src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Image%202023-08-06%20at%203.44%202.png" className='object-cover  w-[396px] h-[203px]' />
        <img src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Image%202023-08-06%20at%203.44%201.png" className='object-cover h-[228px] w-[206px]'/>
        </div>
    </div>
  </div>

  <div className='grid grid-cols-12 py-[49px] px-[256px] bg-[#eff2f5]'>
    <div className='col-span-6'>
        <Form/>
    </div>
    <div className='col-span-6'></div>
  </div>
</div>
  )
}

export default Partnership