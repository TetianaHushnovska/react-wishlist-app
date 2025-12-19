import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useToast } from "./ToastContext";

export interface Wish {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
}

interface WishesContextType {
  wishes: Wish[];
  loading: boolean;
  error: string | null;

  page: number;
  limit: number;
  total: number;

  sortDate: "" | "newest" | "oldest";
  sortPrice: "" | "high" | "low";

  setPage: (p: number) => void;
  setSortDate: (v: "" | "newest" | "oldest") => void;
  setSortPrice: (v: "" | "high" | "low") => void;

  addWish: (wish: Omit<Wish, "id" | "createdAt">) => Promise<void>;
  updateWish: (id: string, wish: Partial<Wish>) => Promise<void>;
  deleteWish: (id: string) => Promise<void>;
}

const WishesContext = createContext<WishesContextType | null>(null);

const API_URL = "https://wishlist-api-m5jb.onrender.com/wishes";

export function WishesProvider({ children }: { children: React.ReactNode }) {
  const [allWishes, setAllWishes] = useState<Wish[]>([]);
  const [wishes, setWishes] = useState<Wish[]>([]);

  const [page, setPage] = useState(1);
  const limit = 6;
  const [total, setTotal] = useState(0);

  const [sortDate, setSortDate] = useState<"" | "newest" | "oldest">("");
  const [sortPrice, setSortPrice] = useState<"" | "high" | "low">("");

  const { request, loading, error } = useApi<Wish[]>();
  const { showToast } = useToast();

  // Fetch ALL wishes (raw, unsorted)
  async function fetchAll() {
    const data = await request(API_URL);
    if (!data) {
      showToast("Failed to load wishes", "error");
      return;
    }
    setAllWishes(data);
  }

  // Apply sorting and pagination
  function applyFilters() {
    let arr = [...allWishes];

    // Date sorting
    if (sortDate !== "") {
      arr.sort((a, b) =>
        sortDate === "newest"
          ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }

    // Price sorting
    if (sortPrice !== "") {
      arr.sort((a, b) =>
        sortPrice === "high" ? b.price - a.price : a.price - b.price
      );
    }

    setTotal(arr.length);

    const start = (page - 1) * limit;
    const end = start + limit;

    setWishes(arr.slice(start, end));
  }

  useEffect(applyFilters, [allWishes, sortDate, sortPrice, page]);

  useEffect(() => {
    fetchAll();
  }, []);

  // CRUD
  async function addWish(wish: Omit<Wish, "id" | "createdAt">) {
    const result = await request(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...wish, createdAt: new Date().toISOString() }),
    });

    if (result) {
      showToast("Wish added!", "success");
      fetchAll();
      setPage(1);
    } else showToast("Failed to add wish", "error");
  }

  async function updateWish(id: string, wish: Partial<Wish>) {
    const result = await request(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wish),
    });

    if (result) {
      showToast("Wish updated!", "success");
      fetchAll();
    } else showToast("Failed to update wish", "error");
  }

  async function deleteWish(id: string) {
    const result = await request(`${API_URL}/${id}`, { method: "DELETE" });

    if (result !== null) {
      showToast("Wish deleted!", "success");
      const isLast = wishes.length === 1 && page > 1;
      if (isLast) setPage(page - 1);
      fetchAll();
    } else showToast("Failed to delete wish", "error");
  }

  return (
    <WishesContext.Provider
      value={{
        wishes,
        loading,
        error,
        page,
        limit,
        total,
        sortDate,
        sortPrice,
        setPage,
        setSortDate,
        setSortPrice,
        addWish,
        updateWish,
        deleteWish,
      }}
    >
      {children}
    </WishesContext.Provider>
  );
}

export function useWishes() {
  const ctx = useContext(WishesContext);
  if (!ctx) throw new Error("useWishes must be used inside WishesProvider");
  return ctx;
}
