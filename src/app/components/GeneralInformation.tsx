"use client";
import classNames from 'classnames';
import { useState } from 'react';

export const GeneralInformation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div>
            <h1  onClick={toggleVisibility} className="hover:cursor-pointer text-xl text-amber-400 bg-blue-950 p-2 rounded-xl border-amber-400">General Information</h1>
            
            {/*{isVisible && <div > Hidden Content </div> }*/}
            <div className={classNames(
                'transition-all duration-500 overflow-hidden',
                { 'h-0': !isVisible, 'h-auto': isVisible }
            )}>
                <form className={classNames('flex flex-col', 'text-xl p-4')}>
                    <label>Enter your name:</label>
                        <input className='border-4 border-amber-500 m-1' type="text" />
 
                    <label>Enter your age:</label>
                        <input className='border-4 border-amber-500 m-1' type="text" />

                    {/* TODO contact information */}
                </form>
            </div>
        </div>
    );
};