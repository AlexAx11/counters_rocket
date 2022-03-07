import React from 'react';
import rocket_img from '../img/rocket.png';
import hero_img from '../img/hero.png';
import '../styles/MainPage.css';
import {TIMERS, TITLE, TITLE_TEXT} from "../config/constans";
import Count from "./Count";

export default function MainPage(){
    const startTime = [];
    TIMERS.forEach(timeMinute => {
        startTime.push(timeMinute * 60);
    });

    return(
            <body>
                <div className="rocket_cont">
                    <img className="rocket_img" src={rocket_img}/>
                </div>
                <form className="form_text">
                    <form className="text">
                        <div className="title">
                            <span>{TITLE}</span>
                        </div>
                        <div className="font title_text">
                            <span >{TITLE_TEXT}</span>
                        </div>
                    </form>
                    <div>
                        <img className="hero_img" src={hero_img}/>
                    </div>
                </form>
                <form className="counts_container">
                    <Count startTime={startTime[0]}/>
                    <Count startTime={startTime[1]}/>
                    <Count startTime={startTime[2]}/>
                </form>
            </body>
    )
}