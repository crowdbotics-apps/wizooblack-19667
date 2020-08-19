import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging992176Navigator from '../features/Messaging992176/navigator';
import NotificationList1092175Navigator from '../features/NotificationList1092175/navigator';
import Settings1192174Navigator from '../features/Settings1192174/navigator';
import SignIn21392172Navigator from '../features/SignIn21392172/navigator';
import Tutorial1492171Navigator from '../features/Tutorial1492171/navigator';
import BlankScreen092170Navigator from '../features/BlankScreen092170/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging992176: { screen: Messaging992176Navigator },
NotificationList1092175: { screen: NotificationList1092175Navigator },
Settings1192174: { screen: Settings1192174Navigator },
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
