import { useAuthCheck } from "src/shared/lib/useAuthCheck";
import { Layout } from "src/widgets/Layout";

import { AppRouter } from "./providers/router";

export const App = () => {
  useAuthCheck();
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

// TODO: удалить "react-firebase-hooks"
