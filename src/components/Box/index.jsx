import React, { Children } from 'react';
import classnames from 'classnames';

import 'primer-box/index.scss';

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
const BoxTitle = ({ children }) => (
  <h3 className="Box-title">{children}</h3>
);
const BoxBody = ({ children }) => (
  <div className="Box-body">{children}</div>
);
const BoxFooter = ({ children }) => (
  <div className="Box-footer">{children}</div>
);
const BoxRow = ({ theme, unread, children, className }) => {
  const classNames = classnames(
    'Box-row',
    {
      [`Box-row--${theme}`]: !!theme,
      'Box-row--unread': unread
    },
    className,
  );
  return (
    <li className={classNames}>{children}</li>
  );
};

const Box = ({ padding, theme, children, className }) => {
  const classNames = classnames(
    'Box',
    {
      [`Box--${padding}`]: !!padding,
      [`Box--${theme}`]: !!theme,
    },
    className,
  );
  const childArray = Children.toArray(children);
  const boxRows = childArray.filter(child => child.type === BoxRow);

  if (!boxRows.length) {
    return (
      <div className={classNames}>
        {children}
      </div>
    );
  }

  const firstChildIndex = childArray.indexOf(boxRows[0]);
  const lastChildIndex = childArray.indexOf(boxRows[boxRows.length - 1]);
  return (
    <div className={classNames}>
      {childArray.slice(0, firstChildIndex)}
      <ul>
        {
          childArray.slice(firstChildIndex, lastChildIndex + 1)
        }
      </ul>
      {childArray.slice(lastChildIndex + 1)}
    </div>
  );
};
Box.Header = BoxHeader;
Box.Title = BoxTitle;
Box.Body = BoxBody;
Box.Footer = BoxFooter;

Box.Row = BoxRow;

export default Box;
