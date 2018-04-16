import React from 'react';
import classnames from 'classnames';

const Label = ({ title, theme, children, className }) => {
    const classNames = classnames(
        'Label',
        {
            [`Label--${theme}`]: !!theme,
            'Label--outline': theme.startsWith('outline')
        },
        className
    );

    return (
        <span className={classNames} title={title}>{children}</span>
    );
};

export default Label;
