import './App.css';
import jsIcon from './assets/images/js_icon.png'
import flaskIcon from './assets/images/flask_icon.png'
import ParticleBG from './ParticleBG'
function App() {
  const projects = [
    {
      name: 'react-express-chat-room',
      desc: 'A real-time chat room application built with Socket.IO',
      link: 'https://github.com/JANICECY/react-express-chat-room',
      icons: [jsIcon]
    },
    {
      name: 'react-twitter-trend-app',
      desc: 'A React and Flask application, get latest Twitter trends via Twitter APIs',
      link: 'https://github.com/JANICECY/react-twitter-trend-app',
      icons: [jsIcon, flaskIcon]
    }
  ]


  const renderProject = ({ name, desc, link, icons }) => {
    return (
      <a className='project-wrapper' href={link} target='_blank'>
        <p className='project-header'>
          <span className='project-name'>{name}</span>
          {icons.map(i => <img src={i} className='project-icon' />)}
        </p>
        <p className='project-desc'>{desc}</p>
      </a>
    )
  }

  return (
    <>
      <ParticleBG />
      <div id='profile'>
        <h1>Hello,</h1>
        <h2 >My name is  <span style={{ color: 'rgba(241, 196, 15,1.0)' }}>Ying Chen</span> </h2>
        <p>I am a full-stack developer and I have 1-year work experience in React.js and Node.js.</p>
        <p>Outside of programming, I enjoy video games and coffee.</p>
        <p>You can find me on <a style={{ color: 'rgba(241, 196, 15,1.0)' }} href='https://github.com/JANICECY'>GitHub</a>  or reach me on <a style={{ color: 'rgba(241, 196, 15,1.0)' }} href="mailto:janicecy1217@gmail.com"> janicecy1217@gmail.com</a>.
          </p>
      </div>
      <div id='project-section'>
        <h3 id='highlight'>Project <span style={{ color: 'rgba(241, 196, 15,1.0)' }}>Highlights</span></h3>
        <div id='projects'>
          {projects.map(item => renderProject(item))}
        </div>
      </div>
    </>
  );
}



export default App;
