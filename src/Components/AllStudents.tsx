import type { HTMLAttributes, ImgHTMLAttributes } from "react"
import CardWrapper from "../Wrappers/CardWrapper"
import ProfileCard from "./ProfileCard";
import Text from "./Text";
import type React from "react";
import Pill from "./Pill";

interface AllStudentProps extends HTMLAttributes<HTMLDivElement> {
    firstname: string;
    lastname: string;
    image?: string;
    class: number;
    accuracy: number;
    points: number
    imageProps?: ImgHTMLAttributes<HTMLImageElement>;
    textImageProps?: HTMLAttributes<HTMLDivElement>;
    Icon?: React.JSX.Element
}

const AllStudents = (props: AllStudentProps) => {
    return (
        <CardWrapper className={props.className}>
            <ProfileCard firstname={props.firstname} lastname={props.lastname} image={props.image} imageProps={props.imageProps} textImageProps={props.textImageProps} className="basis-1/3 flex items-center justify-center" />

            <div className="flex flex-col gap-y-1 basis-1/3 grow">
                <Text text={`${props.firstname} ${props.lastname}`} className="line-clamp-1 font-medium text-sm" /> 
                <Text text={`Class ${props.class}`} className="text-sm text-gray-500" />

                <div className="flex flex-row justify-between items-start">
                    <Pill title={`${props.accuracy}%`} className="bg-green-200 text-green-600 outline-0 outline-transparent text-[12px] font-medium rounded-3xl " />
                    
                    <div className="flex flex-col text-[12px] text-gray-500 font-medium">
                        <Text text={`${props.points}`} />
                        <Text text="XP" />
                    </div>
                </div>
            </div>

            {props.Icon}
        </CardWrapper>
    )
}

export default AllStudents;