interface WishActionsProps {
  mode: "card" | "page";
  onDetails?: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function WishActions({
  mode,
  onDetails,
  onEdit,
  onDelete,
}: WishActionsProps) {
  const base =
    "rounded-xl transition font-medium border border-white/20 text-white shadow-md hover:shadow-lg text-center w-full max-w-xs self-center sm:w-auto sm:self-auto";

  const small = "px-6 py-2 text-sm";
  const large = "px-8 py-3 text-lg";

  const size = mode === "card" ? small : large;

  return (
    <div
      className={
        mode === "card"
          ? "p-4 border-t border-white/20 flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-2"
          : "flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 items-center sm:items-stretch"
      }
    >
      {mode === "card" && onDetails && (
        <button
          onClick={onDetails}
          className={`${base} ${size} bg-transparent hover:bg-blue-500/50`}
        >
          Details
        </button>
      )}

      <button
        onClick={onEdit}
        className={`${base} ${size} bg-transparent hover:bg-yellow-400/50`}
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        className={`${base} ${size} bg-transparent hover:bg-red-500/50`}
      >
        Delete
      </button>
    </div>
  );
}
