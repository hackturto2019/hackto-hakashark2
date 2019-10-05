/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { Container, H1, H2, H3, Text, Header, Item, Input, Left, Body, Right, Content, Button, Icon, Title } from 'native-base';

import TouristItem from '../../components/TouristItem'
import DestinationsItem from '../../components/DestinationsItem'


// import { Container } from './styles';

export default class Home extends Component {

  state = {
    loanding: true,
    beaches: [
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
    waterfalls: [
      {
        id: 1,
        title: 'Aventuras',
        avathar: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
        imageBackground: 'https://melhoresdestinosdobrasil.com.br/wp-content/uploads/2017/03/taquarucu_tocantins_cachoeira.jpg',
        note: 'Excelente ambiente'
      },
      {
        id: 2,
        title: 'Aventuras',
        avathar: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
        imageBackground: 'https://i2.wp.com/www.garfoemala.com.br/wp-content/uploads/IMG-9762-1-1.jpg?resize=1140%2C641&ssl=1',
        note: 'Excelente ambiente'
      },
      {
        id: 3,
        title: 'Aventuras',
        avathar: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
        imageBackground: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReT3jXN4t66nPdwxCEO-uL98gVviFGvRlcFCdS07q_A5xHZkFV',
        note: 'Excelente ambiente'
      },
    ]
  }

  componentDidMount() {
    this.loanding(false);
    console.log(this.state)
  }

  loanding = (state = true) => this.setState({ loanding: state })

  handleBeaches = () => {
    return (<FlatList
      data={this.state.beaches}
      keyExtractor={tourist => String(tourist.id)}
      renderItem={({ item }) => <TouristItem tourist={item} />}
    />);
  }

  handleWaterfalls = () => {
    return (<FlatList
      data={this.state.waterfalls}
      keyExtractor={tourist => String(tourist.id)}
      renderItem={({ item }) => <TouristItem tourist={item} />}
    />);
  }


  handleDestinations = () => {
    return (<FlatList
      data={this.state.waterfalls}
      keyExtractor={tourist => String(tourist.id)}
      renderItem={({ item }) => <DestinationsItem tourist={item} />}
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
          {/* <H3>Destinos</H3>
          <Content padder>
            {
              !this.state.loanding
                ? this.handleDestinations()
                : <ActivityIndicator color="red" size={30} />
            }
          </Content> */}
          <H3>Praias</H3>
          <Content padder>
            {
              !this.state.loanding
                ? this.handleBeaches()
                : <ActivityIndicator color="red" size={30} />
            }
          </Content>
          <H3>Cachoeiras</H3>
          <Content padder>
            {
              !this.state.loanding
                ? this.handleWaterfalls()
                : <ActivityIndicator color="red" size={30} />
            }
          </Content>

        </Content>
      </Container>
    )
  }
}