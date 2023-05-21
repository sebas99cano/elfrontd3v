import ReactDOM from "react-dom/client";
import App from "./pages/app/App.jsx";

import { AuthProvider } from "./core/context";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
