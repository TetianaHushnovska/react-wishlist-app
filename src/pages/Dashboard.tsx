import { useState } from "react";
import { useWishes, Wish } from "../context/WishesContext";
import WishCard from "../components/WishCard";
import AddWishModal from "../components/AddWishModal";
import ModalDeleteWish from "../components/ModalDeleteWish";
import EditWishModal from "../components/EditWishModal";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const {
    wishes,
    loading,
    error,
    deleteWish,
    page,
    limit,
    total,
    sortDate,
    sortPrice,
    setPage,
    setSortDate,
    setSortPrice,
  } = useWishes();

  const [addWishOpen, setAddWishOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Wish | null>(null);
  const [editTarget, setEditTarget] = useState<Wish | null>(null);

  async function handleConfirmDelete() {
    if (!deleteTarget) return;
    await deleteWish(deleteTarget.id);
    setDeleteTarget(null);
  }

  return (
    <div className="min-h-screen px-4 md:px-6 xl:px-8 py-4">
      <div
        className="
          w-full
          max-w-full
          min-[375px]:max-w-[375px]
          md:max-w-[768px]
          xl:max-w-[1280px]
          mx-auto
          px-4
        "
      >
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white drop-shadow-xl">
            Your wishlist
          </h1>
          <div className="w-full min-[375px]:w-full md:w-auto">
            <button
              onClick={() => setAddWishOpen(true)}
              className="w-full md:w-auto px-6 py-3 text-white text-base md:text-lg rounded-2xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <span className="drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
                + Add wish
              </span>
            </button>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 justify-end mb-6 w-full">
          <button
            onClick={() => {
              setSortDate("");
              setSortPrice("");
              setPage(1);
            }}
            className="px-5 py-2 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Reset
          </button>

          <select
            value={sortDate}
            onChange={(e) => {
              setSortDate(e.target.value as any);
              setSortPrice("");
              setPage(1);
            }}
            className="p-2 rounded-lg w-52 bg-white/10 text-white border border-white/20"
          >
            <option value="">Sort by date</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <select
            value={sortPrice}
            onChange={(e) => {
              setSortPrice(e.target.value as any);
              setSortDate("");
              setPage(1);
            }}
            className="p-2 rounded-lg w-52 bg-white/10 text-white border border-white/20"
          >
            <option value="">Sort by price</option>
            <option value="high">High → Low</option>
            <option value="low">Low → High</option>
          </select>
        </div>

        {/* LOADING / ERROR */}
        {loading && <p className="text-center text-white/70">Loading...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {wishes.map((wish) => (
            <WishCard
              key={wish.id}
              wish={wish}
              onEdit={setEditTarget}
              onDelete={setDeleteTarget}
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="w-full">
          <Pagination
            page={page}
            limit={limit}
            total={total}
            onPageChange={setPage}
          />
        </div>

        {/* MODALS */}
        {addWishOpen && <AddWishModal onClose={() => setAddWishOpen(false)} />}
        {deleteTarget && (
          <ModalDeleteWish
            wishTitle={deleteTarget.title}
            onConfirm={handleConfirmDelete}
            onCancel={() => setDeleteTarget(null)}
          />
        )}
        {editTarget && (
          <EditWishModal
            wish={editTarget}
            onClose={() => setEditTarget(null)}
          />
        )}

        {/* EMPTY STATE */}
        {!loading && !error && wishes.length === 0 && (
          <p className="text-center text-white/60 text-xl my-10">
            Looks like you haven’t added any wishes yet 😇
          </p>
        )}
      </div>
    </div>
  );
}
