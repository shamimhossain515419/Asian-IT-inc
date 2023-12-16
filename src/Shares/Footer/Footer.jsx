import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import paymentImage from "../../assets/IMAGE (3).png"

const Footer = () => {
     return (
          <div>
               <div className=" py-3">
                    <hr className=" w-full h-[2px]  bg-[#f8fafc0a]" />
               </div>


               <div className=" pt-[70px]">

                    <Container>

                         <div className=" md:flex   md:flex-row-reverse  justify-between py-5">
                              <div className="  flex justify-center md:justify-start gap-5 items-center">
                                   <Link to={'/'}>
                                        <FaFacebook className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link to={'/'}>
                                        <FaInstagram className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link to={'/'}>
                                        <FaYoutube className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link to={'/'}>
                                        <FaLinkedin className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link to={'/'}>
                                        <FaGithub className=" text-[#38BDF8]" size={20} />
                                   </Link>
                              </div>
                              <div className="  pt-5 md:pt-0  flex justify-center md:justify-start gap-3 items-center ">
                                   <Link className="  font-medium text-[13px] text-[#64748B]" to={'/'}> ডিসকোর্ড সাপোর্ট চ্যানেল </Link>
                                   <Link className=" font-medium text-[13px] text-[#64748B]" to={'/'}>  আমাদের সম্পর্কে</Link>
                                   <Link className=" font-medium text-[13px] text-[#64748B]" to={'/'}> যোগাযোগ </Link>

                              </div>

                         </div>

                         <div>
                              <div className="  py-3">
                                   <hr className=" w-full h-[1px] bg-[#CBD5E11A]" />
                              </div>
                              <div className=" w-full py-4">
                                   <img className=" w-full" src={paymentImage} alt="" />
                              </div>
                         </div>
                         <div className=" sm:flex  justify-between items-center gap-3 py-5">
                              <p className=" text-[#64748B] text-[14px]"> কপিরাইট ©2023 লার্ন উইথ সুমিত। সর্বস্বত্ব সংরক্ষিত।</p>
                              <div className=" flex justify-center sm:justify-start items-center flex-wrap mt-3 md:mt-0 gap-4">
                                   <Link className=" text-[#64748B] text-[13px]" to={'/'}>সাপোর্টেড ব্রাউজার</Link>
                                   <Link className=" text-[#64748B] text-[13px]" to={'/'}>শর্তাবলি</Link>
                                   <Link className=" text-[#64748B] text-[13px]" to={'/'}>রিফান্ড পলিসি</Link>
                                   <Link className=" text-[#64748B] text-[13px]" to={'/'}>প্রাইভেসি পলিসি</Link>
                              </div>
                         </div>
                    </Container>

               </div>

          </div>
     );
};

export default Footer;