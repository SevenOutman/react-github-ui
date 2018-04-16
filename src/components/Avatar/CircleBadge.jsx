import React, { cloneElement } from 'react';
import classnames from 'classnames';

const asDiv = ({ size, children, className, ...attrs }) => {
  const classNames = classnames(
    'CircleBadge',
    {
      [`CircleBadge--${size}`]: !!size,
    },
    className,
  );
  return (
    <div className={classNames} {...attrs}>
      {cloneElement(children, { className: 'CircleBadge-icon' })}
    </div>
  );
};

const asAnchor = ({ href, size, children, className, ...attrs }) => {
  const classNames = classnames(
    'CircleBadge',
    {
      [`CircleBadge--${size}`]: !!size,
    },
    className,
  );
  return (
    <a className={classNames} href={href} {...attrs}>
      {cloneElement(children, { className: 'CircleBadge-icon' })}
    </a>
  );
};

const CircleBadge = props => props.href ? asAnchor(props) : asDiv(props);

export const asLi = ({ size, children, className, ...attrs }) => {
  const classNames = classnames(
    'CircleBadge',
    {
      [`CircleBadge--${size}`]: !!size,
    },
    className,
  );
  return (
    <li className={classNames} {...attrs}>
      {cloneElement(children, { className: 'CircleBadge-icon' })}
    </li>
  );
};

export default CircleBadge;
