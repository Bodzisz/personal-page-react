import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import './Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch("/projects.json")
        .then(res => res.json())
        .then(projects => setProjects(projects))
        .then(setLoading(false))
        .catch((e) => {
            console.log(e);
            setHasError(true);
        });
    }, []);


    if(loading) return <div className="center-div" aria-busy="true"></div>
    if(hasError) return <div className="center-div">Server Error :(</div>

    return (
        <div className="cards-grid">
            {projects.map(project => (
                <Card project={project} key={project.id}/>
            ))}
        </div>
    );
}

export default Projects;