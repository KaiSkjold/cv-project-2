"use client";

import { LetterContent } from "./coverLetterComponents/LetterContent";
import { Recipient } from "./coverLetterComponents/Recipient";
import { Button } from "./generalComponents/Button";
import { GeneralInformation } from "./resumeComponents/GeneralInformation";

export const CoverLetterPage = () => {

    return (
        <>
            <div>
                <h1 className="text-2xl text-amber-400 bg-blue-950 p-2 rounded-t-lg hover:cursor-pointer">CoverLetter</h1>
            </div>
            <div>
                <Recipient />
                <LetterContent />
                <GeneralInformation location="coverLetter"/>
            </div>
            <div>
                <Button text='Cover the text'/>
            </div>

        </>
    );
};