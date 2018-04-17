import React, { cloneElement } from 'react';
import classnames from 'classnames';

const Item = ({ href, selected, children }) => {
    const classNames = classnames(
        'subnav-item',
        {
            'selected': selected
        }
    );
    return (
        <a href={href} className={classNames}>{children}</a>
    )
};

const normal = ({ children }) => {
    return (
        <nav className="subnav">{children}</nav>
    );
};

const withSearch = ({ search, children }) => {

    return (
        <div className="subnav">
            <nav className="subnav-links">
                {children}
            </nav>
            <div className="subnav-search float-left">
                {cloneElement(search, { className: classnames('subnav-search-input', search.props.className) })}
            </div>
        </div>
    )
};

const SubNav = props => props.search ? withSearch(props) : normal(props);
SubNav.Item = Item;

export default SubNav;
