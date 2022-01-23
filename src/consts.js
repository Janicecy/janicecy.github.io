import sudoku from './assets/images/sudoku.png'
import chat_room from './assets/images/chat_room.png'
import data from './assets/images/1.png';
import capstone from './assets/images/capstone.png'

export const projects = [
    {
        name: 'Sudoku Solver',
        desc: 'Watch your computer play Sudoku. Visualization of how backtracking algorithm can solve a sudoku puzzle. Built with Typescript and React.',
        githubLink: 'https://github.com/Janicecy/sudoku-puzzle',
        imgPath: sudoku,
        demoLink: 'https://janicecy.github.io/sudoku-puzzle/'
    },
    {
        name: 'Real-time Chat Room',
        desc: 'Established bilateral communication between a server and its clients using Socket.IO, providing the ability to share messages or images and notify users of events in real-time.',
        githubLink: 'https://github.com/JANICECY/react-express-chat-room',
        imgPath: chat_room,
        demoLink: 'https://react-express-chat-room.herokuapp.com/'
    },
    {
        name: 'Data Visualizations',
        desc: 'Visualize data supplied from the API endpoints in the means of chart, table, and map. Built with React and Ant Design Charts.',
        githubLink: 'https://github.com/Janicecy/ws-product-python',
        demoLink: 'https://ws-product-python-yingchen.glitch.me/',
        imgPath: data
    },
    {
        name: 'IMDB Top Movies ',
        desc: 'A full-stack web application built with Vue2 and Flask. Get a glimpse of IMDB top 250 rated movies and simple analytics with web crawler.',
        githubLink: 'https://github.com/Janicecy/vue-top-movies',
        imgPath: 'https://github.com/Janicecy/vue-top-movies/raw/master/demo-imgs/home.png'
    },
    {
        name: 'Document Management System',
        desc: 'Worked with team members to build a web-based document management system for internal business use.',
        imgPath: capstone
    }
]
