"use client";
import { useState } from "react";
import { LetterContent } from "./coverLetterComponents/LetterContent";
import { Recipient } from "./coverLetterComponents/Recipient";
import { GeneralInformation } from "./resumeComponents/GeneralInformation";

export const CoverLetterPage = () => {
    const [isRecipientVisible, setIsRecipientVisible] = useState(false);
    const toggleRecipientVisibility = () => setIsRecipientVisible(!isRecipientVisible);
    return (
        <>
            <div>
                <h1 className="text-2xl text-amber-400 bg-blue-950 p-2 rounded-xl hover:cursor-pointer"  onClick={toggleRecipientVisibility}>CoverLetter</h1>
            </div>
           { isRecipientVisible && <div>
                <Recipient />
                <LetterContent />
                <GeneralInformation location="coverLetter"/>
            </div>}
        </>
    );
};