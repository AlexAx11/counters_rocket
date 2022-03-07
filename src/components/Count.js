import React, {useState} from 'react';
import {ALERT} from "../config/constans";
import '../styles/Count.css';


export default function Count(props) {
    const localKey = props.startTime;
    const [seconds, setSeconds] = useState(props.startTime);
    const minutes = getMinutes();
    const sec = getSec();
    let timer;

    function getTime() {
        //checking for a reboot
        if(seconds === props.startTime && checkLocalData()) {
            setSeconds(checkLocalData() ? localStorage.getItem(localKey) : props.startTime);
        } else {
            setSeconds(seconds - 1);
        }
    }

    //checking the key in local storage
    function checkLocalData() {
        for (let i = 0; i < localStorage.length; i++) {
            if (localKey == localStorage.key(i)) {
                return true
            }
        }
        return false;
    }

    React.useEffect(() => {
        if (seconds > 0) {
            timer = setTimeout(() => {
                getTime();
                localStorage.setItem(localKey, seconds.toString());
            }, 1000);
        } else {
            setSeconds(0);
            localStorage.removeItem(localKey)
            alert(ALERT);
        }
    });

    function getMinutes() {
        let res = parseInt(seconds / 60, 10);
        return res
    }

    function getSec() {
        let res = parseInt(seconds % 60, 10);
        return res < 10 ? "0" + res : res;
    }

    function resetTimer() {
        clearTimeout(timer);
        setSeconds(props.startTime);
        localStorage.removeItem(localKey)
    }

    function getClock() {
        return (
            <form className="count">
                <div className="clocksDigitMinute">{minutes}</div>
                <span>&nbsp;{":"}&nbsp;</span>
                <div className= "clocksDigitSec">{sec}</div>
            </form>
        )
    }

    return (
        <div className="count_cell">
            <div>
                <p>Countdown to lift of</p>
            </div>
            <div>{getClock()}</div>
            <div>
                <button onClick={() => resetTimer()}>Reset timer</button>
            </div>
        </div>
    )
}