import React, { useState } from "react";

export default function ChatUI(props) {
  const [messages, setMessages] = useState([
    { id: 1, user: "User", text: "Hello!" },
    { id: 2, user: "뤼튼", text: "Hi there! How can I help you today?" },
    // ... more messages
  ]);

  const [userContent, setUserContent] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setUserContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add new message to the chat
    setMessages([
      ...messages,
      { id: Date.now(), user: "User", text: userContent },
    ]);

    // Clear input field after message is sent
    setUserContent("");

    // Call handleClick to fetch data
    handleClick();
  };

  const handleClick = () => {
    setLoading(true);
    fetch('http://localhost:5000/openai/api', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({ userContent: userContent }),
    })
    .then((response) => response.json())
    .then((data) => {
      setResponse(data.result);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="flex flex-col h-5/6 px-4 py-8 bg-gray-200 rounded-[36px] border-2 border-search">
      <div className="flex flex-col overflow-auto mb-4 scrollbar-hide">
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
      <form onSubmit={handleSubmit} className="flex border-t border-gray-300 pt-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={userContent}
          onChange={handleInputChange}
          className="flex-grow px-4 py-2 outline-none"
        />
        {loading ? <p>Loading...</p> : null}
        {response && !loading ? <h2>{response}</h2> : null}        
        <button type="submit" onClick={handleClick} className="px-6 py-2 bg-blue-500 text-white rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}