import React from 'react';
import classnames from 'classnames';

const asButton = ({ size, shape, disabled, block, children, className }) => {
  const classNames = classnames(
    {
      'btn': shape !== 'link',
      [`btn-${size}`]: !!size,
      [`btn-${shape}`]: !!shape,
      'btn-block': block,
    },
    className,
  );

  return (
    <button className={classNames} type="button" disabled={disabled}>{children}</button>
  );
};

const asAnchor = ({ href, size, shape, disabled, block, children, className }) => {
  const classNames = classnames(
    {
      'btn': shape !== 'link',
      [`btn-${size}`]: !!size,
      [`btn-${shape}`]: !!shape,
      'btn-disabled': disabled,
      'btn-block': block,
    },
    className,
  );

  return (
    <a className={classNames} href={href} role="button">{children}</a>
  );
};

const Button = props => props.href ? asAnchor(props) : asButton(props);

export default Button;
