import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import "./index.css";
import { ChainlitAPI, ChainlitContext } from "@chainlit/react-client";
import { ThemeProvider } from "./components/theme-provider.tsx";

const CHAINLIT_SERVER = "http://localhost:80/chainlit";

const apiClient = new ChainlitAPI(CHAINLIT_SERVER, "webapp");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </ChainlitContext.Provider>
  </React.StrictMode>
);
