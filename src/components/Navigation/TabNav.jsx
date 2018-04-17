import React from 'react';
import classnames from 'classnames';

const Tab = ({ href, selected, children }) => {
    const classNames = classnames(
        'tabnav-tab',
        {

            'selected': selected
        }
    );
    return (
        <a href={href} className={classNames}>{children}</a>
    );
};

// todo right
const TabNav = ({ children }) => {

    return (
        <div className="tabnav">
            <nav className="tabnav-tabs">
                {children}
            </nav>
        </div>
    );
};

TabNav.Tab = Tab;

export default TabNav;
