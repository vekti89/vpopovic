import ContactForm from './components/ContactForm';
import Projects from './components/Projects';

import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFileCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faCss3,
  faBootstrap,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main
      className='Home'
      style={{
        backgroundColor: isDarkMode
          ? 'var(--main-bg-dark)'
          : 'var(--main-bg-light)',
      }}
    >
      <section className='Home-intro'>
        <h1>Hi, I am Vesna,</h1>
        <p>
          a self-taught web developer from Serbia, since 2020 based in Vienna.
        </p>

        <p>
          I enjoy building small business websites and interactive web apps that
          look good on any screen.
        </p>

        <span>
          HTML CSS Bootstrap JavaScript React Next.js MongoDB Node.js Express.js
        </span>
      </section>

      <section
        className='Home-story'
        style={{
          backgroundColor: isDarkMode
            ? 'var(--box-bg-dark)'
            : 'var(--box-bg-light)',
        }}
      >
        <div className='story'>
          <h4>My old Story</h4>
          <p>
            By education I am interpreter and translator with university master
            degree and 5 years of working experience in interpreting and
            translating French and Serbian in construction sector.{' '}
          </p>
          <p>
            In my previous work, I was collaborating internationally with
            engineering and management teams, defining contractual agreements,
            negotiating business conditions and taking part in everyday problem
            solving.
          </p>
          <p>
            My job was very dynamic, involved a lot of travel and required
            staying for days or even weeks on another continent.
          </p>
        </div>
        <div className='skills'>
          <h4>Languages</h4>
          <p>
            {' '}
            <span>-</span> German B1/B2
          </p>
          <p>
            {' '}
            <span>-</span> Fluent English
          </p>
          <p>
            {' '}
            <span>-</span> Fluent French
          </p>
          <p>
            {' '}
            <span>-</span> Native Serbian
          </p>
        </div>
      </section>

      <section
        className='Home-story'
        style={{
          backgroundColor: isDarkMode
            ? 'var(--box-bg-dark)'
            : 'var(--box-bg-light)',
        }}
      >
        <div className='story'>
          <h4>My new Story</h4>
          <p>
            After bringing a family decision to move to Austria, I decided to
            start a new career in IT sector, hoping that my interest in web
            development could help me to make this transition. About 2 years ago
            I began learning and now I have certain level of understanding of
            some of the most relevant web technologies. I have built several
            projects, most of them in front-end, and two full stack applications
            since I am interested in back-end as well.
          </p>
          <Link to='/projects'>
            <button>See projects</button>
          </Link>
          <p>
            My current tool-set includes HTML, CSS, Bootstrap, JavaScript, React
            and Next.js framework, Node.js and Express.js framework and MongoDB.
            I am currently focused on getting better in MERN Stack, but picking
            up a new framework or language would not be a problem.
          </p>
          <p>
            What I really love to work with and I am especially interested in is
            <span> React.</span>{' '}
          </p>
        </div>
        <div className='skills'>
          <h4>Technologies</h4>
          <p>
            {' '}
            <span>-</span> HTML, CSS
          </p>
          <p>
            {' '}
            <span>-</span> Bootstrap
          </p>
          <p>
            {' '}
            <span>-</span> JavaScript
          </p>
          <p>
            {' '}
            <span>-</span> React, Next.js
          </p>
          <p>
            {' '}
            <span>-</span> Node, Express
          </p>
          <p>
            {' '}
            <span>-</span> MongoDB
          </p>
        </div>
      </section>

      <section className='Home-projects'>
        <Projects />
      </section>

      <section className='Home-final'>
        <div className='Home-support'>
          <h1>How can I be useful?</h1>
          <p>
            I believe that I could be most productive performing in entry level
            positions that might be available. That could offer me a chance to
            progress, which is very important for me at this moment.
          </p>
          <p>
            Being a part of the team would certainly help me a lot to gain new
            perspectives and I am ready to do my best to fit in very quickly,
            promised.😉
          </p>
          <span>
            <FontAwesomeIcon icon={faFileCode} className='Home-icon' />
            <FontAwesomeIcon icon={faCss3} className='Home-icon' />
            <FontAwesomeIcon icon={faBootstrap} className='Home-icon' />
            <FontAwesomeIcon icon={faNodeJs} className='Home-icon' />
            <FontAwesomeIcon icon={faDatabase} className='Home-icon' />
            <FontAwesomeIcon icon={faReact} className='Home-icon' />
            <FontAwesomeIcon icon={faJsSquare} className='Home-icon' />
          </span>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
