import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu, UnderlineNav, TabNav } from '../components/Navigation';
import Button from '../components/Button/Button';
import Counter from '../components/Label/Counter';
import FilterList from '../components/Navigation/FilterList';
import SubNav from '../components/Navigation/SubNav';

storiesOf('Navigation', module)
    .add('Menu', () => (
        <div className="p-4">
            <Menu>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ))
    .add('Menu with octicons, avatars and counters', () => (
        <div className="p-4">
            <Menu>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ))
    .add('Menu with heading', () => (
        <div className="p-4">
            <Menu>
                <Menu.Heading>Menu heading</Menu.Heading>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ))
    .add('UnderlineNav', () => (
        <div className="p-4">
            <UnderlineNav>
                <UnderlineNav.Item href="#url" selected>Item 1</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 2</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 3</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 4</UnderlineNav.Item>
            </UnderlineNav>
        </div>
    ))
    .add('UnderlineNav-actions', () => (
        <div className="p-4">
            <UnderlineNav
                actions={<Button>Button</Button>}
            >
                <UnderlineNav.Item href="#url" selected>Item 1</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 2</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 3</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 4</UnderlineNav.Item>
            </UnderlineNav>
        </div>
    ))
    .add('UnderlineNav--right', () => (
        <div className="p-4">
            <UnderlineNav right>
                <UnderlineNav.Item href="#url" selected>Item 1</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 2</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 3</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 4</UnderlineNav.Item>
            </UnderlineNav>
        </div>
    ))
    .add('UnderlineNav--right with actions', () => (
        <div className="p-4">
            <UnderlineNav
                right
                actions={<Button>Button</Button>}
            >
                <UnderlineNav.Item href="#url" selected>Item 1</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 2</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 3</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 4</UnderlineNav.Item>
            </UnderlineNav>
        </div>
    ))
    // todo octicons
    .add('UnderlineNav with Counter', () => (
        <div className="p-4">
            <UnderlineNav>
                <UnderlineNav.Item href="#url" selected>Item 1</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 2 <Counter>10</Counter></UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 3</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 4</UnderlineNav.Item>
            </UnderlineNav>
        </div>
    ))
    .add('UnderlineNav--full', () => (
        <div className="p-4">
            <UnderlineNav
                full
                actions={<Button>Button</Button>}
            >
                <UnderlineNav.Item href="#url" selected>Item 1</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 2 <Counter>10</Counter></UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 3</UnderlineNav.Item>
                <UnderlineNav.Item href="#url">Item 4</UnderlineNav.Item>
            </UnderlineNav>
        </div>
    ))
    .add('tabnav', () => (
        <div className="p-4">
            <TabNav>
                <TabNav.Tab href="#url" selected>Foo tab</TabNav.Tab>
                <TabNav.Tab href="#url">Bar tab</TabNav.Tab>
            </TabNav>
        </div>
    ))
    .add('tabnav with buttons', () => (
        <div className="p-4">
            <Menu>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ))
    .add('tabnav-extra', () => (
        <div className="p-4">
            <Menu>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ))
    .add('tabnav with everything', () => (
        <div className="p-4">
            <Menu>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ))
    .add('filter-list', () => (
        <div className="p-4">
            <FilterList>
                <FilterList.Item href="#url" selected count={21}>First filter</FilterList.Item>
                <FilterList.Item href="#url" count={3}>Second filter</FilterList.Item>
                <FilterList.Item href="#url">Third filter</FilterList.Item>
            </FilterList>
        </div>
    ))
    .add('subnav', () => (
        <div className="p-4">
            <SubNav>
                <SubNav.Item href="#url" selected>Item 1</SubNav.Item>
                <SubNav.Item href="#url">Item 2</SubNav.Item>
                <SubNav.Item href="#url">Item 3</SubNav.Item>
            </SubNav>
        </div>
    ))
    .add('subnav-search', () => (
        <div className="p-4">
            <SubNav
                search={<input type="search" name="name" id="" />}
            >
                <SubNav.Item href="#url" selected>Item 1</SubNav.Item>
                <SubNav.Item href="#url">Item 2</SubNav.Item>
                <SubNav.Item href="#url">Item 3</SubNav.Item>
            </SubNav>
        </div>
    ))
    .add('subnav-search-context', () => (
        <div className="p-4">
            <Menu>
                <Menu.Item href="#url" selected>Account</Menu.Item>
                <Menu.Item href="#url">Profile</Menu.Item>
                <Menu.Item href="#url">Emails</Menu.Item>
                <Menu.Item href="#url">Notifications</Menu.Item>
            </Menu>
        </div>
    ));
