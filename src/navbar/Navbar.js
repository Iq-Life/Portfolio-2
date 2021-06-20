import React from "react";
import s from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </div>
    )
}