import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { Provider as ReduxProvider } from "react-redux";
import merge from "deepmerge";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { store } from "./src/store";

const defaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const darkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={defaultTheme}>
        <NavigationContainer theme={defaultTheme}>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
