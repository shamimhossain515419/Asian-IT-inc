import { Outlet } from "react-router-dom";
import Navbar from "../../Shares/Navbar/Navbar";
import Footer from "../../Shares/Footer/Footer";
import GoogleFontLoader from "react-google-font-loader";


const Main = () => {
     return (
          <div>
               <GoogleFontLoader
                    fonts={[
                         {
                              font: 'Hind Siliguri',
                              weights: [400, 700],
                         },
                    ]}
               />
               <div style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    <Navbar></Navbar>

                    <div className=" pt-[60px]">
                     <Outlet></Outlet>
                    </div>

                    <Footer></Footer>
               </div>

          </div>
     );
};

export default Main;