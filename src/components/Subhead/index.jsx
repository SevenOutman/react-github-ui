import React from 'react';
import classnames from 'classnames';
import 'primer-subhead/index.scss';

const Subhead = ({ spacious, description, actions, danger, children }) => {

    const classNames = classnames(
        'Subhead',
        {
            'Subhead--spacious': spacious
        }
    );

    const headingClassNames = classnames(
        'Subhead-heading',
        {
            'Subhead-heading--danger': danger
        }
    );

    return (
        <div className={classNames}>
            <div className={headingClassNames}>{children}</div>
            {
                actions &&
                <div className="Subhead-actions">{actions}</div>
            }
            {
                description &&
                <div className="Subhead-description">{description}</div>
            }
        </div>
    );
};

export default Subhead;
