import React from "react";
import SportsTips from "./SportsTips";
import { Provider } from "./SportsTips/Store";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider>
      <Router>
        <SportsTips />
      </Router>
    </Provider>
  );
}

export default App;
