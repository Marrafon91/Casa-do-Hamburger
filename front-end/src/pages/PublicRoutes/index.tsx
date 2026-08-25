import { Navigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PublicRoutes;
