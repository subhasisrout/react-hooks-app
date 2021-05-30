import Header from "./Header";
import SpeakersListAndToolbar from "./SpeakersListAndToolbar";
import { useState } from "react";

function Speakers() {
    const [theme, setTheme] = useState("light");

    return (
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            <Header theme={theme} />
            <SpeakersListAndToolbar theme={theme} setTheme={setTheme}/>            
        </div>
    )
}

export default Speakers;