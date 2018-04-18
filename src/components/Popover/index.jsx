import React from 'react';
import classnames from 'classnames';
import 'primer-popover/index.scss';


const Popover = ({ position = 'top', large, children, className }) => {
    const classNames = classnames(
        'Popover',
        className
    );

    const messageClassNames = classnames(
        'Popover-message',
        `Popover-message--${position}`,
        {
            'Popover-message--large': large,
        },
        'text-left p-4 mt-2 mx-auto Box box-shadow-large'
    );

    return (
        <div className={classNames}>
            <div className={messageClassNames}>
                {children}
            </div>
        </div>
    );
};

export default Popover;
