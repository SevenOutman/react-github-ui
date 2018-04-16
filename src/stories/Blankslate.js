import React from 'react'
import { storiesOf } from '@storybook/react'
import Blankslate from '../components/Blankslate';

storiesOf('Blankslate', module)
  .add('blankslate', () => (
    <Blankslate>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
  .add('blankslate-narrow', () => (
    <Blankslate shape="narrow">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
  .add('blankslate-large', () => (
    <Blankslate shape="large">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
  .add('blankslate-spacious', () => (
    <Blankslate shape="spacious">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
  .add('blankslate-capped', () => (
    <Blankslate shape="capped">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
  .add('blankslate-clean-background', () => (
    <Blankslate shape="clean-background">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ));
