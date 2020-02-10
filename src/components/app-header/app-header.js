import React, {useState, useEffect} from 'react';
import {Container, Navbar, NavbarItem, NavbarBurger, NavbarBrand, NavbarMenu, NavbarStart, NavbarEnd} from "bloomer";
import "./app-header.css"
import {Link} from "react-router-dom";
import Avatar from "../avatar";
import camera from "./../../images/camera-black.svg";


const AppHeader = () => {

    const email = sessionStorage.getItem("email");
    const name = sessionStorage.getItem("name");
    const photo = sessionStorage.getItem("photo");
    const id = sessionStorage.getItem("id");
    const isAuthorized = sessionStorage.getItem("isAuthorized");
    //const password = sessionStorage.getItem("password");

    const [isActive, setIsActive] = useState(false);

    return (
        <Navbar>
            <Container>
                <NavbarBrand>
                    <NavbarItem>
                        <Link to="/">
                            <div className={"logo"}>Roomie</div>
                        </Link>
                    </NavbarItem>
                    <NavbarBurger isActive={isActive} onClick={() => setIsActive(!isActive)}/>
                </NavbarBrand>
                <NavbarMenu isActive={isActive} onClick={() => setIsActive(false)}>
                    <NavbarStart>
                        <NavbarItem>
                            <Link to='/'>Главная</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to='/about'>О проекте</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to='/faq'>Часто задаваемые вопросы</Link>
                        </NavbarItem>
                    </NavbarStart>
                    {!isAuthorized &&
                    <NavbarEnd>
                        <NavbarItem>
                            <Link to="/login">Вход</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/register">Регистрация</Link>
                        </NavbarItem>
                    </NavbarEnd>
                    }
                    {isAuthorized &&
                    <NavbarEnd>
                        <NavbarItem>
                            <Link to={`/profile/${id}`}><Avatar image={photo==="undefined"?camera:photo} size={32} /></Link>
                            <Link to={`/profile/${id}`}>
                                <div>{name}</div>
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/" onClick={() => {
                                sessionStorage.removeItem("name");
                                sessionStorage.removeItem("photo");
                                sessionStorage.removeItem('email');
                                sessionStorage.removeItem('password');
                                sessionStorage.removeItem('isAuthorized');
                                window.location.reload();
                            }}>
                                <div className="logout-button"/>
                            </Link>
                        </NavbarItem>

                    </NavbarEnd>
                    }

                </NavbarMenu>
            </Container>
        </Navbar>
    );
};

export default AppHeader;