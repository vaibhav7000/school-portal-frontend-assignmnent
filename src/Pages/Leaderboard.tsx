import { useMemo } from "react"
import PrimaryHeading from "../Components/PrimaryHeading"
import SecondaryHeading from "../Components/SecondaryHeading"
import Text from "../Components/Text"
import WrapperIcon from "../Components/Icon"
import { BowArrow, Crown, Filter, Flame, Medal, Trophy, Zap } from "lucide-react"
import CardWrapper from "../Wrappers/CardWrapper"
import Input from "../Components/Input"
import Dropdown from "../Components/Dropdown"
import Button from "../Components/Button"
import TopScrorerCard from "../Components/TopScorerCard";
import { useAtomValue } from "jotai"
import students from "../store/student"
import RankCard from "../Components/RankCards"
import cn from "../Utils/Styles"

const Leaderboard = () => {
    const date: Date = useMemo(() => {
        return new Date();
    }, []);

    const finalData = useAtomValue(students);

    return (
       <CardWrapper className="rounded-none shadow-none flex flex-col gap-y-10 md:basis-[80%] overflow-scroll pl-4 pr-4 pt-6 sm:basis-full grow-1">
            <div className="flex md:flex-col md:gap-y-4 lg:flex-row lg:justify-between lg:items-center">

                <div className="flex flex-col  gap-y-1">
                    <div className="flex flex-row gap-x-1">
                        <WrapperIcon Element={Trophy} ElementProps={{
                            className: "text-yellow-500",
                        }} />

                        <WrapperIcon Element={Trophy} ElementProps={{
                            className: "text-blue-400",
                        }}  />

                        <PrimaryHeading heading="School Leaderboard" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-2xl" />
                    </div>
                    
                    <SecondaryHeading heading="Celebrating our top performers and encouraging health completition" className="text-gray-500 text-sm" />
                </div>

                <div>
                    <Text text={`Updated: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`} className="text-gray-500 outline-1 outline-gray-300 rounded-lg px-2 py-1 text-sm" />
                </div>
            </div>

            <CardWrapper className="flex flex-row gap-x-2">
                <Input placeholder="Search Students..." className="outline-1 outline-gray-300 rounded-md px-10 py-4  grow-1" />
                <Dropdown className="outline-1 rounded-md border-0 outline-gray-300 text-gray-500 px-2 py-2" options={[{
                    label: "All classes",
                    value: "All Classes"
                },{
                    label: "Class 1",
                    value: "Class 1"
                }, {
                    label: "Class 2",
                    value: "Class 2"
                }, {
                    label: "Class 3",
                    value: "Class 3"
                }, {
                    label: "Class 4",
                    value: "Class 4"
                }]} />

                <Dropdown options={[{
                    label: "This month",
                    value: "This month"
                }]} className="outline-1 rounded-md border-0 outline-gray-300 text-gray-500 px-2 py-2" />

                <Button className="outline-2 outline-gray-300 flex flex-row gap-x-1 items-center justify-center px-6 py-2 bg-transparent text-gray-400 font-medium">
                    <WrapperIcon Element={Filter} ElementProps={{
                        className: "w-6 h-6"
                    }} />
                    More Filters
                </Button>
                
            </CardWrapper>

            <CardWrapper className="flex flex-col gap-y-8">
                <div className="flex flex-col">
                    <PrimaryHeading heading="Performance Distribution" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-xl" />
                    <SecondaryHeading heading="Overall accuracy breakdown across all students" />
                </div>

                <div className="flex flex-col gap-y-4">
                    {finalData.map(data => {
                        const {firstname, lastname, standard, stars, streak, accuracy, index, points} = data;
                        return (
                            <RankCard key={index} className={cn("outline-1 rounded-xl flex flex-row justify-between items-center" ,index <= 2 ? "bg-yellow-50 outline-yellow-400" : "outline-gray-300 bg-gray-100")} firstname={firstname} lastname={lastname} standard={standard} streak={streak} stars={stars} accuracy={accuracy} index={data.index} points={points} position={index <= 2 ? <WrapperIcon Element={index === 0 ? Trophy : Medal} /> : `#${index + 1}`} positionProps={{
                                className: cn(index === 0 && "bg-first-position text-yellow-800", index === 1 && "bg-second-postion text-gray-900", index === 2 && "bg-orange-400 text-orange-700", index >=3 && "bg-blue-400 text-white font-medium")
                            }} profileIcon={index <= 2 ? <WrapperIcon className="absolute -top-1 right-0 " Element={Flame} ElementProps={{
                                className: "text-red-400 h-4 w-4"
                            }} /> : undefined} image={data.image} />
                        )
                    })}
                </div>
            </CardWrapper>


            <div className="grid grid-cols-4 gap-4">
                <TopScrorerCard 
                    Icon={<WrapperIcon Element={Crown} ElementProps={{
                        className: "w-8 h-8 text-yellow-400"
                    }}/>}
                    Title={<Text text="Current Champion" className="font-semibold text-black text-sm" />}
                    Description={<div>
                        <Text text="Ahan Kumar" className="text-gray-400 text-sm" />
                        <Text text="830 Points" className="text-first-position text-xl font-semibold " />
                    </div>}
                    className="flex flex-col items-center gap-y-1"
                />

                <TopScrorerCard 
                    Icon={<WrapperIcon Element={Flame} ElementProps={{
                        className: "w-8 h-8 text-orange-400"
                    }}/>}
                    Title={<Text text="Longest Streak" className="font-semibold text-black text-sm" />}
                    Description={<div>
                        <Text text="Ahan Kumar" className="text-gray-400 text-sm" />
                        <Text text="15 days" className="text-xl font-semibold text-orange-400" />
                    </div>}
                    className="flex flex-col items-center gap-y-1"
                />

                <TopScrorerCard 
                    Icon={<WrapperIcon Element={Zap} ElementProps={{
                        className: "w-8 h-8 text-yellow-400"
                    }}/>}
                    Title={<Text text="Most Active" className="font-semibold text-black text-sm" />}
                    Description={<div>
                        <Text text="Ahan Kumar" className="text-gray-400 text-sm" />
                        <Text text="68 lessons" className="text-xl font-semibold text-blue-400" />
                    </div>}
                    className="flex flex-col items-center gap-y-1"
                />

                <TopScrorerCard 
                    Icon={<WrapperIcon Element={BowArrow} ElementProps={{
                        className: "w-8 h-8"
                    }}/>}
                    Title={<Text text="Highest Accuracy" className="font-semibold text-black text-sm" />}
                    Description={<div>
                        <Text text="Ahan Kumar" className="text-gray-400 text-sm" />
                        <Text text="96%" className="text-green-500 text-xl font-semibold " />
                    </div>}
                    className="flex flex-col items-center gap-y-1"
                />
            </div>
        </CardWrapper>
    )
}

export default Leaderboard