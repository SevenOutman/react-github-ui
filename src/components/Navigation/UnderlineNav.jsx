/**
 * UnderlineNav
 *
 * @see https://github.com/primer/primer/blob/master/modules/primer-navigation/README.md#underline-nav
 */
import React from 'react';
import classnames from 'classnames';

const UnderlineNavItem = ({ href, title, selected, children }) => {
    const classNames = classnames(
        'UnderlineNav-item',
        {
            'selected': selected
        }
    );
    return (
        <a href={href} role="tab" title={title} className={classNames}>{children}</a>
    );
};

const UnderlineNav = ({ right, full, actions, children }) => {
    const classNames = classnames(
        'UnderlineNav',
        {
            'UnderlineNav--right': right,
            'UnderlineNav--full': full
        }
    );
    return full ? (
        <nav className={classNames}>
            <div className="container-lg UnderlineNav-container">
                {
                    right &&
                    <div className="UnderlineNav-actions">
                        {actions}
                    </div>
                }
                <div className="UnderlineNav-body">
                    {children}
                </div>
                {
                    !right &&
                    <div className="UnderlineNav-actions">
                        {actions}
                    </div>
                }
            </div>
        </nav>
    ) : (
        <nav className={classNames}>
            {
                right &&
                <div className="UnderlineNav-actions">
                    {actions}
                </div>
            }
            <div className="UnderlineNav-body">
                {children}
            </div>
            {
                !right &&
                <div className="UnderlineNav-actions">
                    {actions}
                </div>
            }
        </nav>
    );
};

UnderlineNav.Item = UnderlineNavItem;

export default UnderlineNav;
