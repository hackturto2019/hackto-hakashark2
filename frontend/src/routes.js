import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Login,
    Home,
    Profile,
  }),
);

export default Routes;