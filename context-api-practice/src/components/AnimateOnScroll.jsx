import React, { useEffect, useRef } from 'react';

const AnimateOnScroll = () => {
    const divRef = useRef(null);

    const handleScroll = () => {
        if (divRef.current) {
            // Calculate the percentage of the page scrolled
            const scrollTop = window.scrollY; // How much has been scrolled vertically
            const windowHeight = window.innerHeight; // Height of the viewport
            const docHeight = document.documentElement.scrollHeight; // Total height of the document

            // Calculate the scroll progress as a percentage
            const scrollPercentage = Math.min((scrollTop / (docHeight - windowHeight)) * 100, 100);

            // Update the width of the div based on the scroll percentage
            divRef.current.style.width = `${scrollPercentage}%`;
            divRef.current.textContent = `Width: ${Math.round(scrollPercentage)}%`; // Display the width
        }
    };

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures it runs once after mount

    return (
        <div>
            <div ref={divRef} className="bg-black text-white h-6 mt-4 fixed" style={{ width: '0%' }}>
                Width: 0%
            </div>
            <div style={{ height: '200vh' }}>
                {/* Added extra height so the page is scrollable */}
                Scroll down to see the width increase.
            </div>
        </div>
    );
};

export default AnimateOnScroll;
