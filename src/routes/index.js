import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {default as LoginScreen} from '../containers/Auth/Login';
import {default as ContactsScreen} from '../containers/Main/Contacts';
import {default as DetailsScreen} from '../containers/Main/Details';

const MainStack = createStackNavigator(
  {
    Contacts: ContactsScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Contacts',
    mode: 'modal',
  },
);

const RootSwitch = createSwitchNavigator({
  Auth: LoginScreen,
  Main: MainStack,
});

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
