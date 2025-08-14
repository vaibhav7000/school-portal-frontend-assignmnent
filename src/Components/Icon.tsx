import type { ComponentType, HTMLAttributes, SVGAttributes } from "react"

interface IconProps {
    Element: ComponentType<SVGAttributes<SVGElement>>;
    ElementProps?: SVGAttributes<SVGElement>;
}

interface WrapperIconProps extends IconProps, HTMLAttributes<HTMLDivElement> {};

const WrapperIcon = (props: WrapperIconProps) => {
    
    const {Element, ElementProps} = props;

    return (
        <div className={props.className}>
            <Element {...ElementProps} />
        </div>
    )
}

export default WrapperIcon;