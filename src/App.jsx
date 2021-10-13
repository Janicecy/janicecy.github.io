import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import { Menu, } from 'antd';
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
      
      <div id='menu-wrapper' style={{ width: 300 }}>
        <Menu
          onClick={
            ({ key }) => {
              history.push('/' + key)
            }
          }

          style={{ width: 300, height: "100vh", position: 'fixed' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['about']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="about" icon={<SmileOutlined />}>About me </Menu.Item>
          <SubMenu key="project" icon={<SettingOutlined />} title="Projects">
            {renderProjectMenus()}
          </SubMenu>
          {/* <SubMenu key="Algo" icon={<SettingOutlined />} title="Algorithm Notes">
            {renderAlgoNoteMenus()}
          </SubMenu> */}
        </Menu>
      </div>


      <div id='content' style={{ padding: '3%', overflow: "auto" }}>
        <Switch>
          <Route component={AboutMe} path='/about' />
          <Route component={Project} path='/project/:projectName' />
          {/* <Redirect to="/about" /> */}
        </Switch>
      </div>
    </div>
  );
}

