import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import WishPage from "../pages/WishPage";
import { WishesProvider } from "../context/WishesContext";
import { ToastProvider } from "../context/ToastContext";
import NotFound from "../pages/NotFoundPage";

export default function App() {
  return (
    <ToastProvider>
      <WishesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wish/:id" element={<WishPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WishesProvider>
    </ToastProvider>
  );
}
