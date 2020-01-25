import React, {useState} from 'react';
import {Container, Navbar, NavbarItem, NavbarBurger, NavbarBrand, NavbarMenu, NavbarStart, NavbarEnd} from "bloomer";
import "./app-header.css"
import {Link} from "react-router-dom";
import Avatar from "../avatar";
import user1 from "../../images/user1.png";


const AppHeader = () => {

    const [isActive, setIsActive] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(true)

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
                            <Link to='/'>О проекте</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to='/faq'>Часто задаваемые вопросы</Link>
                        </NavbarItem>
                    </NavbarStart>
                    {!isAuthorized &&
                    <NavbarEnd>
                        <NavbarItem>
                            <Link to="/login" onClick={() => setIsAuthorized(!isAuthorized)}>Вход</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/register">Регистрация</Link>
                        </NavbarItem>
                    </NavbarEnd>
                    }
                    {isAuthorized &&
                    <NavbarEnd>
                        <NavbarItem>
                            <Avatar image={user1} size={32} />
                            <Link to="/profile/1">
                                <div>Камила К.</div>
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/logoff" onClick={() => setIsAuthorized(false)}>
                                <div className="logout-button"></div>
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