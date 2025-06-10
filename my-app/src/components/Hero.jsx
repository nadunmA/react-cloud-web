import React, { useState, useEffect } from "react";

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const strings = ['iOS', 'Android', 'Windows'];
    const typeSpeed = 120;
    const backSpeed = 140;
    const delayBetweenStrings = 2000;

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentString = strings[currentIndex];
            
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentString.length) {
                    setCurrentText(currentString.substring(0, currentText.length + 1));
                } else {
                    // Start deleting after delay
                    setTimeout(() => setIsDeleting(true), delayBetweenStrings);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentString.substring(0, currentText.length - 1));
                } else {
                    // Move to next string
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? backSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting]);

    return (
        <div className="text-white bg-black min-h-screen">
            <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-green-400 font-bold p-2">FAST POWERFUL MORE RELIABLE</p>
                <h1 className="md:text-5xl sm:text-5xl text-xl mb-2.5 font-bold md:py-6">This is next-gen protection</h1>
                <div className="flex justify-center items-center flex-wrap gap-2">
                    <p className="md:text-3xl sm:text-3xl text-xl font-bold">Fast, flexible for</p>
                    <span className="md:text-3xl sm:text-3xl text-xl font-bold text-green-400 min-h-[1.2em] flex items-center">
                        {currentText}
                        <span className="animate-pulse ml-1">|</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;