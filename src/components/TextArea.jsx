import {useState} from "react";
import Warning from "./Warning.jsx";
import {FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS} from "../lib/constants.js";

function TextArea({setStats}) {
    const [userInput, setUserInput] = useState(" ");
    const [warning, setWarning] = useState("");
    const handleInput = (e) => {
        e.preventDefault()
        let inputText = e.target.value
        if (inputText.includes("<script>")) {
            alert("Please don't use <script> tag")
            inputText = inputText.replace("<script>", "")
        }else {
            setWarning("");
        }

        setUserInput(inputText)
        setStats({
            numberOfWords: inputText.split(" ")[0] === "" ? 0 : inputText.split(" ").length,
            numberOfCharacters: inputText.length,
            instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - inputText.length,
            facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - inputText.length,
        });
    }
    return (
        <section className="textarea">
            <textarea placeholder="Enter text here" onChange={handleInput}
                      spellCheck="false" value={userInput}/>

            <Warning warningText={warning} />

        </section>


    )
}

export default TextArea
