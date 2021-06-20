import React from "react";
import s from "./Home.module.css"

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.bloc}>
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