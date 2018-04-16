import React from 'react';
import classnames from 'classnames';

const Counter = ({ theme, children }) => {
    const classNames = classnames(
        'Counter',
        {
            [`Counter--${theme}`]: !!theme
        }
    );
    return (
        <span className={classNames}>{children}</span>
    );
};

export default Counter;
