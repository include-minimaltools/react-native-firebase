import { useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../store";

function HomeScreen({ navigation }: any): JSX.Element {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{
        fontSize: 40,
      }}>Home Screen</Text>{" "}
    </View>
  );
}

export { HomeScreen };
