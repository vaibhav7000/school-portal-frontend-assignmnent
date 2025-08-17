import type { HTMLAttributes } from "react";
import cn from "../Utils/Styles";
import Text from "./Text";

interface PipesProps extends HTMLAttributes<HTMLDivElement> {
    titles: string[],
    data: number[],
    colors?: string[],
}

const Pipes = (props: PipesProps) => {
    const {titles, data, colors} = props;

    return (
        <div className={cn(props.className)}>

            {titles.map((label, index) => {
                return (
                    <div className="flex flex-col rounded-xl gap-2" key={index}>
                        <div className="flex flex-row justify-between">
                            <Text text={label} />
                            <Text text={`${data[index]}%`} />
                        </div>

                        <div className="h-2 rounded-xl bg-gray-400 w-full">
                            <div style={{
                                width: `${data[index]}%`,
                                backgroundColor: `${colors && colors[index]}`,
                            }} className={cn("h-full", "rounded-xl")} ></div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}


export default Pipes;