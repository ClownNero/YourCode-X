import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

export default function ChatUI(props) {

  const [messages, setMessages] = useState([
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
   const handleKeyDown = (event) => {
    console.log(event.key)
    if (event.key === 'Enter'){
      handleSubmit();
    }
   }
  // 제출 핸들러 
  const handleSubmit = (event) => {
    setLoading(true);
    // Open Ai 테스트 대답
    handleClick();
    // setResponse('Loreamsfkasfnmkdlldkgnlksgnsdg....')
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
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div name="wrap" className="flex flex-col h-5/6 px-4 py-8 bg-[#F1F5FF] rounded-3xl border-2 border-search relative">
      <div className="flex flex-col overflow-auto mb-20 scrollbar-hide">
        {messages.map((message) => (
          <>
          <div className={`flex justify-between items-start ${message.user=== "User"? "ml-12 mr-3":"ml-3 mr-12"}`}>
          {message.user === "User" ? "": 
            <img
              className="text-[#D9D9D9] bg-[#d6e1fc] w-[50px] rounded-full drop-shadow-md inline mt-3 mb-3"
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
            {loading ? <p>Loading....</p> : <p className="text-left whitespace-pre-line break-words">{message.text}</p> }
            </div>
            {message.user === "User"?<BsFillPersonFill className="text-[#eef3ff] bg-search text-[44px] rounded-full mt-5"/>:""}
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
          onKeyDown={handleKeyDown}
          className="flex-grow px-4 py-2 outline-none"
        />
        <button 
          type="submit" 
          onClick={handleSubmit} 
          disabled={!userContent}  // userContent가 비어있다면 버튼은 비활성화됩니다.
          className={`px-5 py-2 ${userContent ? "bg-search text-white": "bg-white text-search" }  rounded-md hover:opacity-90`}
        >
          <AiOutlineSend className="text-xl"/>
        </button>
      </div>
    </div>
  );
}