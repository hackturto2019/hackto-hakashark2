/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SpotsTourist from './pages/SpotsTourist';
import TouristGuide from './pages/TouristGuide';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    TouristGuide,
    Login,
    SpotsTourist,
    Profile,
  }),
);

export default Routes;