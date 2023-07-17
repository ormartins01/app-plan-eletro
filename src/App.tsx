import { Toaster } from "react-hot-toast";
import "./App.css";
import { ApiProvider } from "./context/ApiContext";
import { ProductAdd } from "./components/ProductAdd";
import { ConatinerList } from "./components/ContainerList";

export const App = () => {
  return (
    <div id="App">
      <ApiProvider>
      <ProductAdd />
      <ConatinerList />
      <Toaster />
      </ApiProvider>
    </div>
  );
};
