import React from 'react';
import classnames from 'classnames';

const BoxHeader = ({ theme, children, className }) => {
  const classNames = classnames(
    'Box-header',
    {
      [`Box-header--${theme}`]: !!theme
    },
    className
  );
  return (
    <div className={classNames}>{children}</div>
  );
};
