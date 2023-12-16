import { GrNotes } from "react-icons/gr";
import { FaLock, FaUserCheck } from "react-icons/fa";
import Container from "../Container/Container";
import profileImage from "../../assets/IMAGE (2).png"
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineCoronavirus } from "react-icons/md";
import { Link } from "react-router-dom";
const Profile = () => {
     return (
          <div className=" py-16">

               <Container>

                    <div className=" flex  gap-3 ">
                         <div className=" w-[250px] border-r-2 border-[#F8FAFC14]">
                              <div className="  w-10/12 ">
                                   <Link to={'/profile'} className=" flex items-center gap-3  my-2 rounded-[3px] bg-[#1E293B] py-2 px-2 ">
                                        <FaUserCheck className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[#0284C7]">প্রোফাইল</p>
                                   </Link>
                                   <Link to={'/'} className=" flex items-center gap-3  my-2 rounded-[3px]  py-2 px-2 ">
                                        <FaLock className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[#94A3B8] text-[14px]  font-semibold ">পাসওয়ার্ড</p>
                                   </Link>
                                   <Link to={'/'} className=" flex items-center gap-3  my-2 rounded-[3px]  py-2 px-2 ">
                                        <GrNotes className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[#94A3B8] text-[14px]  font-semibold ">ট্রানজেকশন</p>
                                   </Link>
                                   <Link to={'/'} className=" flex items-center gap-3  my-2 rounded-[3px]  py-2 px-2 ">
                                        <FaBookOpenReader className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[#94A3B8] text-[14px]  font-semibold ">এনরোলমেন্ট</p>
                                   </Link>
                                   <Link to={'/'} className=" flex items-center gap-3  my-2 rounded-[3px]  py-2 px-2 ">
                                        <MdOutlineCoronavirus className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[#94A3B8] text-[14px]  font-semibold ">কোর্স সার্টিফিকেট</p>
                                   </Link>

                              </div>

                         </div>
                         <div className=" p-3 w-full ">

                              <div>
                                   <div className=" text-start py-3">
                                        <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">প্রোফাইল আপডেট</h1>
                                        <p className="text-start  font-medium text-[13px] text-[#6B7280]">আপনার প্রোফাইল আপডেট করুন</p>
                                   </div>
                                   <hr className=" w-full  h-[2px]  text-[#F8FAFC14]" />
                              </div>


                              <div className=" py-4">

                                   <div>
                                        <form action="" className="  grid md:grid-cols-2 gap-6 xl:gap-12 items-start ">

                                             <div>
                                                  <div className=" w-full py-3">
                                                       <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার পুরো নাম</h1>
                                                       <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">কোর্স কমপ্লিশন সার্টিফিকেটে এই নামটি দেয়া হবে। পরিবর্তন করতে পারবেন না</p>

                                                       <input className=" w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B]" type="text" name="" id="" placeholder="Ex: MD. LITON HOSSAIN" />
                                                  </div>
                                                  <div className=" w-full py-3">
                                                       <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার ইমেইল এড্রেস</h1>
                                                       <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">সব কমিউনিকেশন এই ইমেইল এড্রেসে করা হবে & এটাই আপনার লগইন ইউজারনেম। পরিবর্তন করতে পারবেন না।</p>

                                                       <input className=" w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B]" type="text" name="" id="" placeholder="Ex: asianitinc@gmail.com" />
                                                  </div>
                                                  <div className=" w-full py-2">
                                                       <div className=" flex items-center gap-3 ">
                                                            <img src={profileImage} alt="" />
                                                            <div>
                                                                 <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার পুরো নাম</h1>
                                                                 <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">কোর্স কমপ্লিশন সার্টিফিকেটে এই নামটি দেয়া হবে। পরিবর্তন করতে পারবেন না</p>

                                                            </div>
                                                       </div>
                                                       <input className=" placeholder:bg-[#64748B]] w-full text-[#64748B] md:pl-6 my-2 outline-none border-none px-3 rounded-[4px]" type="file" name="" id="" />
                                                  </div>
                                                  <div className=" w-full py-3">
                                                       <div className="  ">
                                                            <div>
                                                                 <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">আপনার ডিসকোর্ড ইউজারনেম</h1>
                                                                 <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">কোর্সের   <span className=" text-[#38BDF8]">ডিসকোর্ড</span> সাপোর্ট চ্যানেলে এই ইউজারনেমকে এক্সেস দেয়া হবে।একবার দেয়ার পর আর পরিবর্তন করতে পারবেন না।ডিসকোর্ড ইউজারনেম খুঁজে না পেলে  <span className=" text-[#38BDF8]">এখান</span> থেকে গাইড দেখে নিন </p>

                                                            </div>
                                                       </div>
                                                       <div className="  relative ">
                                                            <input className="  relative w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B]" type="text" name="" id="" placeholder="Ex: asianitinc#3221" />
                                                            <div className=" absolute  top-6 right-2">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                      <g clip-path="url(#clip0_4_84)">
                                                                           <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                           <path d="M8 5.33331V7.99998" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                           <path d="M8 10.6667H8.00667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                      </g>
                                                                      <defs>
                                                                           <clipPath id="clip0_4_84">
                                                                                <rect width="16" height="16" fill="white" />
                                                                           </clipPath>
                                                                      </defs>
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div>

                                                  <div className=" w-full py-3">
                                                       <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার মোবাইল নাম্বার</h1>
                                                       <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">পরিবর্তন করতে পারবেন না</p>

                                                       <input className=" w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B]" type="number" name="" id="" placeholder="+8801723626707" />
                                                  </div>
                                                  <div className=" w-full py-3">
                                                       <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার পুরো ঠিকানা</h1>
                                                       <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">এই ঠিকানাটিতে কুরিয়ার সার্ভিসের মাধ্যমে প্রয়োজনীয় ডকুমেন্ট পাঠানো হবে। তাই সঠিক ঠিকানা প্রদান করুন।</p>


                                                       <div className="  relative ">
                                                            <textarea className="  relative w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B]" name="" id="" cols="30" rows="5" placeholder="আপনার মোবাইল নাম্বার"></textarea>
                                                            <div className="absolute top-1/2  right-1 transform -translate-x-1/2 flex justify-end items-center ">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                      <g clip-path="url(#clip0_4_84)">
                                                                           <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                           <path d="M8 5.33331V7.99998" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                           <path d="M8 10.6667H8.00667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                      </g>
                                                                      <defs>
                                                                           <clipPath id="clip0_4_84">
                                                                                <rect width="16" height="16" fill="white" />
                                                                           </clipPath>
                                                                      </defs>
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div className=" py-4">
                                                       <div className=" inline-block my-2 sm:my-0 ">

                                                            <button className="   text-[#FFF]    cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                                                                 তথ্য জমা দিন

                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>

                              </div>
                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default Profile;