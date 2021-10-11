import React, { useState, useEffect } from 'react'
import ParticleBG from './ParticleBG'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { projects } from '../consts'
export default function Project() {

    const [mdContent, setMdContent] = useState('')
    const { projectName } = useParams()

    useEffect(() => {
        const projectConfig = projects.find(({ name }) => name === projectName)
        fetch(projectConfig.filePath)
            .then(response => {
                return response.text()
            })
            .then(text => {
                console.log(text);
                setMdContent(text)
            })
            .catch(e => console.log(e))
    }, [projectName])


    const renderers = {
        //This custom renderer changes how images are rendered
        //we use it to constrain the max width of an image to its container
        image: ({
            alt,
            src,
            title,
        }) => (
            <img
                alt={alt}
                src={src}
                title={title}
                style={{ maxWidth: 350 }} />
        ),
    };


    return (
        <div>
            {/* <ParticleBG /> */}

            <ReactMarkdown escapeHtml={false} children={mdContent} renderers={renderers} />

        </div>
    )
}
