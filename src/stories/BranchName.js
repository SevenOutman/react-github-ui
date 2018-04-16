import React from 'react'
import { storiesOf } from '@storybook/react'
import BranchName from '../components/BranchName';

storiesOf('Branch Name', module)
    .add('Branch name', () => (
        <div className="p-4">
            <BranchName>a_new_feature_branch</BranchName>
        </div>
    ))
    .add('Branch name with link', () => (
        <div className="p-4">
            <BranchName href="#url">a_new_feature_branch</BranchName>
        </div>
    ))
    // todo Octicons
    .add('Branch name with icon', () => {})
