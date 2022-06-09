import { Appbar } from "react-native-paper";

const { Header, Content, BackAction } = Appbar;

const NavigationBar = ({ navigation, back, title }: any) => {
  const _handleMore = () => {
    
  };
  return (
    <Header>
      { back && <BackAction onPress={() => navigation.goBack()} /> }
      <Content title={title} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Header>
  );
};

export { NavigationBar };
