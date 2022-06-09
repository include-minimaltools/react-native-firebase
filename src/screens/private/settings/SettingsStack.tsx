import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { SettingsScreen } from "./SettingsScreen";

const { Screen, Navigator } = createStackNavigator();

const SettingsStack = (): JSX.Element => (
  <View>
    <Navigator>
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  </View>
);

export { SettingsStack };
