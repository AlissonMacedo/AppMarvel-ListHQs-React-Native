import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';

const Routes = createAppContainer(
    createSwitchNavigator({
      App: createSwitchNavigator({
        Home,
      }),
     App2: createStackNavigator(
        {
          Details,
        },
        {
          defaultNavigationOptions: {
            headerTransparent: true,
            headerTintColor: '#333',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        },
      ),
    }),

);

console.disableYellowBox = true;

export default Routes;