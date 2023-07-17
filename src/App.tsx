import { Toaster } from "react-hot-toast";
import "./App.css";
import { ApiProvider } from "./context/ApiContext";
import { ProductAdd } from "./components/ProductAdd";

export const App = () => {
  return (
    <div id="App">
      <ApiProvider>
      <ProductAdd />
      <Toaster />
      </ApiProvider>
    </div>
  );
};
