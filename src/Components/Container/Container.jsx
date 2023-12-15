const Container = ({ children }) => {
     return (

          <div className='max-w-[1440px] mx-auto px-2   '>
               <div className=" w-full md:px-8">
                    {children}
               </div>
          </div>
     );
};

export default Container;