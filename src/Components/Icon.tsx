import type { ComponentType, HTMLAttributes, SVGAttributes } from "react"
import cn from "../Utils/Styles";

interface IconProps {
    Element: ComponentType<SVGAttributes<SVGElement>>;
    ElementProps?: SVGAttributes<SVGElement>;
}

interface WrapperIconProps extends IconProps, HTMLAttributes<HTMLDivElement> {};

const WrapperIcon = (props: WrapperIconProps) => {
    
    const {Element, ElementProps} = props;

    return (
        <div className={cn("h-auto w-auto", props.className)}>
            <Element {...ElementProps} />
        </div>
    )
}

export default WrapperIcon;