import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button';
import ButtonGroup from '../components/Button/ButtonGroup';

storiesOf('Button', module)
  .add('btn', () => (
      <div className='p-4'>
        <Button>Button</Button>
      </div>
  ))
  .add('btn-primary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="primary">Button</Button>
      <button className='btn btn-primary hover'>hover</button>
      <button className='btn btn-primary focus'>focus</button>
      <button className='btn btn-primary selected'>selected</button>
      <button className='btn btn-primary disabled'>disabled</button>
    </div>
  ))
  .add('btn-secondary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="secondary">Button</Button>
      <button className='btn btn-secondary hover'>hover</button>
      <button className='btn btn-secondary focus'>focus</button>
      <button className='btn btn-secondary selected'>selected</button>
      <button className='btn btn-secondary disabled'>disabled</button>
    </div>
  ))
  .add('btn-danger', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="danger">Button</Button>
      <button className='btn btn-danger hover'>hover</button>
      <button className='btn btn-danger focus'>focus</button>
      <button className='btn btn-danger selected'>selected</button>
      <button className='btn btn-danger disabled'>disabled</button>
    </div>
  ))
  .add('btn-outline', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="outline">Button</Button>
      <button className='btn btn-outline hover'>hover</button>
      <button className='btn btn-outline focus'>focus</button>
      <button className='btn btn-outline selected'>selected</button>
      <button className='btn btn-outline disabled'>disabled</button>
    </div>
  ))
  .add('btn-blue', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="blue">Button</Button>
      <button className='btn btn-blue hover'>hover</button>
      <button className='btn btn-blue focus'>focus</button>
      <button className='btn btn-blue selected'>selected</button>
      <button className='btn btn-blue disabled'>disabled</button>
    </div>
  ))
  .add('btn-purple', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="purple">Button</Button>
      <button className='btn btn-purple hover'>hover</button>
      <button className='btn btn-purple focus'>focus</button>
      <button className='btn btn-purple selected'>selected</button>
      <button className='btn btn-purple disabled'>disabled</button>
    </div>
  ))
  .add('btn-large', () => (
    <div className='f3 p-4'>
      <Button size="large" shape="purple" href="#url">Large link button</Button>
      <Button size="large" shape="outline-blue">Large button button</Button>
    </div>
  ))
  .add('btn-link', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button shape="link">Button</Button>
    </div>
  ))
  .add('BtnGroup', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <ButtonGroup className="mr-2">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup className="mr-2">
        <Button shape="outline">Button</Button>
        <Button shape="outline">Button</Button>
        <Button shape="outline">Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button size="sm">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="sm">Button</Button>
      </ButtonGroup>
    </div>
  ));
