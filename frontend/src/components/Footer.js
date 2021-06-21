import React from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

const Footer = () => {
  return <Segment style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 'auto' }}>
    <span>
      Made with ❤️ by <a target='_blank' rel='noopener noreferrer' href='https://alexander-ding.github.io/'>Alex Ding</a>, 2021
    </span>
    <Button secondary color='black' as='a' target='_blank' rel='noopener noreferrer' href='https://www.github.com/alexander-ding/cycle-translator' style={{ marginLeft: 'auto', minWidth: 108 }}>
      <Icon name='github' /> Source
    </Button>
  </Segment>;
}

export default Footer;