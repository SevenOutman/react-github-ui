import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button/Button';
import Subhead from '../components/Subhead';

storiesOf('Subhead', module)
    .add('Subhead', () => (
        <div className="p-4">
            <Subhead>Plain subhead</Subhead>
        </div>
    ))
    .add('Spacious Subhead', () => (
        <div className="p-4">
            <Subhead spacious>Spacious subhead</Subhead>
        </div>
    ))
    .add('Subhead with description', () => (
        <div className="p-4">
            <Subhead
                description="The subhead is a subdued header style with a light bottom border."
            >Subhead with description</Subhead>
        </div>
    ))
    .add('Subhead with longer description', () => (
        <div className="p-4">
            <Subhead>Plain subhead</Subhead>
            <p>This is a longer description that is sitting below the Subheader. It's much longer than a description that could sit comfortably in the Subhead. It might even have <strong>bold</strong> text. <a
                href="#">Click to learn more.</a></p>
        </div>
    ))
    .add('Subhead with actions', () => (
        <div className="p-4">
            <Subhead
                actions={<Button shape="primary" size="sm" href="#url">Action</Button>}
            >Subhead with button</Subhead>
            <Subhead
                spacious
                actions={<a href="#url">Learn more</a>}
            >Subhead with link</Subhead>
        </div>
    ))
    .add('Subhead with actions and description', () => (
        <div className="p-4">
            <Subhead
                description="The subhead is a subdued header style with a light bottom border."
                actions={<Button shape="primary" size="sm" href="#url">Action</Button>}
            >Subhead with button</Subhead>
        </div>
    ))
    .add('Subhead danger', () => (
        <div className="p-4">
            <Subhead danger>Danger zone</Subhead>
        </div>
    ));
