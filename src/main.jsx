import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipeContext from "./context/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
        style={{
          zIndex: 9999,
        }}
        toastStyle={{
          backgroundColor: '#1f2937',
          color: '#fff',
          borderRadius: '12px',
          border: '1px solid #374151',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        }}
        progressStyle={{
          background: 'linear-gradient(to right, #f97316, #ec4899)',
        }}
        closeButton={true}
      />
    </BrowserRouter>
  </RecipeContext>
);