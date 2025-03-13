"use client";
import { useState } from "react";
import { GeneralInformation } from "./resumeComponents/GeneralInformation";

export const ResumePage = () => {
    const [isPageVisible, setIsPageVisible] = useState(false);
    const togglePageVisibility = () => setIsPageVisible(!isPageVisible);

    return (
        <>
            <div>
                <h1 onClick={togglePageVisibility} className="text-2xl text-amber-400 bg-blue-950 p-2 rounded-xl hover:cursor-pointer">Resume</h1>
            </div>

            {isPageVisible && 
                <div>
                {/* TODO Upload portrait */}
                <GeneralInformation location="resume"/>
                {/* TODO SNS */}
                {/* TODO Links, ex github?, websites */}
                {/* TODO Personal information */}
                {/* TODO Skills */}
                {/* TODO Languages */}
                {/* TODO Education */}
                {/* TODO Work experience */}
                {/* TODO Volunteer experience */}
                </div>
            }
        </>
    );
};
