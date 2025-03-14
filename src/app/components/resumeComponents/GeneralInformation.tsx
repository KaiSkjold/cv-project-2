"use client";
import classNames from 'classnames';
import { useState } from 'react';

export const GeneralInformation = (location : {location:string}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    // Input values
    const [generalFormData, setGeneralFormData] = useState({name: "", age:"", email: "", phone: ""});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setGeneralFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            <h1  onClick={toggleVisibility} className={classNames('hover:cursor-pointer text-xl text-amber-400 bg-blue-950 p-2 border-amber-400', 
            location.location === 'coverLetter' ? 'rounded-b-lg' : ''
            )}>General Information</h1>
            
            {/* TODO can I do this in a modal? */}
            <div className={classNames(
                'transition-all duration-500 overflow-hidden',
                { 'h-0': !isVisible, 'h-auto': isVisible }
            )}>
                <form className={classNames('flex flex-col', 'text-xl p-4')}>
                    <label>Enter your name:</label>
                    <input className='border-4 border-amber-500 m-1' type="text" value={generalFormData.name} onChange={handleChange}/>
 
                    <label>Enter your age:</label>
                    <input className='border-4 border-amber-500 m-1' type="number" value={generalFormData.age} onChange={handleChange}/>
                    
                    <label>Enter your e-mail:</label>
                    <input className='border-4 border-amber-500 m-1' type="text" value={generalFormData.email} onChange={handleChange}/>
                    
                    <label>Enter your phone/mobile number:</label>
                    <input className='border-4 border-amber-500 m-1' type="number" value={generalFormData.email} onChange={handleChange} />
                </form>
            </div>
        </div>
    );
};