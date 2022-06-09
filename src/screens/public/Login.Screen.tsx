import { View } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";
import { Button, Card, HelperText, Title } from "react-native-paper";
import { useEffect, useState } from "react";
import { AuthService } from "../../firebase/auth";
import { Form, Item, Submit } from "../../components";
import { Input } from "../../components/Form/Input";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../store";

const containerStyle: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: 20,
};

const inputStyle: TextStyle = {
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: "transparent",
};

const cardStyle: ViewStyle = {
  padding: 10,
  justifyContent: "center",
};

const buttonStyle: ViewStyle = {
  marginVertical: 10,
};

const LoginScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const onPressLogin = async (a: any) => {
    try {
      const user = await AuthService.signIn(a.email, a.password);
      dispatch(login(user));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const onPressRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  const onPressLoginWithGoogle = async () => {
    try {
      const { email, uid, displayName, photoURL } =
        await AuthService.signInWithGoogle();
      dispatch(login({ email, uid, displayName, photoURL }));
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <View style={containerStyle}>
      <Card style={cardStyle}>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={onPressLogin}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("El email no es válido")
              .required("El email es requerido"),
            password: yup.string().required("La contraseña es requerida"),
          })}
          inputStyles={inputStyle}
        >
          <Title style={{ textAlign: "center" }}>Inicio de Sesión</Title>
          <Item name="email">
            <Input label="Correo electrónico" />
          </Item>
          <Item name="password">
            <Input label="Contraseña" />
            <HelperText type="error" visible={!!error}>
              {error}
            </HelperText>
          </Item>
          <Item>
            <Submit icon="login" style={buttonStyle} mode="contained">
              Iniciar Sesión
            </Submit>
          </Item>
          <Button
            icon="google"
            style={buttonStyle}
            color="red"
            mode="contained"
            onPress={onPressLoginWithGoogle}
          >
            Google
          </Button>
          <Button
            icon="account-plus"
            style={buttonStyle}
            mode="contained"
            onPress={onPressRegister}
          >
            Registrarte
          </Button>
        </Form>
      </Card>
    </View>
  );
};

export { LoginScreen };
