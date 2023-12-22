import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "src/app/App";
import { setupStore } from "src/app/providers/store";

import "./firebase";

import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";

import "src/app/index.css";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>,
);
