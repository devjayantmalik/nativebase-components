import React from 'react';

import {
  Container,
  Content,
  Text,
  Body,
  ListItem,
  CheckBox,
} from 'native-base';

const Seven = () => {
  return (
    <Container>
      <Content padder>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Lunch Break</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Discussion with client.</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} color="red" />
          <Body>
            <Text>Finish List Screen</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
};

export default Seven;
