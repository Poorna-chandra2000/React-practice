import React, { useEffect, useRef, useState } from "react";

const AnimateOnScrollii = () => {
    const increasingDivRef = useRef(null);
    const middleDivRef = useRef(null);
    const [isAnimationComplete, setAnimationComplete] = useState(false);

    const handleScroll = () => {
        if (!middleDivRef.current || !increasingDivRef.current) return;

        const middleDivTop = middleDivRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Start the animation when the middle div reaches the top of the viewport
        if (middleDivTop <= 0 && !isAnimationComplete) {
            const progress = Math.min((-middleDivTop / windowHeight) * 100, 100);

            // Update the increasing div width
            increasingDivRef.current.style.width = `${progress}%`;
            increasingDivRef.current.textContent = `Width: ${Math.round(progress)}%`;

            // Mark animation as complete
            if (progress >= 100) {
                setAnimationComplete(true);
            }
        }
    };

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isAnimationComplete]);

    return (
        <div>
            {/* First Div */}
            <div className="h-screen bg-gray-200 flex justify-center items-center">
                <h1>First Div - Scroll Down</h1>
            </div>

            {/* Middle Div Container */}
            <div
                ref={middleDivRef}
                className="relative"
                style={{
                    height: isAnimationComplete ? "100vh" : "200vh",
                }}
            >
                <div
                    className={`${
                        isAnimationComplete ? "relative" : "fixed"
                    } top-0 left-0 w-full h-screen bg-gray-300 flex justify-center items-center`}
                >
                    <div
                        ref={increasingDivRef}
                        className="bg-black text-white h-6"
                        style={{ width: "0%", transition: "width 0.1s linear" }}
                    >
                        Width: 0%
                    </div>
                </div>
            </div>

            {/* Third Div */}
            <div className="h-screen bg-gray-400 flex justify-center items-center">
                <h1>Third Div</h1>
            </div>
        </div>
    );
};

export default AnimateOnScrollii;
