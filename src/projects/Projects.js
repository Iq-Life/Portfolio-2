import React from "react";
import s from "./Projects.module.css"
import sContainer from "./../common/styles/Container.module.css"

export const Projects = () => {
    return (
        <div className={`${sContainer.page} ${s.page}`}>
            <div className={`${sContainer.bloc} ${s.bloc}`}>
                <div className={sContainer.titlePage}>
                    <h2>My projects</h2>
                </div>
                <div className={s.blocProjects}>
                    <div className={s.project}>
                        <span className={s.icon}>img</span>
                        <h3>SocialNetwork</h3>
                        <p>detailed description of the project</p>
                    </div>
                    <div className={s.project}>
                        <span className={s.icon}>img</span>
                        <h3>Todolist</h3>
                        <p>detailed description of the project</p>
                    </div>
                </div>
            </div>
        </div>
    )
}