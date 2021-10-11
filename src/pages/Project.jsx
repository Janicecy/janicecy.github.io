import React from 'react'
import jsIcon from '../assets/images/js_icon.png'
import flaskIcon from '../assets/images/flask_icon.png'
import vueIcon from '../assets/images/vue_icon.png'
import reactIcon from '../assets/images/react_icon.png'
import ParticleBG from './ParticleBG'
import nodejsIcon from '../assets/images/nodejs_icon.png'

export default function Project() {
    const projects = [
        {
            name: 'react-express-chat-room',
            desc: 'A real-time chat room application built with Socket.IO',
            link: 'https://github.com/JANICECY/react-express-chat-room',
            icons: [reactIcon, nodejsIcon]
        },
        {
            name: 'react-twitter-trend-app',
            desc: 'A React and Flask application, get latest Twitter trends via Twitter APIs',
            link: 'https://github.com/JANICECY/react-twitter-trend-app',
            icons: [reactIcon, flaskIcon]
        },
        {
            name: 'vue-top-movies',
            desc: 'A full-stack web application built with Vue2 and Flask. Get a glimpse of IMDB top 250 rated movies and simple analytics with web crawler.',
            link: 'https://github.com/Janicecy/vue-top-movies',
            icons: [vueIcon, flaskIcon]
        }
    ]


    const renderProject = ({ name, desc, link, icons }) => {
        return (
            <a className='project-wrapper' href={link} target='_blank'>
                <p className='project-header'>
                    <span className='project-name'>{name}</span>
                    {icons.map(i => <img src={i} alt={i} className='project-icon' style={{ marginLeft: 5 }} />)}
                </p>
                <p className='project-desc'>{desc}</p>
            </a>
        )
    }

    return (
        <div id='project-section'>
            <ParticleBG />
            <h3 id='highlight'>Project <span style={{ color: 'rgba(241, 196, 15,1.0)' }}>Highlights</span></h3>
            <div id='projects'>
                {projects.map(item => renderProject(item))}
            </div>
        </div>
    )
}
