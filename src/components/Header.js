import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink exact={true} to="/" activeClassName="is-active">Home</NavLink> |
            <NavLink to="/help" activeClassName="is-active">Help</NavLink> |
            <NavLink to="/create" activeClassName="is-active">Add</NavLink>
        </div>
    </header>
)

export default Header