import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../store";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

const Routes = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) return <PrivateRoutes  />;

  return <PublicRoutes />;
};

export { Routes };
