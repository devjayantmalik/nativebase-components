import React, { useState } from 'react';

import {
  Container,
  Header,
  Text,
  Icon,
  Title,
  Left,
  Body,
  Right,
  Segment,
  Button,
  Spinner,
  Content,
} from 'native-base';

const _renderProfile = () => {
  return (
    <Body>
      <Content padder>
        <Spinner color="red" />
        <Text>Fetching Profile...</Text>
      </Content>
    </Body>
  );
};

const _renderSecurity = () => {
  return (
    <Body>
      <Content padder>
        <Text>Security</Text>
      </Content>
    </Body>
  );
};

const _renderWallet = () => {
  return (
    <Body>
      <Content padder>
        <Text>Wallet</Text>
      </Content>
    </Body>
  );
};

const Thirteen = () => {
  const [page, setPage] = useState(_renderProfile);
  const [activeSegment, setActiveSegment] = useState('profile');
  return (
    <Container>
      <Header hasSegment>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Account</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
      <Segment>
        <Button
          active={activeSegment === 'profile' ? true : false}
          first
          onPress={() => {
            setPage(_renderProfile);
            setActiveSegment('profile');
          }}>
          <Text>Profile</Text>
        </Button>
        <Button
          active={activeSegment === 'security' ? true : false}
          onPress={() => {
            setPage(_renderSecurity);
            setActiveSegment('security');
          }}>
          <Text>Security</Text>
        </Button>
        <Button
          active={activeSegment === 'wallet' ? true : false}
          last
          onPress={() => {
            setPage(_renderWallet);
            setActiveSegment('wallet');
          }}>
          <Text>Wallet</Text>
        </Button>
      </Segment>
      {page}
    </Container>
  );
};

export default Thirteen;
