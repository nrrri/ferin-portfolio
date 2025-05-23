import { useState, useEffect, useRef } from "react";

const Banner = ({ text }: { text: string }) => {
    const [repeatCount, setRepeatCount] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const textWidth = textRef.current?.offsetWidth || 1;
        const count = Math.ceil(containerWidth / textWidth);
        setRepeatCount(count);
    }, [text]);

    return (
        <div ref={containerRef} className="flex items-center justify-center relative h-[52px] md:h-[110px] bg-gradient-to-r from-secondary200 to-secondary100 overflow-hidden">
            <span ref={textRef} className="flex text-6xl md:text-9xl text-bgday100 leading-none uppercase font-antonio banner space-x-24 text-nowrap" >
                {text.repeat(repeatCount)}
            </span>
        </div >
    );
}

export default Banner

