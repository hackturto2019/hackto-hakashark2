import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'

const Routes = createAppContainer(createSwitchNavigator({
  Login,
  Home,
  Profile
}))

export default Routes