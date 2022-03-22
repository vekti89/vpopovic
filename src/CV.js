import './CV.css';
import profile from './images/profile1.png'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

export default function CV () {
    
    return (
        <main className="CV-wrapper">
            <div className="CV-paper">

                <section className="CV-profile">
                    <img className="CV-profileImg" src={profile} alt="profile" />
                    <div className="CV-profileData">
                        <h3>Vesna <span>Popovic</span></h3>
                        <h5>Web Developer</h5>
                        <p><a href="https://vpopovic.vercel.app">vpopovic.vercel.app <FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/></a></p>
                        <p><a href="mailto:vekti89@gmail.com">vekti89@gmail.com <FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/></a></p>
                        <p><a href="https://github.com/vekti89">github.com/vekti89<FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/></a></p>
                    </div>
                </section>

                <section className="CV-chapter">

                    <h3 className="CV-heading">Skills</h3>
                    <ul className="CV-line">
                        <li> Creating user-friendly and responsive websites using <span>HTML</span> and <span>CSS</span></li>
                        <li> Using <span>Bootstrap</span> prebuilt components, utility classes and grid-system</li>
                        <li> Handling synchronous and asynchronous <span>JavaScript</span> code using <span>ES6+</span> syntax</li>
                        <li> Building apps using <span>React</span> library and working with <span>Next.js</span> framework</li>
                        <li> Using <span>Node.js</span> framework <span>Express.js</span> and <span>npm</span> ecosystem for writing back-end code</li>
                        <li> Working with <span>Mongo</span> database including its cloud-based version <span>Atlas</span></li>
                    </ul>

                </section>

                <section className="CV-chapter">

                    <h3 className="CV-heading">Projects</h3>
                    <p className="CV-description">I have built several projects, most of them in front-end, and one full stack application.</p>
                    <p className="CV-description"><span><a href="https://farm-space.herokuapp.com/">FarmSpace <FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/> </a></span> is a marketplace app connecting farmers and customers in San Francisco Bay Area. It serves both as: </p>
                    <ul className="CV-line">
                        <li> a platform for farm owners to present their farms and products that they are offering</li>
                        <li> a marketplace for customers to buy fresh locally grown food</li>
                    </ul>

                    <p className="CV-description"><span><a href="https://pcx.vercel.app/">ProCodex <FontAwesomeIcon icon={faExternalLinkAlt} className="ProjectDetails-icon"/> </a></span> represents a web presentation of an ICT company from Belgrade.</p>
                    <p className="CV-description">This is a Next.js project bootstrapped with create-next-app and is deployed to the Vercel Platform which is built by the creators of Next.js.</p>
                   
                </section>

                <section className="CV-chapter">

                    <h3 className="CV-heading">Education</h3>
                    <p className="CV-description">University of Belgrade, Faculty of Philology</p>
                    
                    <ul className="CV-line">
                        <li> <span>Master</span> Degree - French Language, Literature and Culture Program <small><span>(2012-2014)</span></small></li>
                        <li> <span>Bachelor</span> Degree - French Language and Literature <small><span>(2008-2012)</span></small></li>
                    </ul>
                    
                </section>

                <section className="CV-chapter">

                    <h3 className="CV-heading">Experience</h3>
                    <p className="CV-description"> 5 years of working experience in interpreting and translating French and Serbian in construction sector. </p>
                    <p className="CV-description"> My scope of work involved: </p>
                    
                    <ul className="CV-line">
                        <li>collaborating internationally with engineering and management teams</li>
                        <li>defining contractual agreements, negotiating business conditions</li>
                        <li>everyday problem solving and a lot of travel</li>
                    </ul>
        
                </section>

                <section className="CV-chapter">

                    <h3 className="CV-heading">Languages</h3>
                    
                    <ul className="CV-line">
                        <li>German (B1/B2)</li>
                        <li>fluent English and French</li>
                        <li>native Serbian</li>
                    </ul>
         
                </section>
            </div>

        </main>
    )
}