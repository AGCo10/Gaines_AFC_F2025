import {useState} from "react";

const PasswordEntry = () => {
    const [revealPassword, setRevealPassword] = useState(true) ;
    const handleClick = () => {
        // make an if statement to toggle the type of input
        setRevealPassword(!revealPassword)
    }

    return (
        <>

            <input type={revealPassword? "password":"text"} placeholder = "password" name = {"pw"}/>
            <button onClick={handleClick}>Show/Hide</button>

        </>
    )
}

export default PasswordEntry ;