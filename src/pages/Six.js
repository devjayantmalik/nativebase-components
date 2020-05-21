import React from 'react';

import { Image } from 'react-native';

import {
  Container,
  Content,
  Card,
  Button,
  Right,
  Left,
  Icon,
  CardItem,
  Text,
  Body,
  Thumbnail,
} from 'native-base';

const Six = () => {
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>How is the World?</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>This is the description about the world.</Text>
              <Text>This is the description about the world.</Text>
              <Text>This is the description about the world.</Text>
              <Text>This is the description about the world.</Text>
            </Body>
          </CardItem>
          <CardItem
            footer
            button
            bordered
            onPress={() => alert('This is card footer.')}>
            <Text>Jayant Malik</Text>
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>This is the text inside transparent card.</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Social Applications</Text>
          </CardItem>
          <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
          <CardItem>
            <Icon active name="logo-facebook" />
            <Text>Facebook</Text>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://picsum.photos/200/300' }} />
              <Body>
                <Text>Nativebase</Text>
                <Text note>Jayant Malik</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: 'https://picsum.photos/700/500' }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Six;
