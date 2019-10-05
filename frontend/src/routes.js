import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SpotsTourist from './pages/SpotsTourist';

const Routes = createAppContainer(
  createSwitchNavigator({
    SpotsTourist,
    Home,
    Login,
    Profile,
  }),
);

export default Routes;