import React, { useState, useRef, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    "Hello and welcome! It’s great to have you here!",
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]); // Add new message to list
      setMessage(""); // Clear input field
    }
  };

  return (
    <div className="chat-container d-flex flex-column h-100">
      {/* Chat Messages */}
      <div className="chat-messages flex-grow-1 overflow-auto p-3">
        {messages.map((msg, index) => (
          <p key={index} className="chat-bubble">
            {msg}
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div class="input-group d-flex mb-4">
        <input
          type="text"
          class="form-control"
          placeholder="Ask any question"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
