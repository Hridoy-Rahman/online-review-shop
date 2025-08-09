import React from "react";

export default function ReviewList({ reviews, onDelete }) {
  return (
    <div className="mt-6 w-full max-w-3xl">
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews found</p>
      ) : (
        reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-4 mb-4 rounded-lg shadow flex justify-between"
          >
            <div>
              <h2 className="text-lg font-bold">{rev.shopName}</h2>
              <p className="text-yellow-500">
                {"⭐".repeat(rev.rating)}{" "}
                <span className="text-gray-600">({rev.rating})</span>
              </p>
              <p className="mt-2">{rev.reviewText}</p>
              <p className="text-sm text-gray-400 mt-1">{rev.date}</p>
            </div>
            <button
              onClick={() => onDelete(rev.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </div>
        ))
      )}
    </div>
  );
}
