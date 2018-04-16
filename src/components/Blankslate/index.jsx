import React from 'react';
import classnames from 'classnames';
import 'primer-blankslate/index.scss';

const Blankslate = ({ shape, children }) => {
  const classNames = classnames(
    'blankslate',
    {
      [`blankslate-${shape}`]: !!shape,
    },
  );
  return (
    <div className={classNames}>
      {children}
    </div>
  )
};

export default Blankslate;
