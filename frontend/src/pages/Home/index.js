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
    loanding: true,
    spotsTourist: [
      {
        id: 1,
        title: 'Praia do Caju',
        description: '',
        avathar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14046.jpg',
        imageBackground: 'http://www.palmas.to.gov.br/media/tmp/ede81da753307154b8983fb19782ef13',
        note: 'Muito prazeroso'
      },
      {
        id: 2,
        title: 'Praia da graciosa',
        avathar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
        imageBackground: 'http://www.palmas.to.gov.br/media/tmp/61066ac2b533592b050eeba85647430d',
        note: 'Melhor experiência'
      },
      {
        id: 3,
        title: 'Aventuras',
        avathar: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
        imageBackground: 'https://media-cdn.tripadvisor.com/media/photo-s/18/7c/2d/d2/vista-da-praia-ii.jpg',
        note: 'Excelente ambiente'
      },
    ],
  }

  componentDidMount() {
    this.loanding(false);
    console.log(this.state)
  }

  loanding = (state = true) => this.setState({ loanding: state })

  handleSpotsTorist = () => {
    return (<FlatList
      data={this.state.spotsTourist}
      keyExtractor={tourist => String(tourist.id)}
      renderItem={({ item }) => <TouristItem tourist={item} />}
    />);
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