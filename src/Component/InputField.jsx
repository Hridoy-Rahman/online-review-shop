import React from "react";

export default function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  as = "input",
  options = []
}) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>

      {as === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border rounded w-full p-2"
        />
      ) : as === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className="border rounded w-full p-2"
        >
          <option value="">Select rating</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border rounded w-full p-2"
        />
      )}
    </div>
  );
}
