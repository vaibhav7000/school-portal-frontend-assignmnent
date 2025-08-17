import type React from "react";
import CardWrapper from "../Wrappers/CardWrapper";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import cn from "../Utils/Styles";
import Text from "./Text";
import Pill from "./Pill";
import { Eye, Star } from "lucide-react";
import Button from "./Button";
import ProfileCard from "./ProfileCard";


export interface SchoolLeaderboardProps extends HTMLAttributes<HTMLDivElement> {
    image?: string;
    firstname: string;
    lastname: string;
    standard: number;
    points: number;
    accuracy: number;
    stars: number;
    streak: number;
    iconWrapper?: React.JSX.Element;
    positionElement?: React.JSX.Element;
    index: number,
    imageProps?: ImgHTMLAttributes<HTMLImageElement>;
}

const SchoolLeaderboard = (props: SchoolLeaderboardProps) => {
    const {image, firstname, lastname, index} = props;


    return (
       <CardWrapper icon={props.iconWrapper} postionElement={props.positionElement} className={props.className} >
            <ProfileCard firstname={props.firstname} lastname={props.lastname} image={props.image} imageProps={{
                src: image,
                className: `${cn("outline-3 outline-solid " ,index === 0 && "outline-first-position", index === 1 && "outline-second-postion", index === 2 && "outline-third-position" ,props.imageProps?.className)}`,
                loading: "lazy",
            }} className={cn("relative flex justify-center self-stretch", index < 3 && "bg-amber-200 rounded-full")}
            textImageProps={{
                className: cn("outline-3 outline-solid bg-blue-400 text-white font-medium text-2xl" ,index === 0 && "outline-first-position", index === 1 && "outline-second-postion", index === 2 && "outline-third-position", index >=3 && "outline-blue-200", props.imageProps?.className)
            }}
            icon={index <= 2 ?
                    <div className="absolute left-[48%] bottom-[24px]">
                        {props.iconWrapper}
                    </div> : undefined}
            />

                <Text className="font-semibold text-sm capitalize" text={`${firstname} ${lastname}`} />

                <Text className="text-sm font-light text-gray-500" text={`Class ${props.standard}`} />

                <Pill className={cn("text-white font-medium outline-0 outline-transparent", index === 0 && "bg-first-position", index === 1 && "bg-second-postion", index === 2 && "bg-third-position", index >= 3 && "bg-blue-400")} 
                title={`${props.points} pts`} 
                />

                <Pill className={`bg-green-200 text-green-500 font-medium text-sm outline-0 outline-transparent mt-1`} title={`${props.accuracy}% Accuracy`} />

                <div className="flex flex-row justify-between self-stretch items-center">
                    <div className="flex flex-row gap-x-1 items-center">
                        <Star className="text-yellow-400 w-4 h-4" />
                        <div className="text-sm text-gray-500">{props.stars}</div>
                    </div>

                    <div className="flex flex-row items-center gap-x-1">
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                        <Text className="text-sm text-gray-500" text={`${props.streak} days streak`} />
                    </div>
                </div>

                <Button className="cursor-pointer self-stretch flex flex-row gap-2 outline-2 outline-gray-500 text-gray-600 bg-transparent items-center justify-center font-semibold mt-2 rounded-lg">
                    <Eye className="w-4 h-4" />
                    View Profile
                </Button>
       </CardWrapper>
    )
}

export default SchoolLeaderboard;