import { Button } from "react-native-paper";

const Submit = ({ formik, ...props }: any): JSX.Element => {
  if(!formik) throw new Error("Submit only works as a child of Item");

  const { handleSubmit } = formik;

  return (
    <Button
      {...props}      
      onPress={handleSubmit}
    />
    
  );
};

export { Submit };
