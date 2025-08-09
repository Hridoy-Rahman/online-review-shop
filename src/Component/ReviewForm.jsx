import React, { useState } from "react";

export default function ReviewForm({ onAddReview }) {
  const [shopName, setShopName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shopName || !reviewText || !rating) {
      alert("Please fill in all fields");
      return;
    }
    onAddReview(shopName, reviewText, rating);
    setShopName("");
    setReviewText("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Shop Name"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <textarea
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">Select Rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Star{num > 1 && "s"}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Submit Review
      </button>
    </form>
  );
}
