import { NavLink } from 'react-router-dom';

const MenuBar = () => {
     return (
          <div className='   pt-7  flex flex-col gap-5'>
               <NavLink href="/">হোম </NavLink>
               <NavLink href="/">কোর্স এক্সেস </NavLink>
               <NavLink href="/"> ড্যাশবোর্ড</NavLink>
               <NavLink href="/">লিডারবোর্ড </NavLink>
               <NavLink href="/"> লাইভ সেশনস</NavLink>
               <NavLink href="/"> সাপোর্ট চ্যানেল</NavLink>


          </div>
     );
};

export default MenuBar;