import { useNavigate } from "react-router-dom";
import { Wish } from "../context/WishesContext";
import WishActions from "./WishActions";

interface WishCardProps {
  wish: Wish;
  onEdit: (wish: Wish) => void;
  onDelete: (wish: Wish) => void;
}

export default function WishCard({ wish, onEdit, onDelete }: WishCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col w-full max-w-full box-border">
      {/* Image */}
      <img
        src={wish.image}
        alt={wish.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-white">
        <h2 className="text-xl font-semibold mb-1 drop-shadow-sm">
          {wish.title}
        </h2>
        <p className="text-white/70 text-sm flex-grow max-w-xl truncate">
          {wish.description}
        </p>
        <p className="text-lg font-bold text-green-300 mt-3 drop-shadow">
          ${wish.price}
        </p>
      </div>

      {/* Footer buttons */}
      <WishActions
        mode="card"
        onDetails={() => navigate(`/wish/${wish.id}`)}
        onEdit={() => onEdit(wish)}
        onDelete={() => onDelete(wish)}
      />
    </div>
  );
}
