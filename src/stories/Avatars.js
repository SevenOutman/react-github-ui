import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '../components/Avatar/Avatar';
import AvatarStack from '../components/Avatar/AvatarStack';
import CircleBadge from '../components/Avatar/CircleBadge';
import DashedConnection from '../components/Avatar/DashedConnection';

storiesOf('Avatars', module)
  .add('avatar', () => (
    <Avatar alt='Uncle Cat' width='72' height='72' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
  ))
  .add('avatar-small', () => (
    <Avatar small width='32' height='32' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
  ))
  .add('avatar-parent-child', () => (
    <div>
      <Avatar width='48' height='48' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'>
        <Avatar alt='Child cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      </Avatar>
    </div>
  ))
  .add('avatar-stack', () => (
    <div>
      <AvatarStack>
        <Avatar alt='Uncle Cat' width='39' height='39' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
        <Avatar alt='Uncle Cat' width='39' height='39' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
        <Avatar alt='Uncle Cat' width='39' height='39' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      </AvatarStack>
    </div>

  ))
  .add('AvatarStack', () => (
    <div>
      <AvatarStack className='mb-2'>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      </AvatarStack>
      <AvatarStack className='mb-2'>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      </AvatarStack>
      <AvatarStack right className='mb-2'>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      </AvatarStack>
      <AvatarStack right className='mb-2'>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
          <Avatar alt='Uncle Cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      </AvatarStack>

    </div>
  ))
  .add('CircleBadge--small', () => (
    <div>
      <CircleBadge size="small" href='#url' title='Travis CI'>
        <img src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
      </CircleBadge>
    </div>
  ))
  .add('CircleBadge--medium', () => (
    <div>
      <CircleBadge size="medium" href='#url' title='Travis CI'>
        <img src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
      </CircleBadge>
    </div>
  ))
  .add('CircleBadge--large', () => (
    <div>
      <CircleBadge size="large" href='#url' title='Travis CI'>
        <img src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
      </CircleBadge>
    </div>
  ))
  .add('DashedConnection', () => (
    <DashedConnection className='DashedConnection'>
        <CircleBadge size="small" aria-label='GitHub'>
          <img width='32' src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
        </CircleBadge>
        <CircleBadge size="small" aria-label='Slack'>
          <img width='32' src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
        </CircleBadge>
        <CircleBadge size="small" aria-label='Travis CI'>
          <img width='32' src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
        </CircleBadge>
    </DashedConnection>
  ));
