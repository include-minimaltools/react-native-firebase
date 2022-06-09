import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { HomeStack, SettingsStack } from "../screens/private";
import { HomeScreen } from "../screens/private/home/HomeScreen";
import { SettingsScreen } from "../screens/private/settings/SettingsScreen";

const Routes = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Inicio",
      icon: "home",
      color: "red",
    },
    {
      key: "settings",
      title: "Configuraciones",
      icon: "cog",
      color: "green",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    settings: SettingsScreen,
    home: HomeScreen,
  });

  return (
    <BottomNavigation
      shifting
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: routes[index].color }}
    />
  );
};

export { Routes as PrivateRoutes };
