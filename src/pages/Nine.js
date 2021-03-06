import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Left,
  Body,
  Text,
  CardItem,
  Card,
  Icon,
  Thumbnail,
} from 'native-base';

const CARDS = [
  {
    text: 'Card One',
    name: 'One',
    image: 'https://picsum.photos/400/300',
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: 'https://picsum.photos/400/300',
  },
];

const renderCard = (item) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: item.image }} />
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.text}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
      </CardItem>
      <CardItem>
        <Icon name="heart" style={styles.heartIcon} />
        <Text>{item.name}</Text>
      </CardItem>
    </Card>
  );
};

const Nine = () => {
  return (
    <Container>
      <View>
        <DeckSwiper dataSource={CARDS} renderItem={renderCard} />
      </View>
    </Container>
  );
};

const styles = {
  heartIcon: {
    color: '#ed4a6a',
  },
  cardImage: {
    height: 200,
    width: null,
    flex: 1,
  },
};

export default Nine;
