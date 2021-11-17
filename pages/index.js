import { useState } from 'react';
export default function Home() { 
    let initialTime = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(initialTime)

    const [optionValue, setOptionValue] = useState("CurrentTime")
    var momentTz = require("moment-timezone");
    function handleTimeZones(e) {
        setOptionValue(e.target.value)
        switch (e.target.value)
        {
            case "Browser": {
                console.log(" I am browser ")
                const updateBrowserTime = () => {
                    initialTime = new Date().toLocaleTimeString();
                    setCurrentTime(initialTime)
                }
                setInterval(updateBrowserTime,1000)
                break;
            }
            case "Europe": {
                const updateEuropeTime = () => {
                    console.log("I am called Europe")
                    var EuropeTime = momentTz.tz(new Date(), 'Europe/London').format('HH:mm:ss');
                    setCurrentTime(EuropeTime)
                }
                setInterval(updateEuropeTime,1000)
                break;
            }
            case "America": {
                const updateAmericaTime = () => {
                    console.log("I am called America")
                    var AmericaTime = momentTz.tz(new Date(), 'America/Toronto').format('HH:mm:ss');
                    setCurrentTime(AmericaTime)
                }
                setInterval(updateAmericaTime,1000)
                break;
            }  
            case "Asia": {
                const updateAisaTime = () => {
                    console.log("I am called Asia")
                    var AsiaTime = momentTz.tz(new Date(), 'Asia/Taipei').format('HH:mm:ss');
                    setCurrentTime(AsiaTime)
                }
                setInterval(updateAisaTime,1000)
                break;
            }       
        }
    }   


    return (
        <div className="container">
            <center>
                <h2 style={{fontSize:"40px",color:"white"}}>DIGITAL CLOCK </h2>
                <h2 style={{ fontSize: "80px", color: "skyblue" }} > {currentTime}</h2>
                <select style={{ width: "200px", height: "30px", borderRadius: "20px", paddingLeft: "20px" }} onChange={handleTimeZones}
                    value={optionValue}>
                    <option>Please select</option>
                    <option value="Browser">Browser TimeZone</option>
                    <option value="America">America/Toronto</option>
                    <option value="Asia"> Asia/Taipei</option>
                    <option value="Europe">Europe/London</option>
                </select>

            </center>
        </div>
    )
}
