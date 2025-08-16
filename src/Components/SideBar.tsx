import { NavLink } from "react-router";
import cn from "../Utils/Styles";
import CardWrapper from "../Wrappers/CardWrapper";
import WrapperIcon from "./Icon";
import Text from "./Text";
import { Home, LogOut, Menu, PieChart, Settings, Stars, Trophy, Users } from "lucide-react";
import { useRef } from "react";
import Postion from "./Position";

const SideBar = () => {
    const asideBar = useRef<HTMLDivElement>(null);


    return (
        <div className="md:basis-[25%] relative md:z-0 z-10 bottom-0 md:h-full pb-4 md:pb-0">
            <CardWrapper className="w-full md:h-full md:shadow-xl md:p-6 md:rounded-xl rounded-none shadow-none p-1 md:bg-white bg-white/10">
                <button onClick={() => {
                    if (!asideBar.current) return;

                    asideBar.current.classList.toggle("-translate-x-full");
                    asideBar.current.classList.toggle("bg-white");

                }} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none ring-2 ring-gray-400">
                    <WrapperIcon Element={Menu} />
                </button>

                <div ref={asideBar} className="absolute md:right-0 md:top-0 right-7/12 left-0 top-[56px] z-40 bottom-0 -translate-x-full md:translate-x-0 transition-all duration-200 flex flex-col justify-between h-screen" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto flex flex-col gap-y-2">

                        <div className="flex flex-row gap-x-3 items-center">
                            <WrapperIcon Element={Stars} ElementProps={{
                                className: "text-white font-medium"
                            }} className="bg-linear-to-r from-cyan-500 to-blue-500 p-2 rounded-lg" />

                            <div className="flex flex-col gap-y-0.5">
                                <Text text="SpeakGenie" className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 font-medium text-lg" />
                                <Text text="Admin Panel" className="text-gray-500 text-sm font-medium" />
                            </div>
                        </div>

                        <div className="h-0.5 bg-gray-200"></div>

                        <ul className="font-medium flex flex-col gap-y-2">
                            <li>
                                <NavLink to={"/"} className={(data) => {
                                    const { isActive } = data;

                                    return cn("text-lg font-medium rounded-md px-2 py-2 flex flex-row gap-x-2", isActive ? "bg-blue-500 text-white" : "text-gray-700 bg-transparent")
                                }}><WrapperIcon Element={Home} className="font-medium " />
                                    <Text text="Dashboard" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/leaderboard"} className={(data) => {
                                    const { isActive } = data;

                                    return cn("text-lg font-medium flex gap-x-2 rounded-md px-2 py-2", isActive ? "bg-blue-500 text-white" : "text-gray-700 bg-transparent")
                                }}><WrapperIcon Element={Trophy} className=" font-medium " />
                                    <Text text="Leaderboard" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/students"} className={(data) => {
                                    const { isActive } = data;

                                    return cn("text-lg font-medium flex gap-x-2 rounded-md px-2 py-2", isActive ? "bg-blue-500 text-white" : "text-gray-700 bg-transparent")
                                }}><WrapperIcon Element={Users} className=" font-medium " />
                                    <Text text="Students" />
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to={"/analytics"} className={(data) => {
                                    const { isActive } = data;

                                    return cn("text-lg font-medium flex gap-x-2 rounded-md px-2 py-2", isActive ? "bg-blue-500 text-white" : "text-gray-700 bg-transparent")
                                }}><WrapperIcon Element={PieChart} className=" font-medium " />
                                    <Text text="Analytics" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/settings"} className={(data) => {
                                    const { isActive } = data;

                                    return cn("text-lg font-medium flex gap-x-2 rounded-md px-2 py-2", isActive ? "bg-blue-500 text-white" : "text-gray-700 bg-transparent")
                                }}><WrapperIcon Element={Settings} className=" font-medium " />
                                    <Text text="Settings" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="h-full px-3 py-4 overflow-y-auto flex flex-col gap-y-2 justify-end items-end">
                        <div className="flex flex-row gap-x-3 items-center">
                            <Text text="s" className="bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center p-2 rounded-xl h-10 aspect-square text-white font-medium capitalize " />

                            <div className="flex flex-col gap-y-0.5">
                                <Text text="School Admin" className="font-semibold  text-sm" />
                                <Text text="School Admin" className="text-gray-500 text-[12px] font-medium" />
                                
                                <Text text="Greenwood Elementry" className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent capitalize text-sm" />
                            </div>

                            <WrapperIcon Element={LogOut} ElementProps={{
                                className: "text-gray-400 h-4 w-4"
                            }} />
                        </div>
                    </div>
                </div>
            </CardWrapper>


        </div>
    )
}

export default SideBar;