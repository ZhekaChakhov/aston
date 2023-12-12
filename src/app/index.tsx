// import { useState } from "react";
import { PropsWithChildren } from "react";
import { Router } from "src/shared/routing";
import { Layout } from "src/widgets/layout";

export const App = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Router />
      {children}
    </Layout>
  );
};
