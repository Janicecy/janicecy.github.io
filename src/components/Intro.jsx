import React from 'react';
import { makeStyles } from '@mui/styles';
import profileImg from '../assets/images/profile.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'linear-gradient(to right, #001529, #34495e)',
    height: '100vh',
    color: '#fff',
    padding: '5% 3%',
    display: 'flex',
    flexDirection: (width) => width > 600 ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    "&>*": {
      marginTop: 20
    },
    position: 'relative'
  },
  profile: {
    width: '25vw',
    marginRight: 30,
    borderRadius: '50%',
    padding: '.5rem',
    opacity: .9,
    "& img": {
      borderRadius: '50%',
      width: '100%'
    }
  },
  iconGroup: {
    "& *": {
      fontSize: '2.5rem',
      marginRight: 10,
      cursor: 'pointer'
    },
    marginTop: '2rem'
  },
  divider: {
    border: 0,
    height: 1,
    backgroundImage: 'linear-gradient(to right, #fff, #34495e)'
  },
  info: {
    "& p": {
      fontSize: '1.2rem',
      marginTop: 10,
      lineHeight: 1.5
    },
    '& span': {
      marginRight: 10
    }
  },
  '@media (max-width: 600px)': {
    profile: {
      marginRight: 0,
      width: '60%'
    },
    iconGroup: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}))

const Intro = () => {
  const classes = useStyles(window.innerWidth)
  const openPage = (link) => window.open(link, '_blank')
  return (
    <div className={classes.root}>
      <div className={classes.profile}><img width='100%' src={profileImg} alt='profile' /></div>
      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 20 }}>Hi,
          I'm  <span style={{ color: 'rgba(241, 196, 15,1.0)' }}>Ying👋</span></div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 20 }}>A full-stack developer.</div>
        <hr className={classes.divider} />
        <div className={classes.info}>
          <p><span>🍁</span> Based in Canada</p>
          <p><span>✉️</span> janicecy1217@gmail.com</p>
        </div>
        <div className={classes.iconGroup}>
          <FaGithub onClick={() => openPage('https://github.com/janicecy/')} />
          <FaLinkedin onClick={() => openPage('https://www.linkedin.com/in/janicecy')} />
        </div>

        <section id="scroll-down">
          <a href="#projects"><span></span></a>
        </section>

      </div>
    </div>
  );
}

export default Intro;
