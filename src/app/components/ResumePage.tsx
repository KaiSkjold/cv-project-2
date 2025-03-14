"use client";
import { GeneralInformation } from "./resumeComponents/GeneralInformation";
import { Button } from "./generalComponents/Button";
import { Portrait } from "./resumeComponents/portrait";

export const ResumePage = () => {

    return (
        <>
            <div>
                <h1  className="text-2xl text-amber-400 bg-blue-950 p-2 rounded-t-lg hover:cursor-pointer">Resume</h1>
            </div>

 
            <div>
                <Portrait />
                <GeneralInformation location="resume"/>
                {/* TODO SNS */}
                {/* TODO Links, ex github?, websites */}
                {/* TODO Personal information */}
                {/* TODO Skills */}
                {/* TODO Languages */}
                {/* TODO Education */}
                {/* TODO Work experience */}
                {/* TODO Volunteer experience */}

                <Button text='Resumes dude'/>
 
            </div>
  
        </>
    );
};
