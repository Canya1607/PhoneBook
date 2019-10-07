import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {default as LoginScreen} from '../containers/Auth/Login';
import {default as SignUpScreen} from '../containers/Auth/SignUp';
import {default as ContactsScreen} from '../containers/Main/Contacts';
import {default as DetailsScreen} from '../containers/Main/Details';

const AuthSwitch = createSwitchNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

const MainStack = createStackNavigator(
  {
    Contacts: ContactsScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Contacts',
  },
);

const RootSwitch = createSwitchNavigator({
  Auth: AuthSwitch,
  Main: MainStack,
});

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
