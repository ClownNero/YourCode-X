import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

export default function ChatUI(props) {

  const [messages, setMessages] = useState([
    // { id: 1, user: "User", text: "Hello!" },
    // { id: 2, user: "뤼튼", text: "Hi there! How can I help you today?" },
  ]);

  const [userContent, setUserContent] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // 입력 변경 핸들러
  const handleInputChange = (event) => {
    setUserContent(event.target.value);
  };

  // 새 메시지 생성 함수
  const createMessage = (user, text) => ({
    id: Date.now(),
    user,
    text,
   });

  // 제출 핸들러 
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Open Ai 테스트 대답
    // setResponse('Lorem ipsum dolor sit amet consectetur adipisicingelit...');
    handleClick();
    setMessages((prevMessages) => [
      ...prevMessages,
      createMessage("User", userContent),
    ]);

    setLoading(false);

    setUserContent("");
  };

  useEffect(() => {
    if(response !== null) {
      setMessages((prevMessages) => [
        ...prevMessages,
        createMessage("뤼튼", response),
      ]);
      
      setResponse(null); // Reset the response state for the next use.
    }
  }, [response]);

  const handleClick = (event) => {
    
    // OpenAI Fetch 부분
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
    <div name="wrap" className="flex flex-col h-5/6 px-4 py-8 bg-gray-200 rounded-3xl border-2 border-search relative">
      <div className="flex flex-col overflow-auto mb-20 scrollbar-hide">
        {messages.map((message) => (
          <>
          <div className="flex justify-between items-start mx-3">
          {/* {message.user === "User" ? "": <BsFillPersonFill className="text-[#D9D9D9] bg-search text-5xl rounded-full"/>} */}
          {message.user === "User" ? "": 
            <img
              className="text-[#D9D9D9] bg-slate-400 w-12 rounded-full drop-shadow-md inline mt-3"
              src="/images/logo.png"
              alt="security logo"
            ></img>}
            <div
              key={message.id}
              className={`my-2 rounded-2xl px-4 py-5 w-[90%] border-2 border-Result  ${
                message.user === "User"
                  ? "bg-white self-end border-2"
                  : "bg-white self-start"
              }`}
            >   
            {loading ? <p>Loading....</p> : <p className="text-left whitespace-pre-line">{message.text}</p> }
            </div>
            {message.user === "User"?<BsFillPersonFill className="text-[#D9D9D9] bg-search text-[44px] rounded-full mt-3"/>:""}
          </div>
          </>
        ))}
      </div>
      <div name="search" className="absolute bottom-5 left-5 right-5 flex items-center border-2 border-gray-500 justify-between rounded-3xl p-4 bg-white">
        <input
          type="text"
          placeholder="Type your message..."
          value={userContent}
          required
          onChange={handleInputChange}
          className="flex-grow px-4 py-2 outline-none"
        />
        <button type="submit" onClick={handleSubmit} className="px-5 py-2 bg-search text-white rounded-md hover:opacity-90">
          <AiOutlineSend className="text-xl"/>
        </button>
      </div>
    </div>
  );
}