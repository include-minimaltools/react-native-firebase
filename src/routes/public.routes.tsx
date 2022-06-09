import { createStackNavigator } from "@react-navigation/stack";
import screens from "../screens/public";
import type { StackNavigationOptions } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsAuthenticated, selectUser } from "../store";

const { Navigator, Screen } = createStackNavigator();

const navigatorOptions: StackNavigationOptions = {
  headerShown: false,
};

const Routes = () => {
  return (
    <Navigator initialRouteName="LoginScreen" screenOptions={navigatorOptions}>
      {screens.map((screen) => (
        <Screen key={screen.name} name={screen.name} component={screen} />
      ))}
    </Navigator>
  );
};

export { Routes as PublicRoutes };
