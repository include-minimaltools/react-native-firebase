import { Alert, View } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";
import { Card, HelperText, Title } from "react-native-paper";
import { useState } from "react";
import { AuthService } from "../../firebase/auth";
import { Form, Item, Submit } from "../../components";
import { Input } from "../../components/Form/Input";
import * as yup from "yup";

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

const RegisterScreen = ({ navigation }: any) => {
  const [error, setError] = useState();

  const onPressLogin = async (a: any) => {
    try {
      const user = await AuthService.signUp(a.email, a.password);
      Alert.alert(
        "Usuario registrado",
        "El usuario ha sido registrado correctamente"
      );
      navigation.navigate("LoginScreen");
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
              Registrarse
            </Submit>
          </Item>
        </Form>
      </Card>
    </View>
  );
};

export { RegisterScreen };
