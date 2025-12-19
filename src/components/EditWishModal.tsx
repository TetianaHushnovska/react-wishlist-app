import { useState } from "react";
import { useWishes, Wish } from "../context/WishesContext";

interface EditWishModalProps {
  wish: Wish;
  onClose: () => void;
}

export default function EditWishModal({ wish, onClose }: EditWishModalProps) {
  const { updateWish } = useWishes();

  const [title, setTitle] = useState(wish.title);
  const [description, setDescription] = useState(wish.description);
  const [price, setPrice] = useState(String(wish.price));
  const [image, setImage] = useState(wish.image);

  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
    price?: string;
    image?: string;
  }>({});

  function validate() {
    const newErrors: any = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!price || Number(price) <= 0) newErrors.price = "Enter a valid price";
    if (!image.trim()) newErrors.image = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    await updateWish(wish.id, {
      title,
      description,
      price: Number(price),
      image,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl text-white relative">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-white/70 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-5 drop-shadow">Edit wish</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* TITLE */}
          <div>
            <input
              type="text"
              className={`w-full rounded-xl px-3 py-2 bg-transparent border outline-none text-white placeholder-white/40
                ${errors.title ? "border-red-400" : "border-white/30"}`}
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title)
                  setErrors({ ...errors, title: undefined as any });
              }}
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <textarea
              className={`w-full rounded-xl px-3 py-2 bg-transparent border outline-none text-white placeholder-white/40 resize-none
                ${errors.description ? "border-red-400" : "border-white/30"}`}
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description)
                  setErrors({ ...errors, description: undefined as any });
              }}
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* PRICE */}
          <div>
            <input
              type="number"
              className={`w-full rounded-xl px-3 py-2 bg-transparent border outline-none text-white placeholder-white/40
                ${errors.price ? "border-red-400" : "border-white/30"}`}
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                if (errors.price)
                  setErrors({ ...errors, price: undefined as any });
              }}
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">{errors.price}</p>
            )}
          </div>

          {/* IMAGE */}
          <div>
            <input
              type="text"
              className={`w-full rounded-xl px-3 py-2 bg-transparent border outline-none text-white placeholder-white/40
                ${errors.image ? "border-red-400" : "border-white/30"}`}
              placeholder="Image URL"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
                if (errors.image)
                  setErrors({ ...errors, image: undefined as any });
              }}
            />
            {errors.image && (
              <p className="text-red-400 text-sm mt-1">{errors.image}</p>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-xl border border-white/20 bg-transparent text-white hover:bg-red-500/30 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl border border-white/20 bg-transparent text-white hover:bg-yellow-400/30 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
