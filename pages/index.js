import {validMomentTimezones} from '../utils/options';
import {useState} from 'react';
export default function Home() {
    let initialTime = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(initialTime)
    const [optionValue, setOptionValue] = useState("Asia/Kolkata")
    var momentTz = require("moment-timezone");
    function handleTimeZones(e) {
        setOptionValue(e.target.value)
        const updateTime = () => {
            console.log(e.target.value)
            var timeZoneTime = momentTz.tz(new Date(), e.target.value).format('HH:mm:ss');
            setCurrentTime(timeZoneTime)
        }
        setInterval(updateTime, 1000)
    }
    return (
        <div className="container">
            <center>
                <h2 style={
                    {fontSize: "40px", color: "white"}
                }>DIGITAL CLOCK
                </h2>
                <h2 style={
                    {fontSize: "80px", color: "skyblue"}
                }>
                    {currentTime}</h2>
                <select style={
                        {width: "200px", height: "30px", borderRadius: "20px", paddingLeft: "20px"}
                    }
                    onChange={handleTimeZones}
                    value={optionValue}>
                    {
                    validMomentTimezones.map((options, index) => {
                        return (
                            <option key={index}
                                value={options}>
                                {options} </option>
                        )
                    })
                } </select>
            </center>
        </div>
    )
}
