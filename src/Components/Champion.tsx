import type React from "react";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import ProfileCard from "./ProfileCard";
import cn from "../Utils/Styles";
import Text from "./Text";

interface ChampionProps extends HTMLAttributes<HTMLDivElement> {
    image: string;
    imageProps?: ImgHTMLAttributes<HTMLImageElement>;
    firstname: string;
    lastname: string;
    standard: number;
    points: number;
    icons: React.JSX.Element[];
    barProps: HTMLAttributes<HTMLDivElement>;
    index: number;
}

const Champion = (props: ChampionProps) => {
    

    const {firstname, lastname, points, standard, index, icons} = props;

    return (
        <div
            style={{
                order: index === 0 ? 1 : index === 1 ? 0 : 2,
            }}
        className={cn(props.className)}>
            <ProfileCard image={props.image} firstname={props.firstname} lastname={props.lastname} imageProps={props.imageProps} icon={icons[0]} className={cn("rounded-full h-20 w-20 relative flex items-center justify-center", index === 0 && "outline outline-first-position", index === 1 && 'outline outline-second-postion', index === 2 && 'outline-third-position outline')} textImageProps={{
                className: cn( index === 0 && 'bg-first-position', index === 1 && 'bg-second-postion', index === 2 && 'bg-third-position', 'flex rounded-full h-20 w-20 items-center justify-center text-white font-medium text-xl')
            }} />

            <div className={cn(props.barProps.className, index === 0 && 'bg-first-position', index === 1 && 'bg-second-postion', index === 2 && 'bg-third-position')}>
                <Text  text={`${firstname} ${lastname}`} className=" text-center font-medium capitalize text-lg" />
                <Text className="text-sm font-light" text={`Class ${standard}`} />
                <Text className="font-semibold text-lg" text={`${points} pts`} />

                {index === 0 && 
                <div className="flex h-6 gap-x-1">
                    {icons.map((icon, index) => {
                        return (
                            <div key={index} className="relative w-6 h-6">
                                {icon}
                            </div>
                        )
                    })}
                </div>
                }
            </div>
        </div>
    )
}


export default Champion;