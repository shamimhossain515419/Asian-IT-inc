import { Link, NavLink } from 'react-router-dom';

const MenuBar = ({ setOpen }) => {
     return (
          <div className='  text-white  pt-7  flex flex-col gap-5'>
               <NavLink onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } to="/">হোম </NavLink>
               <NavLink onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } to="/corses-access">কোর্স এক্সেস </NavLink>
               <NavLink onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor  px-[12px] py-[9px] text-[14px]"
               } to="/dashboard"> ড্যাশবোর্ড</NavLink>
               <NavLink onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } to="/leaderboard">লিডারবোর্ড </NavLink>
               <NavLink onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } to="/live-session"> লাইভ সেশনস</NavLink>
               <NavLink onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } to="/support"> সাপোর্ট চ্যানেল</NavLink>
               <Link to={'/profile'} onClick={() => setOpen(true)} className=" inline-block my-2 sm:my-0 ">
                    <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[25px] py-[2px] flex items-center   justify-center  gap-2">
                         <p className=" text-[13px]  text-[#38BDF8]  "> প্রোফাইল </p>
                    </div>
               </Link>


          </div>
     );
};

export default MenuBar;