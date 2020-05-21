import React, { useState } from 'react';

import {
  Root,
  Container,
  ActionSheet,
  Content,
  Button,
  Text,
} from 'native-base';

// const BUTTONS = ['Option 1', 'Option 2', 'Cancel', 'Exit'];

const BUTTONS_TWO = [
  { text: 'Option 1', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: 'Option 2', icon: 'analytics', iconColor: '#2c8ef4' },
  { text: 'Option 3', icon: 'aperture', iconColor: '#2c8ef4' },
  { text: 'Delete', icon: 'trash', iconColor: '#2c8ef4' },
  { text: 'Cancel', icon: 'close', iconColor: '#2c8ef4' },
];

const Three = () => {
  const [clicked, setClicked] = useState(null);
  return (
    <Root>
      <Container>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS_TWO,
                  cancelButtonIndex: 4,
                  destructiveButtonIndex: 3,
                  title: 'Select an option',
                },
                (buttonIndex) => {
                  setClicked(buttonIndex);
                },
              )
            }>
            <Text>Show Action Sheet</Text>
          </Button>
          <Text>You clicked: {clicked}</Text>
        </Content>
      </Container>
    </Root>
  );
};

export default Three;
