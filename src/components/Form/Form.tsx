import { Formik, FormikConfig } from "formik";
import React, { Children, cloneElement, PropsWithChildren } from "react";
import { ViewStyle } from "react-native";
import { Item } from "./Item";

export const renderChildrens = (children: any, props: any, type: any) =>
  Children.map(children, (child: JSX.Element) => {
    if(type === null || child.type === type)
      return cloneElement(child, props)

    return cloneElement(child);
  }
  );

interface FormProps extends PropsWithChildren<FormikConfig<any>> {
  inputStyles?: ViewStyle;
  labelStyles?: ViewStyle;
}

const Form = ({
  children,
  validationSchema,
  initialValues,
  inputStyles,
  onSubmit,
}: FormProps): JSX.Element => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) =>
        renderChildrens(children, { formik: props, inputStyles }, Item)
      }
    </Formik>
  );
};

export { Form };
