import React, {useState} from 'react';
import "./header.scss"
import Logo from "./bf-2042-white-nav-logo (1).svg";
import ReorderIcon from '@mui/icons-material/Reorder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import {Button} from "@mui/material";
function Header(props) {

    const [about, setAbout] = useState(false);
    const [sidebar, setsidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [aboutbf, setaboutbf] = useState(true);
    const [gameexperience, setgameexperience] = useState(true);
    const [backstory, setbackstory] = useState(true);


    const openSidebar = () => {
        setsidebar(true);
    }

    const closeSidebar = () => {
        setsidebar(false);
        setIsOpen(true)
    }

    const aboutClick = () => {

        setAbout(!about);

    }

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        setIsOpen2(true)
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };


    return (
        <div className="header">

            {sidebar && (
                <div className="Sidebar ">
                        <div className="logo">
                            <img src={Logo} alt=""/>
                            <CloseIcon onClick={closeSidebar}></CloseIcon>
                        </div>


                        <div className="li">
                            <ul className="drop">
                                <li className="list">
                                    <li className="accordion-item">
                                        <div className="accordion-header" onClick={toggleAccordion}>
                                            <li><a href="#">About <ChevronRightIcon
                                                className="right"></ChevronRightIcon></a></li>
                                        </div>

                                        <div className={isOpen ? "content show" : "content"}>
                                            <div className="accordion-more-header" onClick={toggleAccordion2}>
                                                <li><a href="#">About Battlefield <ChevronRightIcon
                                                    className="right"></ChevronRightIcon></a></li>
                                            </div>
                                            <div className={isOpen2 ? "content2 show" : "content2 "}>

                                                <li><a href="#">Game Overview</a></li>
                                                <li><a href="#">Maps</a></li>
                                            </div>


                                            <div className="accordion-more-header" onClick={toggleAccordion2}>
                                                <li><a href="#">GAME EXPERIENCES<ChevronRightIcon
                                                    className="right"></ChevronRightIcon></a></li>
                                            </div>
                                            <div className={about ? "content2 show" : "content2 "}>

                                                <li><a href="#">Battle Pass</a></li>
                                                <li><a href="#">Battle Pass</a></li>
                                            </div>


                                            <div className="accordion-more-header" onClick={toggleAccordion2}>
                                                <li><a href="#">BACKSTORY <ChevronRightIcon
                                                    className="right"></ChevronRightIcon></a></li>
                                            </div>
                                            <div className={isOpen2 ? "content2 show" : "content2 "}>

                                                <li><a href="#">Battle Pass</a></li>
                                                <li><a href="#">Battle Pass</a></li>
                                            </div>

                                        </div>


                                    </li>
                                    <li><a href="#">Season 7</a></li>
                                    <li><a href="#">Battle Pass</a></li>
                                    <li><a href="#">Battle Pass</a></li>
                                    <li className="news"><a href="#">New And Community <ChevronRightIcon
                                        className="right"></ChevronRightIcon></a></li>
                                    <li><a href="#">BATTLEFIELD<span>TM</span> PORTAL</a></li>
                                    <li><a href="#">Community Calendar</a></li>

                                </li>

                                {/*<li className="drop-list">*/}
                                {/*    <div className="title">*/}
                                {/*        <h3>ABOUT BATTLEFIELD 2042</h3>*/}
                                {/*        <p>+</p>*/}
                                {/*    </div>*/}
                                {/*    <hr/>*/}

                                {/*    <div className="content">*/}
                                {/*        <li><a href="#">Game Overview</a></li>*/}
                                {/*        <li><a href="#">Maps</a></li>*/}
                                {/*        <li><a href="#">Classes</a></li>*/}
                                {/*        <li><a href="#">Specialist</a></li>*/}
                                {/*        <li><a href="#">Econemy & Player Progression</a></li>*/}
                                {/*        <li><a href="#">FAQ</a></li>*/}
                                {/*        <li><a href="#">Acessibility</a></li>*/}
                                {/*        <li><a href="#">Medi</a></li>*/}
                                {/*    </div>*/}

                                {/*</li>*/}

                                {/*<li className="drop-list">*/}
                                {/*    <div className="title">*/}
                                {/*        <h3>GAME EXPERIENCE</h3>*/}
                                {/*    </div>*/}
                                {/*    <hr/>*/}

                                {/*    <div className="content">*/}
                                {/*        <li><a href="#">Battlefield Portal</a></li>*/}
                                {/*        <li><a href="#">Battlefiel Hazar Zone</a></li>*/}
                                {/*        <li><a href="#">Battlefield All Out-Off-Warfare</a></li>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*<li className="drop-list">*/}
                                {/*    <div className="title">*/}
                                {/*        <h3>BACKSTORY</h3>*/}
                                {/*    </div>*/}
                                {/*    <hr/>*/}

                                {/*    <div className="content">*/}
                                {/*        <li><a href="#">Battlefield Records: 2048</a></li>*/}
                                {/*        <li><a href="#">Battlefield Records: 2042-2043</a></li>*/}
                                {/*    </div>*/}

                                {/*</li>*/}


                            </ul>
                        </div>
                </div>
            )}


            <div className="logo-list">
                <div className="logo">
                    <div className="icon">
                        <ReorderIcon onClick={openSidebar} className="reordericon"></ReorderIcon>
                    </div>
                    <img src={Logo} alt=""/>
                </div>

                <ul className="li">
                    <li className="about"><a href="#" onClick={aboutClick}>About <ChevronRightIcon
                        className="right"></ChevronRightIcon> </a>
                        {about && <di>
                            <ul className="drop">
                                <li className="drop-list">
                                    <h3>ABOUT BATTLEFIELD 2042</h3>
                                    <hr/>

                                    <li><a href="#">Game Overview</a></li>
                                    <li><a href="#">Maps</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Specialist</a></li>
                                    <li><a href="#">Econemy & Player Progression</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Acessibility</a></li>
                                    <li><a href="#">Medi</a></li>
                                </li>
                                <li className="drop-list">
                                    <h3>GAME EXPERIENCE</h3>
                                    <hr/>

                                    <li><a href="#">Battlefield Portal</a></li>
                                    <li><a href="#">Battlefiel Hazar Zone</a></li>
                                    <li><a href="#">Battlefield All Out-Off-Warfare</a></li>
                                </li>
                                <li className="drop-list">
                                    <h3>BACKSTORY</h3>
                                    <hr/>

                                    <li><a href="#">Battlefield Records: 2048</a></li>
                                    <li><a href="#">Battlefield Records: 2042-2043</a></li>
                                </li>


                            </ul>
                        </di>}
                    </li>

                    <li><a href="#">Season 7</a></li>
                    <li><a href="#">Battle Pass</a></li>
                    <li><a href="#">Battle Pass</a></li>
                    <li className="news"><a href="#">New And Community <ChevronRightIcon className="right"></ChevronRightIcon></a></li>
                    <li><a href="#">BATTLEFIELD<span>TM</span> PORTAL</a></li>
                    <li><a href="#">Community Calendar</a></li>
                </ul>


            </div>


            <div className="purchase">
                <button>Buy Now</button>
            </div>




        </div>
    );
}

export default Header;