/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Row, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class TouristItem extends Component {

  navegar = (id) => {
    console.log(id)
  }
  render() {
    const { tourist } = this.props;
    console.log(tourist);
    return (
      <View>
        {
          <Card onPress={() => this.navegar(tourist.id)}>

            <CardItem cardBody >
              <Image source={{ uri: `${tourist.imageBackground}` }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text note>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text note>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text note>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        }
      </View>
    );
  }
}