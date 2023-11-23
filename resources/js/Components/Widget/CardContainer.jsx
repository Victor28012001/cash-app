import React from 'react'

const CardContainer = ({ children }) => {
    return (

        <div className="relative w-2/6 max-w-[25%] rounded-md h-[120px] flex flex-col justify-around bg-[#f9f9f9] font-black shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mb-12 ml-6 ">
            <div className='card'>
                {children}
            </div>
        </div>
    )
}

const IconContainer = ({ color, children }) => {

    return (


        <div className={`absolute bottom-[35%] right-[75%] w-[40px] rounded-md h-[40px] p-[4px] flex justify-center items-center bg-${color}-500 mb-12 ml-6 shadow-lg shadow-${color}-500/20`}>
            <div className='icon'>
                {children}
            </div>
        </div>
    )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop: 5
        }}
    />
);

export { CardContainer, IconContainer, ColoredLine }