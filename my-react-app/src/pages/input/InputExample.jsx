import React, { useState } from 'react'

const InputExample = () => {

    // State variables
    let [msg, setMsg] = useState("");
    let [lv, setLv] = useState(0); // lowercase vowels
    let [lc, setLc] = useState(0); // lowercase consonants
    let [uv, setUv] = useState(0); // uppercase vowels
    let [uc, setUc] = useState(0); // uppercase consonants
    let [d, setD] = useState(0);   // digits
    let [s, setS] = useState(0);   // space count
    let [sp, setSp] = useState(0); // special characters
    let [show, setShow] = useState(false);

    // Input handle
    function getInputData(e) {
        setMsg(e.target.value);
    }

    // Form submit handle
    function postData(e) {
        e.preventDefault();
        setShow(true);

        // Local counters
        let lowercaseVowels = 0;
        let lowercaseConsonants = 0;
        let uppercaseVowels = 0;
        let uppercaseConsonants = 0;
        let digits = 0;
        let spaces = 0;
        let specials = 0;

        // Loop through each character
        for (let ch of msg) {

            // LOWERCASE LETTERS
            if (ch >= 'a' && ch <= 'z') {
                if ("aeiou".includes(ch)) lowercaseVowels++;
                else lowercaseConsonants++;
            }

            // UPPERCASE LETTERS
            else if (ch >= 'A' && ch <= 'Z') {
                if ("AEIOU".includes(ch)) uppercaseVowels++;
                else uppercaseConsonants++;
            }

            // DIGITS
            else if (ch >= '0' && ch <= '9') {
                digits++;
            }

            // SPACE
            else if (ch === ' ') {
                spaces++;
            }

            // SPECIAL CHARACTERS
            else {
                specials++;
            }
        }

        // Setting state after processing
        setLv(lowercaseVowels);
        setLc(lowercaseConsonants);
        setUv(uppercaseVowels);
        setUc(uppercaseConsonants);
        setD(digits);
        setS(spaces);
        setSp(specials);

        // Clear input
        setMsg("");
    }

    return (
        <>
            <div className='main'>
                <div className='center'>
                    <h1>Input Example</h1>

                    <form onSubmit={postData}>
                        <input
                            type="text"
                            value={msg}
                            onChange={getInputData}
                            placeholder="Type here..."
                        />
                        <br /><br />
                        <button type="submit">Submit</button>
                    </form>

                    {
                        show && (
                            <table border={2} cellPadding={10} cellSpacing={2}>
                                <tbody>
                                    <tr>
                                        <th>Lowercase Vowels</th>
                                        <td>{lv}</td>
                                    </tr>
                                    <tr>
                                        <th>Uppercase Vowels</th>
                                        <td>{uv}</td>
                                    </tr>
                                    <tr>
                                        <th>Lowercase Consonants</th>
                                        <td>{lc}</td>
                                    </tr>
                                    <tr>
                                        <th>Uppercase Consonants</th>
                                        <td>{uc}</td>
                                    </tr>
                                    <tr>
                                        <th>Digits</th>
                                        <td>{d}</td>
                                    </tr>
                                    <tr>
                                        <th>Spaces</th>
                                        <td>{s}</td>
                                    </tr>
                                    <tr>
                                        <th>Special Characters</th>
                                        <td>{sp}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default InputExample
