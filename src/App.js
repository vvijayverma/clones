import "./App.css";
import Body from "./components/Body";
import appStore,{persistor} from "./utils/appStore/appStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <>
      <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Body />
      </PersistGate>
      </Provider>
    </>
  );
}

export default App;
