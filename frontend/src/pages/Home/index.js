/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, TouchableOpacity, Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


// import { Container } from './styles';

export default class Home extends Component {

  state = {
    loanding: true,
    spotsTourist: [],
  }

  handleSpotsTorist = () => {
    <FlatList
      data={this.state.spotsTourist}
      keyExtractor={tourist => String(tourist.id)}
      renderItem={({ item }) => <TouristItem tourist={item} />}
    />
  }

  handleNavigation = () => {
    const { navigation } = this.props
    navigation.navigate('TouristItem');
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}
