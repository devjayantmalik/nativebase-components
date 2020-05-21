import React from 'react';

import {
  Container,
  Content,
  Button,
  Header,
  Body,
  Left,
  Right,
  Text,
  Icon,
  Title,
  Tabs,
  Tab,
} from 'native-base';

const _renderTab1 = () => {
  return (
    <Body>
      <Content padder>
        <Text>Tab 1</Text>
      </Content>
    </Body>
  );
};

const _renderTab2 = () => {
  return (
    <Body>
      <Content padder>
        <Text>Tab 2</Text>
      </Content>
    </Body>
  );
};

const Fourteen = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
      <Tabs>
        <Tab style={{ backgroundColor: 'gold' }} heading="Tab 1">
          {_renderTab1()}
        </Tab>
        <Tab style={{ backgroundColor: 'orange' }} heading="Tab 2">
          {_renderTab2()}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Fourteen;
