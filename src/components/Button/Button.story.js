import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import {Button} from "./Button";

storiesOf('Button', module)
  .add(
    'Component Summary',
    withInfo({
        text: 'Your Basic Div'
    })(() => {
      
    console.log(Button)
     return <Button onClick={action('clicked')}>Hello Button</Button>
    })
  )
  .add('with text', () => (
      <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
      <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
