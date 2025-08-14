import type React from "react";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
};

const Pill = (props: PillProps) => {

    return (
        <div className={`${props.className} rounded-xl outline-1 outline-gray-400 py-1 px-2 cursor-pointer shadow-xl`}>
            {props.title}
        </div>
    )
}

export default Pill;