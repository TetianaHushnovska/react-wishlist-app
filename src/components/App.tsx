import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WishesProvider } from "../context/WishesContext";
import { ToastProvider } from "../context/ToastContext";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const WishPage = lazy(() => import("../pages/WishPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));

export default function App() {
  return (
    <ToastProvider>
      <WishesProvider>
        <BrowserRouter>
          <Suspense fallback={<p className="text-center pt-10">Loading...</p>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/wish/:id" element={<WishPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </WishesProvider>
    </ToastProvider>
  );
}
