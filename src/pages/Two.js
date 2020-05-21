import React from 'react';

import { Container, Header, Content, Accordion } from 'native-base';

const dataArray = [
  { title: 'Element 1', content: 'Description about the item' },
  { title: 'Element 2', content: 'Description about the item' },
  { title: 'Element 3', content: 'Description about the item' },
  { title: 'Element 4', content: 'Description about the item' },
  { title: 'Element 5', content: 'Description about the item' },
];

const Two = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <Accordion
          icon="add"
          expandedIcon="remove"
          iconStyle={styles.colorGreen}
          expandedIconStyle={styles.colorRed}
          headerStyle={styles.bgGold}
          contentStyle={styles.bgLightBlue}
          dataArray={dataArray}
          expanded={0}
        />
      </Content>
    </Container>
  );
};

const styles = {
  colorGreen: {
    color: 'green',
  },
  colorRed: {
    color: 'red',
  },
  bgGold: {
    backgroundColor: 'gold',
  },
  bgLightBlue: {
    backgroundColor: 'lightblue',
  },
};

export default Two;
