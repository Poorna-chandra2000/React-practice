import React, {useEffect, useRef} from 'react'

const CounterAnimation = () => {
    const countRef = useRef(0);
    const divRef = useRef(null);
    const maxWidth = 100; // Maximum width percentage

    useEffect(() => {
        const interval = setInterval(() => {
            if (countRef.current >= maxWidth) {
                clearInterval(interval); // Stop the interval when width reaches 100%
                return;
            }

            const  count=countRef.current += 1; // Increment the width percentage

            if (divRef.current) {
                divRef.current.style.width = `${countRef.current+2}%`; // Update the width
                divRef.current.textContent = `Width: ${countRef.current}%
                couter: ${count}`; // Update text content

                divRef.current.style.transition = `width 1000ms ease`;
            }
        }, 1000); // Adjust speed as needed

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="bg-black text-white h-6 mt-4" ref={divRef} style={{ width: '20%' }}>
            Width: 0%
        </div>
    );
}
export default CounterAnimation
