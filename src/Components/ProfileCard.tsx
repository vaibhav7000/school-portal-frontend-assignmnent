import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import cn from "../Utils/Styles";
import type React from "react";

interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
    firstname: string;
    lastname: string;
    image?: string;
    imageProps?: ImgHTMLAttributes<HTMLImageElement>;
    icon?: React.JSX.Element
    textImageProps?: HTMLAttributes<HTMLDivElement>;
}

const ProfileCard = (props: ProfileCardProps) => {
    const {image} = props;

    return (
        <div className={cn(props.className)}>
            {image && 
                <img {...props.imageProps} />
            }
            {!image && 
                <div className={cn("capitalize", props.textImageProps?.className)}>
                    {`${props.firstname.slice(0, 1).toUpperCase()}${props.lastname.slice(0, 1).toUpperCase()}`}
                </div>
            }

            {props.icon}
        </div>
    )
}

export default ProfileCard;