import React from 'react';

import { Container, Content, Text, Button, Icon } from 'native-base';

const Five = () => {
  return (
    <Container>
      <Content padder>
        <Button>
          <Text>Simple Button</Text>
        </Button>
        <Button rounded style={styles.component}>
          <Text>Rounded Button</Text>
        </Button>
        <Button primary style={styles.component}>
          <Text>Primary Button</Text>
        </Button>
        <Button info style={styles.component}>
          <Text>Info Button</Text>
        </Button>
        <Button danger style={styles.component}>
          <Text>Danger Button</Text>
        </Button>
        <Button warning style={styles.component}>
          <Text>Warning Button</Text>
        </Button>
        <Button light style={styles.component}>
          <Text>Light Button</Text>
        </Button>
        <Button bordered style={styles.component}>
          <Icon name="analytics" />
          <Text>Bordered Button with Icon</Text>
        </Button>

        <Button active style={styles.component}>
          <Text>Active Button</Text>
        </Button>

        <Button block style={styles.component}>
          <Text>Block Button</Text>
        </Button>

        <Button full style={styles.component}>
          <Text>Full Width Button</Text>
        </Button>

        <Button disabled style={styles.component}>
          <Text>Disabled Button</Text>
        </Button>
        <Button small style={styles.component}>
          <Text>Small Button</Text>
        </Button>
        <Button large style={styles.component}>
          <Text>Large Button</Text>
        </Button>
        <Button transparent style={styles.component}>
          <Text>Transparent Button</Text>
        </Button>

        <Button iconLeft primary>
          <Icon name="home" />
          <Text>Home</Text>
        </Button>
        <Button iconRight bordered style={styles.component}>
          <Text>Next</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Content>
    </Container>
  );
};

const styles = {
  component: {
    marginTop: 10,
  },
};

export default Five;
