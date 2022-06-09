import { FormikProps } from "formik";
import { ViewStyle } from "react-native";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper/src/components/TextInput/TextInput";

interface InputProps extends Partial<TextInputProps> {
  formik?: FormikProps<any>;
  name?: string;
  inputStyles?: ViewStyle;
};


const Input = ({ formik, name, inputStyles, ...props }: InputProps): JSX.Element => {
  if(!formik) throw new Error("Input only works as a child of Item");
  if(!name) throw new Error("Item must have a name");

  const { values, handleChange, handleBlur } = formik || {};

  return (
    <TextInput
    // <a
      style={inputStyles}
      {...props}      
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      value={values[name] || ""}
      error={!!(formik.errors[name] || (formik.touched[name] && formik.errors[name]))}
    />
    
  );
};

export { Input };
