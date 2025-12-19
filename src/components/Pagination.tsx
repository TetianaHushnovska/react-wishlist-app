interface Props {
  page: number;
  limit: number;
  total: number;
  onPageChange: (p: number) => void;
}

export default function Pagination({
  page,
  limit,
  total,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className="flex justify-center mt-10 mb-16 flex-wrap gap-3">
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-4 py-2 rounded-xl border border-white/20 text-white backdrop-blur-md transition
            ${
              num === page
                ? "bg-blue-500/40 font-semibold shadow-lg"
                : "bg-transparent hover:bg-white/10"
            }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
