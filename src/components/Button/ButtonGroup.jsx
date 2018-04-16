import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';

const ButtonGroup = ({ children, className }) => {

  const classNames = classnames(
    'BtnGroup',
    className,
  );
  return (
    <div className={classNames}>
      {Children.map(children, (child) =>
        cloneElement(child, {
          className: classnames('BtnGroup-item', child.props.className),
        }),
      )}
    </div>
  )
};

export default ButtonGroup;
