import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "./App";
import ContextProvider from "./context/ContexProvider";

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>,
  );
