import React from "react";
import s from "./Footer.module.css"
import sContainer from "./../common/styles/Container.module.css"

export const Footer = () => {
    return (
        <div className={`${sContainer.page} ${s.page}`}>
            <div className={`${sContainer.bloc} ${s.bloc}`}>
                <div className={sContainer.titlePage}>
                    <h3>Pavel Vavilin</h3>
                </div>
                <div className={s.icons}>
                    <div className={s.icon}>1</div>
                    <div className={s.icon2}>2</div>
                    <div className={s.icon}>3</div>
                    <div className={s.icon2}>4</div>
                    <div className={s.icon}>5</div>
                    <div className={s.icon2}>6</div>
                    <div className={s.icon}>7</div>
                </div>
                <div>© 2021 All Rights Reserved.</div>
            </div>
        </div>
    )
}