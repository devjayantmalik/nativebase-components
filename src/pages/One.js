import React from 'react';
import {
  Container,
  Header,
  Body,
  Footer,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Text,
  Content,
  FooterTab,
} from 'native-base';

const One = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Application</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="heart" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>This is beautiful content.</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Login</Text>
          </Button>
          <Button full>
            <Text>Signup</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default One;
