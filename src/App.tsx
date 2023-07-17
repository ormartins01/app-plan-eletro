import { Toaster } from "react-hot-toast";
import "./App.css";

export const App = () => {
  return (
    <div id="App">
      <AuthProvider>
        <Global />
        <Toaster />
      </AuthProvider>
    </div>
  );
};
