import React from 'react';
import classnames from 'classnames';

const Item = ({ href, selected, count, children }) => {
    const classNames = classnames(
        'filter-item',
        {
            'selected': selected
        }
    );
    return (
        <li>
            <a href={href} className={classNames}>
                <span className="count">{count}</span>
                {children}
            </a>
        </li>
    )
};

const FilterList = ({ children }) => {

    return (
        <ul className="filter-list">
            {children}
        </ul>
    );
};

FilterList.Item = Item;

export default FilterList;
