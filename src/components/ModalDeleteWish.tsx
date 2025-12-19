interface DeleteConfirmProps {
  wishTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmModal({
  wishTitle,
  onCancel,
  onConfirm,
}: DeleteConfirmProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div
        className="relative w-full max-w-sm rounded-2xl p-6 text-center
                      bg-white/10 backdrop-blur-md border border-white/20
                      shadow-2xl text-white"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-3 right-4 text-xl font-bold text-white/70 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 drop-shadow">
          Delete wish?
        </h2>

        <p className="text-white/70 mb-6 leading-relaxed">
          Are you sure you want to delete{" "}
          <strong className="text-white">{wishTitle}</strong>?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* CANCEL */}
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 rounded-xl border border-white/20
                       bg-transparent text-white
                       hover:bg-white/10 transition"
          >
            Cancel
          </button>

          {/* CONFIRM */}
          <button
            type="button"
            onClick={onConfirm}
            className="px-6 py-2 rounded-xl border border-white/20
                       bg-transparent text-white
                       hover:bg-red-500/40 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
