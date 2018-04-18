import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label, State } from '../components/Label';
import Counter from '../components/Label/Counter';
import Box from '../components/Box';
import Popover from '../components/Popover';
import Button from '../components/Button/Button';

storiesOf('Popover', module)
    .add('Default (top-center)', () => (
        <div className="p-4">
            <div className="position-relative text-center">
                <Button shape="primary">UI</Button>
                <Popover className="right-0 left-0">
                    <h4 className="mb-2">Popover heading</h4>
                    <p>Message about this particular piece of UI.</p>
                    <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
                </Popover>
            </div>
        </div>
    ))
    .add('Large', () => (
        <div className="p-4">
            <div className="position-relative text-center">
                <Button shape="primary">UI</Button>
                <Popover large className="right-0 left-0">
                    <h4 className="mb-2">Popover heading</h4>
                    <p>Message about this particular piece of UI.</p>
                    <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
                </Popover>
            </div>
        </div>
    ))
    .add('Top-right', () => (
        <div className="p-4">
            <div className="position-relative text-right">
                <Button shape="primary">UI</Button>
                <Popover position="top-right" className="right-0">
                    <h4 className="mb-2">Popover heading</h4>
                    <p>Message about this particular piece of UI.</p>
                    <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
                </Popover>
            </div>
        </div>
    ))
    .add('Top-left', () => (
        <div className="p-4">
            <div className="position-relative">
                <Button shape="primary">UI</Button>
                <Popover position="top-left">
                    <h4 className="mb-2">Popover heading</h4>
                    <p>Message about this particular piece of UI.</p>
                    <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
                </Popover>
            </div>
        </div>
    ))
    .add('Right', () => (
        <div className="p-4">
            <Popover position="right">
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
            </Popover>
        </div>
    ))
    .add('Left', () => (
        <div className="p-4">
            <Popover position="left">
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
            </Popover>
        </div>
    ))
    .add('Bottom', () => (
        <div className="p-4">
            <Popover position="bottom">
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
            </Popover>
        </div>
    ))
    .add('Bottom-right', () => (
        <div className="p-4">
            <Popover position="bottom-right">
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
            </Popover>
        </div>
    ))
    .add('Bottom-left', () => (
        <div className="p-4">
            <Popover position="bottom-left">
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <Button type="submit" shape="outline" className="mt-2 text-bold">Got it!</Button>
            </Popover>
        </div>
    ));
