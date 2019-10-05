/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon,
  Button,
  Title
} from 'native-base';

import TouristGuidItem from '../../components/TouristGuideItem'

export default class TouristGuide extends Component {

  state = {
    TouristGuid: [
      {
        id: 1,
        name: 'Pedro Ricardo',
        description: 'Super educado, atencioso, conhece muito bem os principais prontos turísticos de Taquaruçu.',
        avathar: 'https://www.es1.com.br/assets/noticias/7629/Serfc0nP3z9H.jpg',
        note: 'Muito prazeroso',
      },
      {
        id: 2,
        name: 'João Henrique',
        description: 'Conhece muito bem os principais prontos turísticos de Taquaruçu.',
        avathar: 'https://www.es1.com.br/assets/noticias/7629/Serfc0nP3z9H.jpg',
        note: 'Muito prazeroso',
      },
      {
        id: 3,
        name: 'Pedro Ricardo',
        description: 'Super educado, atencioso, conhece muito bem os principais prontos turísticos de Taquaruçu.',
        avathar: 'https://www.es1.com.br/assets/noticias/7629/Serfc0nP3z9H.jpg',
        note: 'Muito prazeroso',
      },
      {
        id: 4,
        name: 'Pedro Ricardo',
        description: 'Super educado, atencioso, conhece muito bem os principais prontos turísticos de Taquaruçu.',
        avathar: 'https://www.es1.com.br/assets/noticias/7629/Serfc0nP3z9H.jpg',
        note: 'Muito prazeroso',
      },
      {
        id: 5,
        name: 'Pedro Ricardo',
        description: 'Super educado, atencioso, conhece muito bem os principais prontos turísticos de Taquaruçu.',
        avathar: 'https://www.es1.com.br/assets/noticias/7629/Serfc0nP3z9H.jpg',
        note: 'Muito prazeroso',
      },
      {
        id: 6,
        name: 'Pedro Ricardo',
        description: 'Super educado, atencioso, conhece muito bem os principais prontos turísticos de Taquaruçu.',
        avathar: 'https://www.es1.com.br/assets/noticias/7629/Serfc0nP3z9H.jpg',
        note: 'Muito prazeroso',
      },
    ],
    loanding: false,
  }

  handleTouristGuid = () => {
    const { TouristGuid } = this.state;

    return (<FlatList
      data={TouristGuid}
      keyExtractor={guide => String(guide.id)}
      renderItem={({ item }) => (
        <List>
          <TouristGuidItem guide={item} />
        </List>)} />);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Guias Turistico</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        {
          this.state.loanding
            ? <ActivityIndicator color="blue" />
            : this.handleTouristGuid()
        }
      </Container>
    );
  }
}