import React from 'react';
import classnames from 'classnames';
import 'primer-breadcrumb/index.scss';

const BreadcrumbItem = ({ href, selected, children, className }) => {

    const classNames = classnames(
        'breadcrumb-item',
        {
            'breadcrumb-item-selected': selected
        },
        className
    );
    return (
        <li className={classNames}>
            {href ?
                <a href={href}>{children}</a> :
                children
            }
        </li>
    );
};


const Breadcrumb = ({ children }) => {

    return (
        <nav aria-label="Breadcrumb">
            <ol>
                {children}
            </ol>
        </nav>
    );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
