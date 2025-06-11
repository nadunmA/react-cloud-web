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
               
                if (currentText.length < currentString.length) {
                    setCurrentText(currentString.substring(0, currentText.length + 1));
                } else {
                 
                    setTimeout(() => setIsDeleting(true), delayBetweenStrings);
                }
            } else {
                
                if (currentText.length > 0) {
                    setCurrentText(currentString.substring(0, currentText.length - 1));
                } else {
                    
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? backSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting]);

    return (

        <div className="text-black bg-white min-h-screen">
            <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-green-400 font-bold p-1">FAST POWERFUL MORE RELIABLE</p>
                <h1 className="md:text-5xl sm:text-5xl text-xl mb-2.5 font-bold md:py-6">This is next-gen protection</h1>
                <div className="flex justify-center items-center flex-wrap gap-2">
                    <p className="md:text-3xl sm:text-3xl text-xl font-bold">Fast, flexible for</p>
                    <span className="md:text-3xl sm:text-3xl text-xl font-bold text-green-400 min-h-[1.2em] flex items-center">
                        {currentText}
                        <span className="animate-pulse ml-1">|</span>
                    </span>
                </div>

                <p className="mt-4 font-bold text-black">Keep your files, photos, and videos automatically backed up.</p>
        
               <div className="font-bold mt-4 flex items-center justify-center">
                    <button>Explore</button>
               </div>

            </div>
            
        </div>

        


    );
};

export default Hero;