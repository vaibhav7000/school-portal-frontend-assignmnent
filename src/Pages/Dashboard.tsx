import { useMemo } from "react";
import PrimaryHeading from "../Components/PrimaryHeading";
import SecondaryHeading from "../Components/SecondaryHeading";
import Text from "../Components/Text";
import ReportCards from "../Components/ReportCards";
import type { ReportCard } from "../Components/ReportCards";
import { BarChart, Eye, Flame, GraduationCap, Hourglass, Medal, Star, Trophy, Users, Zap } from "lucide-react";
import WrapperIcon from "../Components/Icon";
import PieChart from "../Graphs/PieChart";
import type { ChartData, ChartOptions } from "chart.js";
import tailwindColos from "../Utils/Tailwindcolors";
import CardWrapper from "../Wrappers/CardWrapper";
import SchoolLeaderboard from "../Components/SchoolLeaderboard";
import Postion from "../Components/Position";
import type { SchoolLeaderboardProps } from "../Components/SchoolLeaderboard";
import cn from "../Utils/Styles";
import TopScrorerCard from "../Components/TopScorerCard";
import Input from "../Components/Input";
import Dropdown from "../Components/Dropdown";
import AllStudents from "../Components/AllStudents";

const Dashboard = () => {
    const date: Date = useMemo(() => {
        return new Date();
    }, []);

    const schoolLeaderboardData: SchoolLeaderboardProps[] = useMemo(() => {
        const firstname: string = "SwiftJavaa";
        const lastname: string = "Javascript";
        const result: SchoolLeaderboardProps[] = [];

        for (let i = 0; i < 10; i++) {
            const stringIndex = Math.floor(Math.random() * 9);
            const standard = Math.floor(Math.random() * 13);
            const points = Math.floor(Math.random() * 999) + 1;
            const accuracy = Math.floor(Math.random() * 101);
            const stars = Math.floor(Math.random() * 101);
            const streak = Math.floor(Math.random() * new Date().getMonth() + 1);

            result.push({
                image: "",
                firstname: firstname.slice(0, stringIndex + 1),
                lastname: lastname.slice(0, stringIndex + 1),
                points,
                standard,
                accuracy,
                stars,
                streak,
                index: i
            })
        }

        return result;
    }, []);

    const data: ChartData<"pie", number[], string> = {
        labels: ["Excellent (90-100%)", "Good (80-89%)", "Average (70-79%)", "Needs Improvments"],
        datasets: [
            {
                label: "Votes",
                data: [12, 15, 3, 1],
                backgroundColor: [
                    tailwindColos["green"],
                    tailwindColos["blue"],
                    tailwindColos["orange"],
                    tailwindColos["red"],
                ],
                borderColor: [
                    tailwindColos["green"],
                    tailwindColos["blue"],
                    tailwindColos["orange"],
                    tailwindColos["red"],
                ],
                borderWidth: 1
            }
        ]
    };

    const options: ChartOptions<"pie"> = {
        responsive: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                    boxWidth: 10,
                    font: {
                        weight: "normal",
                    },
                    color: "#374151",
                }
            },
            tooltip: {
                enabled: true
            }
        }
    };

    const reportCards: ReportCard[] = useMemo(() => {
        return [{
            text: "Total Students",
            value: 245,
            increment: 12,
            type: "",
            IconWrapper: <WrapperIcon Element={Users} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-blue-500 rounded-lg" />
        }, {
            text: "Total Classes",
            value: 1892,
            increment: 18,
            type: "",
            IconWrapper: <WrapperIcon Element={GraduationCap} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-green-500 rounded-lg" />
        }, {
            text: "Avg. Percentage",
            value: 24,
            increment: 8,
            type: "percentage",
            IconWrapper: <WrapperIcon Element={BarChart} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-purple-500 rounded-lg" />
        }, {
            text: "Top Performer",
            value: 830,
            increment: 5,
            type: "points",
            IconWrapper: <WrapperIcon Element={Hourglass} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-orange-500 rounded-lg" />
        }]
    }, []);


    return (
        <CardWrapper className="rounded-none shadow-none flex flex-col gap-y-10 md:basis-[80%] overflow-scroll pl-4 pr-4 pt-6 sm:basis-full grow-1">
            <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:items-center">

                <div className="flex flex-col gap-y-1">
                    <PrimaryHeading heading="Greenwood Elementry School" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-2xl" />
                    <SecondaryHeading heading="Welcome back, School Admin! Here's your School's overview." className="text-gray-500 text-sm" />
                </div>

                <div>
                    <Text text={`CBSE Board • Last updated: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`} className="text-gray-500 outline-1 outline-gray-300 rounded-lg px-2 py-1 text-sm" />
                </div>
            </div>

            <div>
                <ReportCards className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2" cards={reportCards} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <CardWrapper className="col-start-1 col-end-3 lg:col-start-1 md:col-end-2">

                </CardWrapper>

                <CardWrapper className="col-start-1 col-end-3 lg:col-start-2 md:col-end-3">
                    <div>
                        <PrimaryHeading heading="Performance Distribution" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-xl" />
                        <SecondaryHeading heading="Overall accuracy breakdown across all students" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <PieChart data={data} options={options} />
                    </div>
                </CardWrapper>

                <CardWrapper className="col-start-1 col-end-3">
                    <div className="flex flex-col gap-y-12">
                        <div>
                            <div className="flex flex-row gap-x-1">
                                <WrapperIcon Element={Trophy} ElementProps={{
                                    className: "text-yellow-500",
                                }} />

                                <WrapperIcon Element={Trophy} ElementProps={{
                                    className: "text-blue-400",
                                }} />

                                <PrimaryHeading heading="School Leaderboard - Top 10 Champions" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-xl" />
                            </div>
                            <SecondaryHeading heading="Our highest performing students this months with points and achievements" />
                        </div>


                        <div className="col-start-1 col-end-3 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                            {schoolLeaderboardData.map(data => {
                                return (
                                    <SchoolLeaderboard key={data.index} className="flex flex-col p-6 items-center gap-y-2 overflow-hidden" image={data.image} firstname={data.firstname} lastname={data.lastname} standard={data.standard} points={data.points} accuracy={data.accuracy} stars={data.stars} streak={data.streak} index={data.index} imageProps={{
                                        className: "h-24 w-24 rounded-full flex items-center justify-center"
                                    }} iconWrapper={data.index === 0 ? <WrapperIcon Element={Trophy} ElementProps={{
                                        className: "absolute z-2 -left-2 top-0 w-6 h-6 text-yellow-400"
                                    }} /> : data.index === 1 ? <WrapperIcon Element={Medal} ElementProps={{
                                        className: "absolute z-2 -left-2 top-0 w-6 h-6 text-gray-400"
                                    }} /> : data.index === 2 ? <WrapperIcon Element={Medal} ElementProps={{
                                        className: "absolute z-2 -left-2 top-0 w-6 h-6 text-orange-800"
                                    }} /> : <WrapperIcon Element={Star} ElementProps={{
                                        className: "absolute z-2 -left-2 top-0 w-6 h-6 text-yellow-500"
                                    }} />}
                                        positionElement={<Postion position={`#${data.index + 1}`} className={cn("absolute -right-2 -top-2 rounded-full flex items-center justify-center p-[14px] text-white font-medium text-sm", data.index === 0 && "bg-first-position", data.index === 1 && "bg-second-postion", data.index === 2 && "bg-third-position", data.index > 3 && "bg-blue-400")} />}
                                    />
                                )
                            })
                            }

                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
                            <TopScrorerCard className="outline-2 outline-yellow-400 shadow-none rounded-2xl bg-yellow-100 flex flex-col items-center gap-y-1" Icon={<WrapperIcon Element={Trophy} ElementProps={{
                                className:""
                            }}/>} 
                            Title={<Text text="Top Scorer" className="text-orange-800 font-bold text-sm" />}

                            Description={<div className="text-sm text-yellow-500 flex flex-row gap-1">
                                <Text text={`${schoolLeaderboardData[0].firstname} ${schoolLeaderboardData[0].lastname} - `} />
                                <Text text={`${schoolLeaderboardData[0].points} pts`} />
                            </div>}
                            />
                            
                            <TopScrorerCard className="outline-2 outline-green-400 shadow-none rounded-2xl bg-green-100 flex flex-col items-center gap-y-1" Icon={<WrapperIcon Element={Flame} ElementProps={{
                                className:"text-red-500"
                            }}/>} 
                            Title={<Text text="Longest Streak" className="text-green-800 font-bold text-sm" />}

                            Description={<div className="text-sm text-green-500 flex flex-row gap-1">
                                <Text text={`${schoolLeaderboardData[0].firstname} ${schoolLeaderboardData[0].lastname} - `} />
                                <Text text={`${schoolLeaderboardData[0].streak} days`} />
                            </div>}
                            />

                            <TopScrorerCard className="outline-2 md:col-start-1 md:col-end-3 lg:col-span-1 outline-blue-400 shadow-none rounded-2xl bg-blue-100 flex flex-col items-center gap-y-1" Icon={<WrapperIcon Element={Zap} ElementProps={{
                                className:"text-blue-400"
                            }}/>} 
                            Title={<Text text="Top Scorer" className="text-blue-800 font-bold text-sm" />}

                            Description={<div className="text-sm text-blue-500 flex flex-row gap-1">
                                <Text text={`${schoolLeaderboardData[0].firstname} ${schoolLeaderboardData[0].lastname} - `} />
                                <Text text={`${schoolLeaderboardData[0].points} pts`} />
                            </div>}
                            />
                        </div>

                    </div>
                </CardWrapper>

                <CardWrapper className="col-start-1 col-end-3">
                    <div className="flex flex-col gap-y-12">
                        <div className="flex lg:flex-row justify-between flex-col gap-y-2">
                            <div className="flex flex-col gap-y-1">
                                <PrimaryHeading heading="School Leaderboard - Top 10 Champions" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-xl" />

                                <SecondaryHeading heading="Our highest performing students this months with points and achievements" />
                            </div>

                            <div className="flex gap-x-4 items-center">
                                <Input placeholder="Search Students..." className="outline-1 outline-gray-300 rounded-md  xl:px-10 xl:py-4 px-6 py-4 grow lg:grow-0" />

                                <Dropdown className="outline-1 rounded-md border-0 outline-gray-300 text-gray-500 px-2 py-2" options={[{
                                    label: "All Classes",
                                    value: "All Classes",
                                }, {
                                    label: "Class 1",
                                    value: "Class 1",
                                }]} />
                            </div>
                        </div>
                            
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
                            {schoolLeaderboardData.map(data => {
                                const {firstname, lastname, image, standard, accuracy, points} = data;
                                return (
                                    <AllStudents key={data.index} className="flex flex-row gap-x-2 items-center justify-between px-4 py-4" firstname={firstname} lastname={lastname} image={image} class={standard} accuracy={accuracy} points={points} imageProps={{
                                        className: "h-20 w-20 rounded-full flex items-center justify-center"
                                    }} textImageProps={{
                                        className: "h-14 w-14 rounded-full flex items-center justify-center bg-blue-400 text-white border-2 border-white drop-shadow-xl"
                                    }} 
                                    Icon={<WrapperIcon Element={Eye} ElementProps={{
                                        className: "text-gray-500 h-6 w-6"
                                    }} className="border-1 border-gray-400 px-2 py-1 rounded-lg cursor-pointer" />}
                                    />
                                )
                            })}
                        </div>

                    </div>
                </CardWrapper>

            </div>

        </CardWrapper>
    )
}


export default Dashboard;