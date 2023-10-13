import React, { useState } from "react";

export default function ChatUI(props) {
  const [messages, setMessages] = useState([
    { id: 1, user: "User", text: "Hello!" },
    { id: 2, user: "뤼튼", text: "Hi there! How can I help you today?" },
    // ... more messages
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add new message to the chat
    setMessages([
      ...messages,
      { id: Date.now(), user: "User", text: inputValue },
    ]);

    // Clear input field after message is sent
    setInputValue("");
  };
  return (
    <div className="flex flex-col h-full p-4 bg-gray-200">
      <div className="flex flex-col overflow-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 rounded-lg p-2 ${
              message.user === "User"
                ? "bg-blue-400 text-white self-end"
                : "bg-white self-start"
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex border-t border-gray-300 pt-4"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          className="flex-grow px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}
