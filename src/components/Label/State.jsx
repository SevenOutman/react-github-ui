import React from 'react';
import classnames from 'classnames';

const State = ({ title, theme, small, children }) => {
    const classNames = classnames(
        'State',
        {
            [`State--${theme}`]: !!theme,
            'State--small': small
        }
    );
    return (
        <span className={classNames} title={title}>{children}</span>
    );
};

export default State;
