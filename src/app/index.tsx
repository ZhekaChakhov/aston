import React from "react";
import { Layout } from "src/widgets/Layout";

import { AppRouter } from "./providers/router";

export const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <Layout isAuth={isAuth} onClick={() => setIsAuth(!isAuth)}>
      <AppRouter isAuth={isAuth} />
    </Layout>
  );
};

// TODO: вынести логику переключателя isAuth из App
