import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import { Menu } from 'antd';
import { AppstoreOutlined, SmileOutlined, SettingOutlined } from '@ant-design/icons';
import ParticleBG from './pages/ParticleBG'
import Project from './pages/Project';
import { projects, algorithmNotes } from './consts';

const { SubMenu } = Menu;


export default function App(props) {
  const history = useHistory()


  const renderProjectMenus = () => {
    return projects.map(project => {
      const { name } = project
      return <Menu.Item key={`project/${name}`}>{name}</Menu.Item>
    })

  }


  const renderAlgoNoteMenus = () => {
    return algorithmNotes.map(note => {
      const { name } = note
      return <Menu.Item key={`algo/${name}`}>{name}</Menu.Item>
    })
  }
  return (
    <div style={{ display: 'flex' }}>


      <Menu
        onClick={
          ({ key }) => {
            history.push('/' + key)
          }
        }

        style={{ width: 300, height: "100vh" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['about']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="about" icon={<SmileOutlined />}>About me </Menu.Item>
        <SubMenu key="project" icon={<SettingOutlined />} title="Projects">
          {renderProjectMenus()}
        </SubMenu>
        <SubMenu key="Algo" icon={<SettingOutlined />} title="Algorithm Notes">
          {renderAlgoNoteMenus()}
        </SubMenu>
      </Menu>


      <div id='content' style={{ padding: '3%' }}>
        <Switch>
          <Route component={AboutMe} path='/about' />
          <Route component={Project} path='/project' />
          {/* <Redirect to="/about" /> */}
        </Switch>
      </div>

      {/* <div id='profile'>
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
      </div> */}
    </div>
  );
}

