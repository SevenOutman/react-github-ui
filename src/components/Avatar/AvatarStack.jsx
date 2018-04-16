import React, { Children } from 'react';
import classnames from 'classnames';

const AvatarStack = ({ right, children, className }) => {
  const classNames = classnames(
    'AvatarStack',
    {
      'AvatarStack--two': children.length === 2,
      'AvatarStack--three-plus': children.length >= 3,
      'AvatarStack--right': right,
    },
    className,
  );

  const childArray = Children.toArray(children);

  return (
    <div className={classNames}>
      <div className="AvatarStack-body">
        {childArray.slice(0, 2)}
        {
          childArray.length > 3 &&
          <div className='avatar-more avatar' />
        }
        {
          childArray.length >= 3 &&
          childArray.slice(2)
        }
      </div>
    </div>
  );
};

export default AvatarStack;
