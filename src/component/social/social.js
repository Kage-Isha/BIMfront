// BIM Social Media Frontend
// This assumes Tailwind CSS is already set up and running

"use client";

import { useEffect, useState, useRef } from "react";
import io from "socket.io-client"; // or use native WebSocket

// COMPONENT: ChatBox
export function ChatBox({ currentUser, recipientUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    // Connect WebSocket
    socketRef.current = new WebSocket("ws://localhost:8000/ws/chat/");

    socketRef.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prev) => [...prev, data]);
    };

    return () => socketRef.current.close();
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const message = {
      sender: currentUser,
      receiver: recipientUser,
      message: input,
    };
    socketRef.current.send(JSON.stringify(message));
    setMessages((prev) => [...prev, message]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Chat with {recipientUser}</h2>
      <div className="h-64 overflow-y-scroll border p-2 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`my-1 ${msg.sender === currentUser ? "text-right" : "text-left"}`}>
            <span className="inline-block px-3 py-2 bg-blue-100 rounded-xl">
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex">
        <input
          className="flex-grow border rounded px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

// COMPONENT: CallModal (WebRTC UI)
export function CallModal({ localRef, remoteRef, onHangup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-4 rounded-xl shadow-xl">
        <h2 className="text-lg font-semibold">Video Call</h2>
        <div className="flex gap-2 mt-2">
          <video ref={localRef} autoPlay muted className="w-40 h-40 bg-black rounded" />
          <video ref={remoteRef} autoPlay className="w-40 h-40 bg-black rounded" />
        </div>
        <button onClick={onHangup} className="mt-3 px-4 py-2 bg-red-500 text-white rounded">
          Hang up
        </button>
      </div>
    </div>
  );
}

// COMPONENT: DonationCard
export function DonationCard({ title, description, fileUrl, type, uploader }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-sm">Type: {type}</p>
      <p className="text-sm">Donated by: {uploader}</p>
      <a href={fileUrl} className="text-blue-500 hover:underline" download>
        Download
      </a>
    </div>
  );
} 

// You can import and render these in corresponding pages like:
// import { ChatBox, CallModal, DonationCard } from "@/components/social"
