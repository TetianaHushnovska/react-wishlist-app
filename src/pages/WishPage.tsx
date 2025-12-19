import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wish, useWishes } from "../context/WishesContext";
import EditWishModal from "../components/EditWishModal";
import ModalDeleteWish from "../components/ModalDeleteWish";
import WishActions from "../components/WishActions";

export default function WishPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { wishes, deleteWish, loading } = useWishes();

  const [wish, setWish] = useState<Wish | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    const found = wishes.find((w) => String(w.id) === id);
    setWish(found ?? null);
  }, [wishes, id]);

  if (loading) {
    return (
      <p className="text-center text-white/70 text-xl mt-20">Loading wish...</p>
    );
  }

  if (!wish) {
    return (
      <div className="p-6 text-center text-white">
        <p className="text-red-400 text-2xl mb-6">Wish not found.</p>
        <button
          onClick={() => navigate("/")}
          className="underline hover:text-blue-400 transition"
        >
          ← Back to dashboard
        </button>
      </div>
    );
  }

  async function handleDelete() {
    if (wish) {
      await deleteWish(wish.id);
    }
    navigate("/");
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 max-w-screen-xl mx-auto">
      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        className="text-white underline mb-6 block hover:text-blue-300 transition"
      >
        ← Back to dashboard
      </button>

      <div className="bg-white/5 border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 sm:gap-10 backdrop-blur-md">
        <img
          src={wish.image}
          alt={wish.title}
          className="w-full md:w-1/2 object-cover rounded-xl"
        />

        <div className="flex flex-col flex-grow text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{wish.title}</h1>
          <p className="text-white/70 text-base sm:text-lg mb-4 break-words leading-relaxed">
            {wish.description}
          </p>

          <p className="text-2xl sm:text-3xl font-semibold text-green-400 mb-8">
            ${wish.price}
          </p>

          <WishActions
            mode="page"
            onEdit={() => setEditOpen(true)}
            onDelete={() => setDeleteOpen(true)}
          />
        </div>
      </div>

      {/* Modals */}
      {editOpen && (
        <EditWishModal wish={wish} onClose={() => setEditOpen(false)} />
      )}
      {deleteOpen && (
        <ModalDeleteWish
          wishTitle={wish.title}
          onCancel={() => setDeleteOpen(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}
