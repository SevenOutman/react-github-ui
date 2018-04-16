import React from 'react'
import { storiesOf } from '@storybook/react'
import Breadcrumb from '../components/Breadcrumb';

storiesOf('Breadcrumb', module)
    // fixme padding
    .add('Breadcrumb', () => (
        <div className="p-4">
            <Breadcrumb>
                <Breadcrumb.Item className="text-small" href="/business">Business</Breadcrumb.Item>
                <Breadcrumb.Item className="text-small" href="/business/customers">Customers</Breadcrumb.Item>
                <Breadcrumb.Item className="text-small text-gray" selected>MailChimp</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    ));
