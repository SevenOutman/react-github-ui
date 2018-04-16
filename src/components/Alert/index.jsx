import React, { cloneElement } from 'react';
import classnames from 'classnames';
import 'primer-alerts/index.scss';

const Alert = ({ shape, action, full, children, className }) => {
  const classNames = classnames(
    'flash',
    {
      [`flash-${shape}`]: !!shape,
      'flash-full': full,
    },
    className,
  );

  return (
    <div className={classNames}>
      {
        action &&
        cloneElement(action, { className: 'flash-action' })
      }
      {children}
    </div>
  )
};

export default Alert;
