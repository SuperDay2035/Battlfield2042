import React from 'react';
import "./home.scss"
import logo from './bf-2042-season7-turningpoint-logo-en-us.svg';

function Home(props) {
    return (
        <div className="home">

            <div className="video">
                <video autoPlay loop muted
                       src="https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/season-7/videos/2024/03/bf-2042-season7-header-l.mp4"></video>

            </div>


            <div className="container">
                <div className="home">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="introduction">
                        <p>Play Season 7 now! Battle for Earth’s most valuable resource in a
                            Chilean desert. There’s no holding back for your squad as you deploy on a new map
                            focused on suburban combat and revisit a fan-favorite front: S
                            tadium. Gear up with new hardware, use destruction as your ally, and jump into a battle for
                            ultimate power.</p>
                    </div>
                    <div className="FindOut"></div>
                </div>
            </div>


        </div>
    );
}

export default Home;