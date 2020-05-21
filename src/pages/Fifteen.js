import React, { useState } from 'react';

import { Image } from 'react-native';

import {
  Container,
  Content,
  Body,
  Header,
  Right,
  Left,
  Title,
  Text,
  Icon,
  Button,
  Card,
  Drawer,
  CardItem,
  Thumbnail,
} from 'native-base';

const Sidebar = () => {
  return (
    <Content style={{ backgroundColor: 'white' }}>
      <Card transparent>
        <CardItem transparent>
          <Left>
            <Thumbnail source={{ uri: 'https://picsum.photos/200/300' }} />
            <Body>
              <Text>Jayant Malik</Text>
              <Text note>PRO</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>

      <Button transparent iconLeft>
        <Icon name="home" />
        <Text>Home</Text>
      </Button>
      <Button transparent iconLeft>
        <Icon name="analytics" />
        <Text>Analytics</Text>
      </Button>
      <Button transparent iconLeft>
        <Icon name="person" />
        <Text>Profile</Text>
      </Button>
      <Button transparent iconLeft>
        <Icon name="lock" />
        <Text>Security</Text>
      </Button>
    </Content>
  );
};

const Fifteen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => setIsDrawerOpen(!isDrawerOpen)}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
      <Drawer
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
        content={<Sidebar />}>
        <Content>
          <Text>{isDrawerOpen ? 'Open' : 'Closed'}</Text>
        </Content>
      </Drawer>
    </Container>
  );
};

export default Fifteen;
