import { FormikProps } from "formik";
import { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { HelperText } from "react-native-paper";
import { renderChildrens } from "./Form";

interface ItemProps {
  formik?: FormikProps<any>;
  label?: string | JSX.Element;
  name?: string;
  inputStyles?: ViewStyle;
}
const Item = ({
  children,
  formik,
  label,
  name = "",
  inputStyles,
}: PropsWithChildren<ItemProps>): JSX.Element => {
  if (!formik) throw new Error("Item only works as a child of Form");

  return (
    <View>
      {renderChildrens(
        children,
        { formik, name: name || "", inputStyles },
        null
      )}
      <HelperText
        visible={
          !!(
            formik.errors[name] ||
            (formik.touched[name] && formik.errors[name])
          )
        }
        type="error"
      >{formik.errors[name]?.toString()}</HelperText>
      {/* <Label.Error
        show={
          !!(
            formik.errors[name] ||
            (formik.touched[name] && formik.errors[name])
          )
        }
      >
        {formik.errors[name]?.toString()}
      </Label.Error> */}

      {/* {(formik.errors[name] || (formik.touched[name] && formik.errors[name])) && (
        <Label.Error>{formik.errors[name]?.toString()}</Label.Error>
      )} */}
    </View>
  );
};

export { Item };
