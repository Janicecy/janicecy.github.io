import React from 'react';
import { makeStyles } from '@mui/styles';
import { projects } from '../consts';
import Masonry from 'react-masonry-css'

const useStyles = makeStyles(() => ({
  root: {

  },
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #001529 , #2c3e50)',
    margin: '30px 0'
  },
  project: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    flexWrap: 'wrap',
    margin: '0 100px 50px 0',
    color: 'black',
    paddingBottom: 20,
    "& img": {
      width: '100%',
      backgroundSize: 'cover'
    },
    boxShadow: '0px 5px 20px #001529',
    "& > *": {
      marginBottom: 20
    },
    "& .name": {
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    "& .description": {
      fontSize: '1.5rem',
      padding: '0 10%',
      color: '#2c3e50',
      lineHeight: 1.8,
      textAlign: 'center'
    },
    "& .linkGroup": {
      display: 'flex'
    }
  },
  '@media (max-width: 600px)': {
    project: {
      margin: '0 0 40px 0'
    }
  },
}))
export default function Projects() {
  const classes = useStyles()

  const openPage = (link) => window.open(link, '_blank')

  const renderProject = ({ imgPath, name, desc, githubLink, demoLink }) => (
    <div className={classes.project}>
      <img src={imgPath} alt={name}/>
      <div className='name'>{name}</div>
      <div className='description'>{desc}</div>
      <div className='linkGroup'>
        <button
          className='button-54'
          style={{ display: !githubLink && 'none' }}
          onClick={() => openPage(githubLink)}
        >
          Github
        </button>
        <button
          className='button-54'
          style={{ display: !demoLink && 'none' }}
          onClick={() => openPage(demoLink)}
        >
          Demo
        </button>
      </div>
    </div>
  )

  return (
    <div id='projects' className={classes.root}>
      <h1 className={classes.header}>Project Highlights</h1>
      <Masonry
        breakpointCols={window.innerWidth > 600 ? 2 : 1}
        className="my-masonry-grid"
        columnClassName={classes.projects}
      >
        {projects.map(i => renderProject(i))}
      </Masonry>

    </div>
  );
}
