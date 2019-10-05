/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class TouristGuide extends Component {

  render() {
    const { guide } = this.props
    console.log(this.props)
    return (

      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: `${guide.avathar}` }} />
        </Left>
        <Body>
          <Text>{guide.name}</Text>
          <Text style={{ fontSize: 12 }} note>{guide.description}</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>

    );
  }
}