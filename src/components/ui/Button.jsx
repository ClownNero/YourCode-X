import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="py-2 px-4  border-t-4 border-transparent hover:border-brand "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
