import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label, State } from '../components/Label';
import Counter from '../components/Label/Counter';
import Box from '../components/Box';

storiesOf('Labels', module)
    .add('Label', () => (
        <div className="p-4">
            <Label title="Label: default label" className="bg-blue">default label</Label>
        </div>
    ))
    .add('Label without title', () => (
        <div className="p-4">
            <a href="#url">
                New select component
                <Label title="Label: default label" className="bg-blue ml-1">design</Label>
            </a>
        </div>
    ))
    .add('Label theme gray', () => (
        <div className="p-4">
            <Label title="Label: gray label" theme="gray">gray label</Label>
        </div>
    ))
    .add('Label theme dark gray', () => (
        <div className="p-4">
            <Label title="Label: dark gray label" theme="gray-darker">dark gray label</Label>
        </div>
    ))
    .add('Label theme orange', () => (
        <div className="p-4">
            <Label title="Label: orange label" theme="orange">orange label</Label>
        </div>
    ))
    .add('Label theme outline', () => (
        <div className="p-4">
            <Label title="Label: outlined label" theme="outline">outlined label</Label>
        </div>
    ))
    .add('Label theme outline green', () => (
        <div className="p-4">
            <Label title="Label: green outline label" theme="outline-green">green outlined label</Label>
        </div>
    ))
    .add('State', () => (
        <div className="p-4">
            <State>Default</State>
        </div>
    ))
    // todo Octicons
    .add('State themes', () => (
        <div className="p-4">
            <State title="Status: open" theme="green">Open</State>
            <State title="Status: closed" theme="red">Closed</State>
            <State title="Status: merged" theme="purple">Merged</State>
        </div>
    ))
    .add('Small states', () => (
        <div className="p-4">
            <State title="Status: open" theme="green" small>Open</State>
            <State title="Status: closed" theme="red" small>Closed</State>
        </div>
    ))
    .add('Counter', () => (
        <div className="p-4">
            <Counter>16</Counter>
            <Counter theme="gray">32</Counter>
            <Counter theme="gray-light">64</Counter>
        </div>
    ))
    // todo
    .add('Counter in tabs', () => (
        <div className="p-4">

        </div>
    ))
    .add('Counter in Box headers', () => (
        <div className="p-4">
            <Box>
                <Box.Header>
                    <Box.Title>
                        Box title
                        <Counter theme="gray">3</Counter>
                    </Box.Title>
                </Box.Header>

                <Box.Row>
                    Box row one
                </Box.Row>
                <Box.Row>
                    Box row two
                </Box.Row>
                <Box.Row>
                    Box row three
                </Box.Row>
            </Box>
        </div>
    ));

