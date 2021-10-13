import React, { useState, useEffect } from 'react'
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


    return (
        <ReactMarkdown escapeHtml={false} children={mdContent} />
    )
}
