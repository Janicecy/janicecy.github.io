import React from 'react'
import '../App.css';
import ParticleBG from './ParticleBG'
import { projects } from '../consts';

export default function AboutMe() {

    const renderProject = ({ name, desc, link, icons }) => {
        return (
            <a className='project-wrapper' href={link} target='_blank'>
                <p className='project-header'>
                    <span className='project-name'>{name}</span>
                    {icons.map(i => <img src={i} alt={i} className='icon-img' style={{ marginLeft: 5 }} />)}
                </p>
                <p className='project-desc'>{desc}</p>
            </a>
        )
    }


    return (
        <div style={{ color: '#fff' }}>
            <ParticleBG />
            <div style={{ fontSize: '3em', fontWeight: 'bold', marginBottom: 20 }}>Hello,</div>
            <div style={{ fontSize: "2em", fontWeight: 'bold' }} >My name is  <span style={{ color: 'rgba(241, 196, 15,1.0)' }}>Ying Chen</span> </div>
            <p>I am a full-stack developer with 2-year work experience in React.js and Node.js.</p>
            <p>I am always open to new technologies and enjoy challenging things.</p>
            <p>You can find me on &nbsp;
                <a className='ft-yellow' target='_blank' href='https://github.com/JANICECY'>GitHub</a>,&nbsp;
                <a className='ft-yellow' target='_blank' href='https://www.linkedin.com/in/janicecy/'>LinkedIn</a>&nbsp;
                or <a className='ft-yellow' target='_blank' href="mailto:janicecy1217@gmail.com"> janicecy1217@gmail.com</a>.
            </p>

            <div id='project-section'>
                <ParticleBG />
                <div style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: 20 }} >Project <span className='ft-yellow' >Highlights</span></div>
                <div id='projects'>
                    {projects.map(item => renderProject(item))}
                </div>
            </div>
        </div >
    )
}
