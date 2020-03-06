import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

// Props is apparently to be deprecated soon, I've researched the current best practice and created this "service"
// This service will allow us to make calls to move screens using the navigate function below
// I also added in an openDrawer function (so that it can be called from the header button on MainScreen.js)
let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function getTopLevelNavigator() {
  return _navigator;
}

// Can be used to navigate to other screens, but currently Drawer only references the stack navigator
function navigateDrawer(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// Can be used to move into other screens defined in the stack navigator. 
function navigate(routeName, params) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }

// Created this function to allow the openDrawer function to be called from the header in MainScreen.js
function openDrawer() {
    _navigator.dispatch(DrawerActions.openDrawer())
}

export default {
  navigate,
  navigateDrawer,
  setTopLevelNavigator,
  getTopLevelNavigator,
  openDrawer,
};