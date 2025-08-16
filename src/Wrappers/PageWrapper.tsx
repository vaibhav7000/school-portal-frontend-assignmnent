import { Outlet } from "react-router"
import SideBar from "../Components/SideBar"

const PageWrapper = () => {

    return (
        <div className="h-screen w-screen bg-page flex flex-col md:flex-row md:gap-x-2 sm:gap-x-0 overflow-hidden">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default PageWrapper