# Redux setup

### Sample usage
``` js
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  </BrowserRouter>,
  document.getElementById("root")
);
```
