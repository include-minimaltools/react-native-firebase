import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { HomeScreen } from "./HomeScreen";

const { Screen, Navigator } = createStackNavigator();

const HomeStack = (): JSX.Element => (
  <View>
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  </View>
);

export { HomeStack };
