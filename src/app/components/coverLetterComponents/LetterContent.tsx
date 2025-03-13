"use client";
import classNames from 'classnames';
import { useState } from 'react';

export const LetterContent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    // Input values
    const [coverLetterFormData, setCoverLetterFormData] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCoverLetterFormData(event.target.value);
    };
    return (
        <div>
            <h1  onClick={toggleVisibility} className="hover:cursor-pointer text-xl text-amber-400 bg-blue-950 p-2 border-amber-400">Content of coverletter</h1>
            
            {/* TODO can I do this in a modal? */}
            <div className={classNames(
                'transition-all duration-500 overflow-hidden',
                { 'h-0': !isVisible, 'h-auto': isVisible }
            )}>
                <form className={classNames('flex flex-col', 'text-xl p-4')}>
                    <label>Write your coverletter here:</label>
                    <textarea className='border-4 border-amber-500 m-1' value={coverLetterFormData} onChange={handleChange}/>
                </form>
            </div>
        </div>
    );
};