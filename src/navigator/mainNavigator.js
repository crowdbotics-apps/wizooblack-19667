import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn21392172Navigator from '../features/SignIn21392172/navigator';
import Tutorial1492171Navigator from '../features/Tutorial1492171/navigator';
import BlankScreen092170Navigator from '../features/BlankScreen092170/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn21392172: { screen: SignIn21392172Navigator },
Tutorial1492171: { screen: Tutorial1492171Navigator },
BlankScreen092170: { screen: BlankScreen092170Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
