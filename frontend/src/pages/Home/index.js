import React, { Component } from 'react';

import { View, TouchableOpacity, Image, Text, FlatList, ActivityIndicator } from 'react-native';

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
      <View>
        {
          this.state.loanding
            ? this.handleSpotsTorist()
            : <ActivityIndicator color="#445" />
        }
      </View>
    )
  }
}
