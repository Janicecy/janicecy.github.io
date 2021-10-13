import jsIcon from './assets/images/js_icon.png'
import flaskIcon from './assets/images/flask_icon.png'
import vueIcon from './assets/images/vue_icon.png'
import reactIcon from './assets/images/react_icon.png'
import nodejsIcon from './assets/images/nodejs_icon.png'
import chat_room_md from 'docs/chat_room.md'
import twitter_trend_md from 'docs/twitter_trend.md'
import top_movies_md from 'docs/top_movies.md'

export const projects = [
    {
        name: 'react-express-chat-room',
        desc: 'A real-time chat room application built with Socket.IO',
        link: 'https://github.com/JANICECY/react-express-chat-room',
        icons: [reactIcon, nodejsIcon],
        filePath: chat_room_md
    },
    {
        name: 'vue-top-movies',
        desc: 'A full-stack web application built with Vue2 and Flask. Get a glimpse of IMDB top 250 rated movies and simple analytics with web crawler.',
        link: 'https://github.com/Janicecy/vue-top-movies',
        icons: [vueIcon, flaskIcon],
        filePath: top_movies_md
    },
    {
        name: 'react-twitter-trend-app',
        desc: 'A React and Flask application, get latest Twitter trends via Twitter APIs',
        link: 'https://github.com/JANICECY/react-twitter-trend-app',
        icons: [reactIcon, flaskIcon],
        filePath: twitter_trend_md
    }
]


export const algorithmNotes = [
    {
        name: 'Counting Reverse Pairs',
        path: ''
    }
]