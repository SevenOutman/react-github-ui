/**
 * Menu
 * @see https://github.com/primer/primer/blob/master/modules/primer-navigation/README.md#menu
 */
import React from 'react';
import classnames from 'classnames';

const MenuItem = ({ href, selected, children }) => {
    const classNames = classnames(
        'menu-item',
        {
            'selected': selected
        }
    );
    // todo aria-current="page"
    return (
        <a href={href} className={classNames}>{children}</a>
    );
};


const MenuHeading = ({ children }) => <span className="menu-heading">{children}</span>;

const Menu = ({ children }) => {
    return (
        <nav className="menu">{children}</nav>
    );
};

Menu.Item = MenuItem;
Menu.Heading = MenuHeading;

export default Menu;
