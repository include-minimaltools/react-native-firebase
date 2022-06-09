import { Text, View } from "react-native";

function SettingsScreen({ navigation }: any): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
        }}
      >
        Setting Screen
      </Text>{" "}
    </View>
  );
}

export { SettingsScreen };
