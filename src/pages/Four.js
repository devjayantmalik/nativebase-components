import React from 'react';

import { Container, Content, Text, Icon, Badge, Header } from 'native-base';

const Four = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <Badge>
          <Text>11</Text>
        </Badge>
        <Badge primary>
          <Text>11</Text>
        </Badge>
        <Badge success>
          <Text>10</Text>
        </Badge>
        <Badge info>
          <Text>11</Text>
        </Badge>
        <Badge warning>
          <Text>11</Text>
        </Badge>
        <Badge danger>
          <Text>20</Text>
        </Badge>
        <Badge>
          <Icon name="star" style={styles.iconStyle} />
        </Badge>
        <Badge primary>
          <Text>I am a badge!</Text>
        </Badge>
      </Content>
    </Container>
  );
};

const styles = {
  iconStyle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
  },
};

export default Four;
