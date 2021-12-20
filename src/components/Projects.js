import './Projects.css';
import farm_space from "../images/farm_space1.png";
import pcx from "../images/pcx1.png";

import { Link } from "react-router-dom";

function Projects() {
  return (
      <main className="Projects">
          
          <Link className="Projects-project" to="/projects">
              <img src={farm_space} alt="farm_space"/>
              <h4>FarmSpace</h4>
              <p>Marketplace app connecting farmers and customers in the Bay Area.</p>
          </Link>
          <Link className="Projects-project" to="/projects">
              <img src={pcx} alt="procodex" />
              <h4>ProCodex</h4> 
              <p>Web presentation of an ICT company from Belgrade.</p>
          </Link>

      </main>
  )
}
export default Projects;