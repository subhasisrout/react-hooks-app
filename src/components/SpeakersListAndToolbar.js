import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";
import SpeakersList from "./SpeakersList";

function SpeakersListAndToolbar({ theme, setTheme }) {
    const [showSessions, setShowSessions] = useState(true);
    

    return (
        <>
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} /> 
            <SpeakersList showSessions={showSessions} />
        </>
    )
}
export default SpeakersListAndToolbar;