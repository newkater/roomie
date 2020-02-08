import React from "react";
import "./promo-block.css";
import {withRouter} from 'react-router-dom';
import {Link} from "react-router-dom";

const PromoBlock = ({onAnchorClick, history}) => {
    const handleClick = () => {
        if (isAuthorized) {
            onAnchorClick();
        }
        else {
            history.push('/login');
        }
    }
    const isAuthorized=sessionStorage.getItem('isAuthorized');
    return (
        <div className="promo-block">
            <h3 className="title3">Поиск сожителей стал гораздо проще</h3>
            <div className="promo-block-text">
                Roomie решает все проблемы с поиском и находит сожителей по вашим критериям!
            </div>
            <Link onClick={handleClick} className="promo-block-button">
                Начать поиск
            </Link>
        </div>
    )
}

export default withRouter(PromoBlock);