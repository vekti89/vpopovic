import './Navbar.css';
import background from './images/navbar_bg.jpg'; 
import profile from './images/profile1.png'; 

import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDoubleRight, faAt, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

import ToggleSwitch from "./components/ToggleSwitch";
import { useContext } from 'react';
import {ThemeContext} from "./contexts/ThemeContext";

function Navbar() {
    const {isDarkMode} = useContext(ThemeContext);
    return (
       
        <main className="Navbar">

            <img className="Navbar-image" src={background} alt=""/>
        	
            <section className="Navbar-content">
                <div className="Navbar-theme">
                    <p><span>{isDarkMode? "Light" : "Dark"}</span> Mode</p>
                    <ToggleSwitch />
                    </div>
            

                <div className="Navbar-profile">
                    <img className="Navbar-profileImg" src={profile} alt="profile"/>
                    <h3>Vesna <span>Popovic</span></h3>
                    <h5>Web Developer</h5>
                </div>
                
                <hr style={{borderColor:"var(--my-color)"}}/>
                
                <div className="Navbar-nav">
                    <div className="Navbar-navigation">
                        <NavLink activeclassname="active" to="/">Home <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span></NavLink>
                        <NavLink activeclassname="active" to="/projects">Projects <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span></NavLink>
                    </div>

                    <div className="Navbar-contact">
                        <p>Get in touch</p>
                        <span>
                            <a href="https://github.com/vekti89"><FontAwesomeIcon icon={faGithub} className="Navbar-icon"/></a>
                            <a href="mailto:vekti89@gmail.com"><FontAwesomeIcon icon={faAt} className="Navbar-icon"/></a>                 
                            <Link to="/cv"><button> CV <FontAwesomeIcon icon={faFileAlt} className="pdfIcon"/></button></Link>
                        </span>
                    </div>

                </div>

            </section>

        </main>
      
    
    );
  }
  
  export default Navbar;