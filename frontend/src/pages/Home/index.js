/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { Container, H1, H2, H3, Text, Header, Item, Input, Left, Body, Right, Content, Button, Icon, Title } from 'native-base';

import TouristItem from '../../components/TouristItem'
const praia = require('../../assets/spotsTourist/ativo-1.png')
const acamps = require('../../assets/spotsTourist/ativo-3.png')
const aventuras = require('../../assets/spotsTourist/ativo-2.png')

// import { Container } from './styles';

export default class Home extends Component {

  state = {
    loanding: false,
    spotsTourist: [
      {
        id: 1,
        title: 'Praias',
        url: praia,
      },
      {
        id: 2,
        title: 'Acamps',
        url: acamps,
      },
      {
        id: 3,
        title: 'Aventuras',
        url: aventuras,
      },
    ],
  }

  handleSpotsTorist = () => {
    return (<FlatList
      data={this.state.spotsTourist}
      keyExtractor={tourist => String(tourist.id)}
      renderItem={({ item }) => <TouristItem tourist={item} />}
    />)
  }

  handleNavigation = () => {
    const { navigation } = this.props
    navigation.navigate('TouristItem');
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input keyboardType="ascii-capable" keyboardAppearance="dark" placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder>
          <H3>Destinos</H3>
          <Content padder>
            {
              !this.state.loanding
                ? this.handleSpotsTorist()
                : <ActivityIndicator color="red" size={30} />
            }
          </Content>
        </Content>
      </Container>
    )
  }
}