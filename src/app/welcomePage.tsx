"use client";
import Image from 'next/image';

export const WelcomePage = () => {
    return (
        <div>
            <h1 className="text-2xl text-amber-400 bg-blue-950 p-4 border-amber-400 rounded-t-lg">Welcome</h1>
            <h2 className="bg-blue-950 text-amber-400 text-xl p-3">Here we will help you make the best possible application for your dream job</h2>
            <Image src="https://spaceholder.cc/i/1000x1000" alt="Space because it's all there is" width={1000} height={1000}/>
            <div className="bg-blue-950 rounded-b-lg text-amber-400 p-3">Let`s get started!</div>
        </div>
    );
};