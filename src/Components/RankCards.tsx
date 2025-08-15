import type { HTMLAttributes } from "react";
import CardWrapper from "../Wrappers/CardWrapper";
import Button from "./Button";
import { Eye, Flame } from "lucide-react";
import Text from "./Text";
import Pill from "./Pill";
import WrapperIcon from "./Icon";
import Postion from "./Position";
import cn from "../Utils/Styles";
import type React from "react";
import ProfileCard from "./ProfileCard";

interface RankCard extends HTMLAttributes<HTMLDivElement> {
    firstname: string;
    lastname: string;
    image: string;
    standard: number;
    points: number;
    accuracy: number;
    streak: number;
    stars: number;
    index: number;
    position: React.ReactNode
    positionProps: HTMLAttributes<HTMLDivElement>;
    profileIcon?: React.JSX.Element;
}

const RankCard = (props: RankCard) => {

    const {firstname, lastname, standard} = props;

    return (
        <CardWrapper className={props.className}>
            <div className="flex flex-row gap-x-4">
                <Postion className={cn("h-6 w-6 rounded-full p-6 flex justify-center items-center", props.positionProps.className)}>
                    {props.position}
                </Postion>

                <ProfileCard firstname={firstname} lastname={lastname} className="w-6 h-6 p-6 rounded-full flex items-center justify-center bg-blue-400 relative" textImageProps={{
                    className: ""
                }} icon={props.profileIcon} />

                <div className="flex flex-col gap-y-2">
                    <Text text={`${firstname} ${lastname}`} />
                    <Text text={`Class ${standard}`} />
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                    <div>
                        <Text text={`${props.points}`} className="text-orange-600 font-semibold text-base"/>
                        <Text text="points" className="text-gray-500 text-sm"/>
                    </div>

                    <Pill title={`${props.accuracy}%`} className="bg-green-300 text-green-500 text-xs outline-0 outline-transparent" />

                    <div className="flex gap-x-1 items-center">
                        <WrapperIcon Element={Flame} ElementProps={{
                            className: "w-4 h-4 text-red-400"
                        }} />
                        <Text text={`${props.streak}`} />
                    </div>
                </div>

                <Button className="cursor-pointer self-end flex flex-row gap-2 outline-2 outline-gray-300 text-gray-600 bg-transparent items-center justify-center font-semibold rounded-lg text-sm px-1 py-1">
                    <Eye className="w-3.5 h-3.5" />
                    View
                </Button>
            </div>
        </CardWrapper>
    )
}

export default RankCard;