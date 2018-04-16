import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from '../components/Alert';
import Button from '../components/Button/Button';

storiesOf('Flash alerts', module)
  .add('flash', () => (
    <div className='p-4'>
      <Alert>
        flash
      </Alert>
    </div>
  ))
  .add('flash-warn', () => (
    <div className='p-4'>
      <Alert shape="warn">
        flash-warn
      </Alert>
    </div>
  ))
  .add('flash-error', () => (
    <div className='p-4'>
      <Alert shape="error">
        flash-error
      </Alert>
    </div>
  ))
  .add('flash-success', () => (
    <div className='p-4'>
      <Alert shape="success">
        flash-success
      </Alert>
    </div>
  ))
  .add('flash with action button', () => (
    <div className='p-4'>
      <Alert
        action={<Button type="submit">Complete action</Button>}
      >
        Flash message with action here.
      </Alert>
    </div>
  ))
  .add('flash-full', () => (
    <div className='p-4'>
      <div className="container-lg">
        <Alert full>
          Full width flash message.
        </Alert>
      </div>
    </div>
  ));
