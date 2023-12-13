// import { useState } from "react";
import { Layout } from "src/widgets/Layout";

import { AppRouter } from "./providers/router";

export const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};
