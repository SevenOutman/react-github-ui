import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../components/Box';
import Alert from '../components/Alert';

storiesOf('Box', module)
  .add('Box', () => (
    <Box>
      Box
    </Box>
  ))
  .add('Box elements', () => (
    <Box>
      <Box.Header>
        <Box.Title>
          Box-title
        </Box.Title>
      </Box.Header>
      <Box.Body>
        Box-body
      </Box.Body>
      <Box.Footer>
        Box-footer
      </Box.Footer>
    </Box>
  ))
  .add('Box-row', () => (
    <Box>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Row>
        Box-row
      </Box.Row>
    </Box>
  ))
  .add('Box--condensed', () => (
    <Box padding="condensed">
      <Box.Header>
        <Box.Title>
          Box-title
        </Box.Title>
      </Box.Header>
      <Box.Body>
        Box-body
      </Box.Body>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Footer className='Box-footer'>
        Box-footer
      </Box.Footer>
    </Box>
  ))
  .add('Box--spacious', () => (
    <Box padding="spacious">
      <Box.Header>
        <Box.Title>
          Box-title
        </Box.Title>
      </Box.Header>
      <Box.Body>
        Box-body
      </Box.Body>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Footer className='Box-footer'>
        Box-footer
      </Box.Footer>
    </Box>
  ))
  .add('Box--blue', () => (
    <Box theme="blue">
      <Box.Header>
        <Box.Title>
          Box-title
        </Box.Title>
      </Box.Header>
      <Box.Body>
        Box-body
      </Box.Body>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Row>
        Box-row
      </Box.Row>
      <Box.Footer>
        Box-footer
      </Box.Footer>
    </Box>
  ))
  .add('Box-header--blue', () => (
    <Box>
      <Box.Header theme="blue">
        <Box.Title className='Box-title'>Box-title</Box.Title>
      </Box.Header>
      <Box.Body className='Box-body'>
        Box-body
      </Box.Body>
    </Box>
  ))
  .add('Box--danger', () => (
    <Box theme="danger">
      <Box.Row className='Box-row'>
        Row one
      </Box.Row>
      <Box.Row className='Box-row'>
        Row two
      </Box.Row>
    </Box>
  ))
  .add('Box-row themes', () => (
    <div>
      <Box className='mb-4'>
        <Box.Row theme="gray">
          .Box-row--gray
        </Box.Row>
        <Box.Row theme="hover-gray">
          .Box-row--hover-gray
        </Box.Row>
        <Box.Row theme="yellow">
          .Box-row--yellow
        </Box.Row>
        <Box.Row theme="hover-blue">
          .Box-row--hover-blue
        </Box.Row>
        <Box.Row theme="blue">
          .Box-row--blue
        </Box.Row>
      </Box>
      <Box>
        <Box.Row theme="focus-gray" className="navigation-focus">
          .Box-row--focus-gray and .navigation-focus
        </Box.Row>
        <Box.Row theme="focus-gray">
          .Box-row--focus-gray
        </Box.Row>
        <Box.Row theme="focus-blue" className='navigation-focus'>
          .Box-row--focus-blue and .navigation-focus
        </Box.Row>
        <Box.Row theme="focus-blue">
          .Box-row--focus-blue
        </Box.Row>
      </Box>
    </div>
  ))
  .add('Box-row--unread', () => (
    <Box>
      <Box.Row>
        Box row
      </Box.Row>
      <Box.Row unread>
        Box row unread
      </Box.Row>
      <Box.Row>
        Box row
      </Box.Row>
    </Box>
  ))
  .add('Box-row-link', () => (
    <div className='Box'>
      <div className='Box-row'>
        <a className='Box-row-link' href='#url'>Box row link</a>
      </div>
    </div>
  ))
  .add('Box border-dashed', () => (
    <div className='Box border-dashed p-2'>
      Box border-dashed
    </div>
  ))
  .add('Box with flash-full', () => (
    <Box className='Box'>
      <Box.Header>
        Box-header
      </Box.Header>
      <Alert full>
        flash-full
      </Alert>
      <Alert full shape="success">
        flash-full flash-success
      </Alert>
      <Alert full shape="warn">
        flash-full flash-warn
      </Alert>
      <Alert full shape="error">
        flash-full flash-error
      </Alert>
      <Box.Body>
        Box-body
      </Box.Body>
    </Box>
  ));
