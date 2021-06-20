import React from "react";
import s from "./Contacts.module.css"
import sContainer from "./../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={`${sContainer.page} ${s.page}`}>
            <div className={`${sContainer.bloc} ${s.bloc}`}>
                <div className={sContainer.titlePage}>
                    <h2>Contacts</h2>
                </div>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button className={s.button}>Sent</button>
            </div>
        </div>
    )
}