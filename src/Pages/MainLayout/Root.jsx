import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="sticky top-0 z-10">
            <Navbar></Navbar>
            </div>
            
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;