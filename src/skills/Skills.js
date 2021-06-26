import React from "react";
import s from "./Skills.module.css"
import sContainer from "./../common/styles/Container.module.css"

export const Skills = () => {
    return (
        <div className={s.page}>
            <div className={`${sContainer.bloc} ${s.bloc}`}>
                <div className={sContainer.titlePage}>
                    <h2>My skills</h2>
                </div>
                <div className={s.blocSkills}>
                    <div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>JS</h3>
                        <p>detailed description of the skill</p>
                    </div>
                    {/*<div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>HTML</h3>
                        <p>detailed description of the skill</p>
                    </div>*/}
                    <div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>CSS</h3>
                        <p>detailed description of the skill</p>
                    </div>
                    <div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>CSS</h3>
                        <p>detailed description of the skill</p>
                    </div>
                    <div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>CSS</h3>
                        <p>detailed description of the skill</p>
                    </div>
                    <div className={s.skill}>
                        <span className={s.icon}>img</span>
                        <h3>React</h3>
                        <p>detailed description of the skill</p>
                    </div>
                </div>
            </div>
        </div>
    )
}