import React, { cloneElement } from 'react';
import classnames from 'classnames';


const asAnchor = ({ small, href, className, ...props }) => {
  const classNames = classnames(
    'avatar',
    {
      'avatar-small': small,
    },
    className,
  );
  return (
    <a href={href} className={classNames}>
      <img {...props} />
    </a>
  );
};

const asImg = ({ small, className, ...props }) => {
  const classNames = classnames(
    'avatar',
    {
      'avatar-small': small,
    },
    className,
  );
  return (
    <img className={classNames} {...props} />
  );
};

const singleAvatar = props => props.href ? asAnchor(props) : asImg(props);

const parentChildAvatar = ({ children, ...props }) => {
  return (
    <div className="avatar-parent-child float-left">
      {singleAvatar(props)}
      {cloneElement(children, { className: 'avatar-child' })}
    </div>
  );
};

const Avatar = props => props.children ? parentChildAvatar(props) : singleAvatar(props);

export default Avatar;
