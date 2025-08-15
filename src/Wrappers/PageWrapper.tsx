import { Outlet } from "react-router"

const PageWrapper = () => {

    return (
        <div className="h-screen w-screen bg-page flex flex-row md:gap-x-10 overflow-hidden">
            <div className="basis-[20%] "></div>
            <Outlet />
        </div>
    )
}

export default PageWrapper