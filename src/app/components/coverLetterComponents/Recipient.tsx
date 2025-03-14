"use client";
import classNames from 'classnames';
import { useState } from 'react';

export const Recipient = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    // Input values
    const [recipientFormData, setRecipientFormData] = useState({recipient: "", company:""});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRecipientFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            <h1  onClick={toggleVisibility} className="hover:cursor-pointer text-xl text-amber-400 bg-blue-950 p-2 border-amber-400">Recipient Information</h1>
            
            {/* TODO can I do this in a modal? */}
            <div className={classNames(
                'transition-all duration-500 overflow-hidden',
                { 'h-0': !isVisible, 'h-auto': isVisible }
            )}>
                <form className={classNames('flex flex-col', 'text-xl p-4')}>
                    <label>Enter name of recipient:</label>
                    <input className='border-4 border-amber-500 m-1' type="text" value={recipientFormData.recipient} onChange={handleChange}/>
 
                    <label>Enter name of company:</label>
                    <input className='border-4 border-amber-500 m-1' type="text" value={recipientFormData.company} onChange={handleChange}/>
                </form>
            </div>
        </div>
    );
};