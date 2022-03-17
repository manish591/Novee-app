import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context/state-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
