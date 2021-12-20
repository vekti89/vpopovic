import "./ProjectDetails.css";
import { Link } from "react-router-dom";

import farm_space1 from "./images/farm_space1.png";
import farm_space2 from "./images/farm_space2.png";
import farm_space3 from "./images/farm_space3.png";
import pcx1 from "./images/pcx1.png";
import pcx2 from "./images/pcx2.png";
import pcx3 from "./images/pcx3.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faExternalLinkAlt, faAt, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

import { useContext } from 'react';
import {ThemeContext} from "./contexts/ThemeContext";

function ProjectDetails () {

    const {isDarkMode} = useContext(ThemeContext);

    return (
        <main className="ProjectDetails" style={{backgroundColor: isDarkMode ? "var(--main-bg-dark)" : "var(--main-bg-light)"}}>

            <section className="ProjectDetails-intro">
                <p>I have built several projects, most of them in front-end, and one full stack 
                    application. </p>
                <p>Here below you can see my two works presented in detail.</p>
                <span>Of course, this web presentation was also completely done by me.🙂</span>

            </section>

            <section className="ProjectDetails-projects">

                <div className="ProjectDetails-project" style={{backgroundColor: isDarkMode ? "var(--box-bg-dark)" : "var(--box-bg-light)"}}>
                    <h4 id="farmspace">FarmSpace</h4>

                    <p>FarmSpace is a marketplace app connecting farmers and customers in
                        San Francisco Bay Area. It serves both as: </p>
                    <ul>
                        <li>a platform for farm owners to present their farms and products that they are offering</li>
                        <li>a marketplace for customers to buy fresh locally grown food</li>
                    </ul>

                    <a href="https://farm-space.herokuapp.com/"><button>See online <FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/></button></a>
                    
                </div>

                <div className="ProjectDetails-images">
                    <div className="ProjectDetails-image">
                        <img src={farm_space1} alt="farm_space" />
                    </div>
                    <div className="ProjectDetails-image">
                        <img src={farm_space2} alt="farm_space" />
                    </div>
                </div>

                <div className="ProjectDetails-textImg">
                    <div className="ProjectDetails-vertical">
                        <img src={farm_space3} alt="farm_space" />
                    </div>

                    <div className="ProjectDetails-technologies">

                        <div className="ProjectDetails-project" style={{backgroundColor: isDarkMode ? "var(--box-bg-dark)" : "var(--box-bg-light)"}}>
                            <p>FarmSpace is a Node Express app built using ejs as a templating language.
                                The app is connected to the Mongo database via Mongoose object data mapper.</p>
                            <p>This is a full CRUD app, so it provides an inteface for farmers to create, adjust and
                                completely manage their farms and products, but it also enables customers to manage their reviews.</p>
                        </div>

                        <div className="ProjectDetails-project">
                            <h5>TECHNOLOGIES USED</h5>
                            <ul>
                            <li>Express.js with Express Router</li>
                            <li>MongoDB Atlas with Mongoose ODM</li>
                            <li>Bootstrap</li>
                            <li>Passport authentication middleware for Node.js</li>
                            <li>Cloudinary image-management solution</li>
                            <li>Mapbox platform sevices with geocoding API</li>
                            <li>and many smaller packages, tools and libraries</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </section>



            <section className="ProjectDetails-projects">

                <div className="ProjectDetails-project">
                    <h4>ProCodex</h4>

                    <p>ProCodex represents a web presentation of an ICT company from Belgrade.</p>
                    <p style={{marginTop:"0.7rem"}}>This is a Next.js project bootstrapped with create-next-app and is deployed 
                        to the Vercel Platform which is built by the creators of Next.js.</p>
                    <a href="https://pcx.vercel.app/"><button>See online <FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/></button></a>
                </div>

                <div className="ProjectDetails-images">
                    <div className="ProjectDetails-image">
                        <img src={pcx1} alt="procodex" />
                    </div>
                    <div className="ProjectDetails-image">
                        <img src={pcx2} alt="procodex" />
                    </div>
                </div>

                <div className="ProjectDetails-textImg">
                    <div className="ProjectDetails-vertical">
                        <img src={pcx3} alt="procodex" />
                    </div>

                    <div className="ProjectDetails-technologies">

                        <div className="ProjectDetails-project">
                            <p>This project is using some of the external services, 
                                such as Mapbox platform services and EmailJS SDK. </p>
                            <p>It is also using Bootstrap 5 for styling purposes, 
                                in addition to the Next.js built-in CSS suport.</p>
                        </div>

                        <div className="ProjectDetails-project">
                            <h5>TECHNOLOGIES USED</h5>
                            <ul>
                                <li>React Next.js</li>
                                <li>Bootstrap</li>
                                <li>Mapbox platform sevices</li>
                                <li>EmailJS SDK</li>
                                <li>and many smaller packages, tools and libraries</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </section>

            <section className="ProjectDetails-final"> 

            <p>
                <a href="https://github.com/vekti89"><FontAwesomeIcon icon={faGithub} className="Navbar-icon"/></a>
                <a href="mailto:vekti89@gmail.com" ><FontAwesomeIcon icon={faAt} className="Navbar-icon"/></a>
                <Link to="/cv"><button> CV <FontAwesomeIcon icon={faFileAlt} className="pdfIcon"/></button></Link>
            </p>

            </section>

        </main>
    )
}

export default ProjectDetails;