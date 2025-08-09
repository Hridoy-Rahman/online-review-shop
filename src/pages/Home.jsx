import React, { useState, useEffect } from "react";
import ReviewList from "../Component/ReviewList";
import ReviewForm from "../Component/ReviewForm";

export default function Home() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem("reviews");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");

  // Save to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (shopName, reviewText, rating) => {
    const newReview = {
      id: Date.now(),
      shopName,
      reviewText,
      rating: Number(rating),
      date: new Date().toLocaleString(),
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((rev) => rev.id !== id));
  };

  const filteredReviews = reviews.filter((rev) =>
    rev.shopName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Online Shop Experience Review</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by shop name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-2 border rounded mb-4"
      />

      {/* Form Component */}
      <ReviewForm onAddReview={addReview} />

      {/* List Component */}
      <ReviewList reviews={filteredReviews} onDelete={deleteReview} />
    </div>
  );
}
