import React, { Children } from 'react';
import classnames from 'classnames';
import { asLi } from './CircleBadge';

const DashedConnection = ({ size, children, className, ...attrs }) => {
  const classNames = classnames(
    'DashedConnection',
    className,
  );
  return (
    <div className={classNames} {...attrs}>
      <ul className="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
        {Children.map(children, ({ props }) => asLi(props))}
      </ul>
    </div>
  );
};

export default DashedConnection;
