import { useState } from "react";

export const Portrait = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div>
            <h1 className="text-xl text-amber-400 bg-blue-950 p-2 hover:cursor-pointer" onClick={toggleVisibility}>Portrait</h1>
            { isVisible && (
                <p className="bg-blue-950 text-amber-400 text-xl p-3">Here you can one day upload your portrait, but not yet...</p>
            )}
        </div>
    );
};