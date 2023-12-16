


import { FaArrowLeft, FaPlay, FaRegCopyright, FaVideoSlash } from 'react-icons/fa';
import Container from '../../Components/Container/Container';
import './index.css'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GrKeyboard } from 'react-icons/gr';
import { IoIosArrowDown, IoMdSearch } from 'react-icons/io';
import ProgressBar from '@ramonak/react-progress-bar';
import { Classes } from '../../utilities/Class';
import { MdArrowForwardIos } from 'react-icons/md';
import { useState } from 'react';
const Courses_Access = () => {
     const [active, setActive] = useState(0)
     return (
          <div className=' primaryBg   py-16  '>

               <Container>

                    <div className=' grid md:grid-cols-3 gap-9 w-full  p-2 overflow-hidden'>

                         <div className=' md:col-span-2 w-full'>

                              <div className=' '>
                                   <div className=' w-full h-[250px]  md:h-[401px] p-4 bg-[#151E33] rounded-[16px] flex justify-center  items-center' >
                                        <div className=' bg-[#1E293B]  rounded-full   p-7 cursor-pointer' >
                                             <FaPlay size={30} className='text-[#0F172A]' />
                                        </div>

                                   </div>
                                   <div className=' flex justify-between flex-wrap gap-2 items-center  pt-10'>
                                        <div className=" inline-block  my-2 sm:my-0 ">
                                             <div className=" bg-[#0284C7]  cursor-pointer  w-full border border-[#f8fafc14] rounded-[32px] px-[25px] py-[5px] flex items-center   justify-center  gap-2">
                                                  <FaArrowLeft className="  -mt-1 secondColor" size={"14px"} />
                                                  <p className=" text-[12px] secondColor">আগের লেসন</p>
                                             </div>
                                        </div>
                                        <div className=" inline-block  my-2 sm:my-0 ">
                                             <div className=" bg-[#0284C7]  cursor-pointer  w-full border border-[#f8fafc14] rounded-[32px] px-[25px] py-[5px] flex items-center   justify-center  gap-2">
                                                  <p className=" text-[12px] secondColor">পরের লেসন</p>
                                                  <FaArrowRightLong className=" -mt-1 secondColor" size={"14px"} />
                                             </div>
                                        </div>
                                   </div>
                                   <div className=' py-6'>
                                        <div className=' h-[1px]  bg-[#F8FAFC14] w-full'>  </div>
                                        <div className='py-4 flex  flex-wrap justify-between gap-2 items-center'>
                                             <div className='flex items-center gap-2 cursor-pointer text-[#EAB308]'>
                                                  <FaRegCopyright size={16} className='text-[]' />
                                                  <small>কপিরাইট</small>
                                             </div>
                                             <div className='flex items-center gap-2 cursor-pointer text-[#64748B]'>
                                                  <GrKeyboard size={16} className='text-[]' />
                                                  <small>কিবোর্ড শর্টকাট</small>
                                             </div>
                                             <div className='flex items-center gap-2 cursor-pointer text-[#F43F5E]'>
                                                  <FaVideoSlash size={16} className='text-[]' />
                                                  <small>ভিডিও চলছেনা?</small>
                                             </div>
                                             <div className='flex items-center gap-2 cursor-pointer text-[#F43F5E]'>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                       <path d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 6.60938 2.67656 5.33125 3.49219 4.33125L11.6687 12.5078C10.6687 13.3234 9.39062 13.8125 8 13.8125ZM12.5078 11.6687L4.33125 3.49219C5.33125 2.67656 6.60938 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 9.39062 13.3234 10.6687 12.5078 11.6687Z" fill="#F43F5E" />
                                                  </svg>
                                                  <small>কুইজ নেই</small>
                                             </div>
                                        </div>

                                        <div className=' h-[1px]  bg-[#F8FAFC14] w-full'></div>
                                   </div>

                                   <div>
                                        <button className=' text-[#E2E8F0] py-3 px-4 border-b-2 border-[#0284C7] bg-[#1E293B]'>ভিডিও ডেসক্রিপশন</button>
                                        <div className=' h-[1px]  bg-[#F8FAFC14] w-full'>  </div>
                                   </div>
                                   <div className=' py-5'>
                                        <h1 className='  leading-[28px] text-[16px]  font-medium text-[#FFF]'>1.7 Action Payloads and Creators</h1>
                                        <p className=' leading-[24px] p-0 primaryColor text-start text-[13px]'>Action Creators Why need</p>
                                   </div>

                                   <div>
                                        <div className=' h-[1px]  bg-[#F8FAFC14] w-full'>  </div>
                                        <p className=' text-start pt-5  leading-[28px]   primaryColor text-[16px]'>এই ভিডিও তে আমরা বুঝবো কি ভাবে প্যারামিটারের মাধ্যমে ডাইনামিক ভ্যালু পাস করা যায় এবং সেই অনুযায়ী ডাইনামিক ভাবে ইনক্রিমেন্ট ও ডিক্রিমেন্ট করতে পারি এপ্লিকেশনের চাহিদা অনুযায়ী।</p>

                                   </div>

                              </div>

                         </div>
                         <div className='  w-full md:col-span-1'>
                              <div className=' max-h-[575px] w-full  overflow-y-scroll moduleScrollBar  border-2 border-[#f8fafc0f] rounded-[8px] p-2'>
                                   <div className=' w-full flex items-center gap-2 bg-[#1E293B] p-3  rounded-[4px] '>
                                        <IoMdSearch className=' text-white' size={18} />
                                        <input className=' w-full bg-transparent outline-none border-none  primaryColor' type="text" placeholder='কোর্স লেসন সার্চ করুন' name="" id="" />
                                   </div>
                                   <div className=' mt-4'>
                                        <div>
                                             <h1 className=' text-[#FFFFFF] text-[14pxs] '> 1/14 টি মডিউল শেষ করেছেন · অগ্রগতি  7.14%</h1>
                                             <p className=' text-start text-[13px] text-[#4B5563]  leading-3'>সার্টিফিকেট পেতে সবগুলো মডিউল শেষ করুন</p>

                                             <div className=" my-2 relative">
                                                  <ProgressBar margin="2px" bgColor={"#099268"} height={"8px"} baseBgColor={"#1E293B"} labelSize="0px" completed={12.5} />;
                                             </div>
                                        </div>



                                        <div className=' w-11/12'>
                                             {
                                                  Classes?.map((item, index) => <div onClick={() => setActive(index)} key={index}>
                                                       <div>
                                                            <div className=' flex  justify-start gap-3'>
                                                                 <div className='  mt-[14px]'>

                                                                      {
                                                                           active == index ? <IoIosArrowDown className='  text-[#FFFFFF]' size={16} /> : <MdArrowForwardIos className='  text-[#FFFFFF]' size={16} />
                                                                      }

                                                                 </div>
                                                                 <h2 className=' cursor-pointer my-2 text-[18px] text-[#94A3B8] font-normal leading-[ 18.4px]'> {item?.name} </h2>
                                                            </div>
                                                            {/* <div className=' h-[1px]  bg-[#F8FAFC14] w-full'>  </div> */}

                                                            {
                                                                 active == index ? <div className=' py-2'>
                                                                      {
                                                                           item?.subClass?.map((item, index) => <div className=' py-4 cursor-pointer' key={index}>
                                                                                <div className=' flex items-start gap-2'>
                                                                                     <IoIosArrowDown className='  text-[#FFFFFF]' size={16} />
                                                                                     <h2 className=' text-[#94A3B8] text-[12px]'>  {item?.videoTime}  <span> | ডেডলাইন: </span> {item?.dataLine} </h2>
                                                                                </div>

                                                                           </div>)

                                                                      }
                                                                 </div> : null
                                                            }


                                                       </div>
                                                  </div>)
                                             }
                                        </div>
                                   </div>


                              </div>

                         </div>

                    </div>

               </Container>

          </div>
     );
};

export default Courses_Access;