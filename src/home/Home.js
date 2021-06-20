import React from "react";
import s from "./Home.module.css"
import sContainer from "./../common/styles/Container.module.css"

export const Home = () => {
    return (
        <div className={`${s.page} ${sContainer.page}`}>
            <div className={`${s.bloc} ${sContainer.bloc}`}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I am Pavel Vavilin</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}>IMG</div>
            </div>
        </div>
    )
}