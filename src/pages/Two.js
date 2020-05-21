import React from 'react';

import { Container, Text, Header, Content, Accordion } from 'native-base';

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
          iconStyle={{ color: 'green' }}
          expandedIconStyle={{ color: 'red' }}
          headerStyle={{ backgroundColor: 'gold' }}
          contentStyle={{ backgroundColor: 'lightblue' }}
          dataArray={dataArray}
          expanded={0}
        />
      </Content>
    </Container>
  );
};

export default Two;
