import React from 'react';

import {
  Container,
  Header,
  Footer,
  Content,
  FooterTab,
  Button,
  Text,
  Title,
  Body,
  Badge,
  Icon,
  Left,
  Right,
} from 'native-base';

const Eleven = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Jayant Malik</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="home" />
          </Button>
        </Right>
      </Header>
      <Content />
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>5</Text>
            </Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Icon name="person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Eleven;
