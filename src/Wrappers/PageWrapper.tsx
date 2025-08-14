import { Outlet } from "react-router"

const PageWrapper = () => {

    return (
        <div className="min-h-screen w-screen bg-page flex flex-row pr-10 pt-6">
            <div className="basis-[20%] grow-1">

            </div>
            <Outlet />
        </div>
    )
}

export default PageWrapper