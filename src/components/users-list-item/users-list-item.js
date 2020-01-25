import React from "react";
import {Content} from "bloomer";
import {Link} from "react-router-dom";

const UsersListItem = ({user}) => {
    const {userInfo, age, userCity, id} = user;
    return (
        <Content isDisplay="flex">
            <figure className="image is-64x64">
                <Link to={`/profile/${id}`}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className="is-rounded"
                     src="https://bulma.io/images/placeholders/64x64.png"
                     alt="Image"/>
                </Link>
            </figure>
            <div style={{"width": "225px"}}>
                <div style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "500",
                    "font-size": "18px",
                    "line-height": "21px",
                    "letter-spacing": "0.25px",

                    "color": "#000000"
                }}>{user.name}
                </div>
                <div style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": "14px",
                    "line-height": "16px",
                    "letter-spacing": "0.25px",

                    "color": "#000000"
                }}>{age}, {userCity}
                </div>
            </div>
            <div style={{
                "width": "352px"
            }}>
                <Content>
                    {/*<h1>Content</h1>*/}
                    <p style={{
                        "font-family": "Roboto",
                        "font-style": "italic",
                        "font-weight": "normal",
                        "font-size": "14px",
                        "line-height": "16px",
                        "letter-spacing": "0.25px",

                        "color": "#000000"
                    }}>{userInfo}</p>
                </Content>
            </div>
        </Content>
    );
};

export default UsersListItem;