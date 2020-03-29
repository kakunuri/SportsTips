import React from "react";
import SportsTips from "./SportsTips";
import { Provider } from "./SportsTips/Store";
function App() {
  return (
    <Provider>
      <SportsTips />
    </Provider>
  );
}

export default App;
