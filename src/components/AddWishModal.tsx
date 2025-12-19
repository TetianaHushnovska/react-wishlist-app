import { useState } from "react";
import { useWishes } from "../context/WishesContext";

interface Props {
  onClose: () => void;
}

export default function AddWishModal({ onClose }: Props) {
  const { addWish } = useWishes();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

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

    await addWish({
      title,
      description,
      price: Number(price),
      image,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">
      <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 w-full max-w-md border border-white/20 shadow-2xl">
        <div className="relative">
          <h2 className="font-semibold text-2xl mb-5 drop-shadow">
            Add new wish
          </h2>
          <button
            type="button"
            className="absolute top-1.5 right-1 text-xl font-bold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* TITLE */}
          <div>
            <input
              type="text"
              className={`bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${
                errors.title ? "border-red-400" : "border-white/30"
              }`}
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
              className={`bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${
                errors.description ? "border-red-400" : "border-white/30"
              }`}
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
              className={`bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${
                errors.price ? "border-red-400" : "border-white/30"
              }`}
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
              className={`bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${
                errors.image ? "border-red-400" : "border-white/30"
              }`}
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
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-xl border border-white/20 bg-transparent text-white hover:bg-red-500/30 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl border border-white/20 bg-transparent text-white hover:bg-green-500/30 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
