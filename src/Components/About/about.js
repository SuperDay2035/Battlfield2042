import React from 'react';
import "./About.scss"
import info from './Info.png'
import Stadium from './Stadium.png'

function About(props) {
    return (
        <div className="About">


            <div className="info">
                <img src={info} alt=""/>


                <div className="content">

                    <h3>SEASON 7 BATTLE PASS</h3>
                    <br/>
                    <p>
                        Play through 100 tiers in the Season 7 Battle Pass to unlock content including new weapons, a
                        new gadget, and XP boosters.
                    </p>

                    <div className="btn">
                        <button>Find Out More</button>
                    </div>


                </div>


            </div>

            <div className="info">
                <img src={Stadium} alt=""/>


                <div className="content-wrap">

                    <h3>STADIUM</h3>
                    <br/>
                    <p>
                        Stadium has been brought back by popular demand with a revamped, battle-torn look. Give it all or nothing in this intense, infantry-only experience.
                    </p>

                    <div className="btn">
                        <button>Find Out More</button>
                    </div>


                </div>


            </div>


        </div>
    );
}

export default About;