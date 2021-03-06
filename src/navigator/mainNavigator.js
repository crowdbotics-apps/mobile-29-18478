import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings72434Navigator from '../features/Settings72434/navigator';
import UserProfile72431Navigator from '../features/UserProfile72431/navigator';
import Maps72412Navigator from '../features/Maps72412/navigator';
import Settings72390Navigator from '../features/Settings72390/navigator';
import Settings72375Navigator from '../features/Settings72375/navigator';
import NotificationList72374Navigator from '../features/NotificationList72374/navigator';
import Maps72373Navigator from '../features/Maps72373/navigator';
import ArticleList72356Navigator from '../features/ArticleList72356/navigator';
import ArticleList72355Navigator from '../features/ArticleList72355/navigator';
import ArticleList72354Navigator from '../features/ArticleList72354/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings72434: { screen: Settings72434Navigator },
UserProfile72431: { screen: UserProfile72431Navigator },
Maps72412: { screen: Maps72412Navigator },
Settings72390: { screen: Settings72390Navigator },
Settings72375: { screen: Settings72375Navigator },
NotificationList72374: { screen: NotificationList72374Navigator },
Maps72373: { screen: Maps72373Navigator },
ArticleList72356: { screen: ArticleList72356Navigator },
ArticleList72355: { screen: ArticleList72355Navigator },
ArticleList72354: { screen: ArticleList72354Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
