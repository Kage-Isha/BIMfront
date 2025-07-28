"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBox, CallModal } from "@/component/social/social";

const mockUsers = [
  { username: "john", lastMessage: "See you soon!", time: "2m", online: true },
  { username: "jane", lastMessage: "Thanks!", time: "5m", online: false },
  { username: "alex", lastMessage: "Check this out", time: "10m", online: true },
];

const currentUser = "sujen";

export default function SocialPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [activeTab, setActiveTab] = useState("feed");

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "john",
      caption: "Check out this cool book!",
      image: "/demo/book.jpg",
      created_at: "2025-07-25T12:00:00Z",
    },
    {
      id: 2,
      user: "sara",
      caption: "Anyone need this for 5th semester?",
      image: "/demo/notes.jpg",
      created_at: "2025-07-25T14:00:00Z",
    },
  ]);

  const [newCaption, setNewCaption] = useState("");
  const [newImage, setNewImage] = useState(null);

  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newCaption || !newImage) return;

    const newPost = {
      id: posts.length + 1,
      user: currentUser,
      caption: newCaption,
      image: URL.createObjectURL(newImage),
      created_at: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
    setNewCaption("");
    setNewImage(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "feed":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-700">📰 Feed</h1>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white shadow rounded-xl overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full" />
                        <span className="font-semibold">@{post.user}</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(post.created_at).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{post.caption}</p>
                  </div>
                  {post.image && (
                    <img src={post.image} alt="Post" className="w-full h-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "add":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-700">➕ Add Post</h1>
            <form onSubmit={handleAddPost} className="bg-white p-6 rounded-xl shadow space-y-4">
              <input
                type="text"
                placeholder="Write a caption..."
                value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(e.target.files[0])}
              />
              {newImage && (
                <img
                  src={URL.createObjectURL(newImage)}
                  alt="Preview"
                  className="w-full h-auto rounded shadow"
                />
              )}
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Post
              </button>
            </form>
          </div>
        );
      case "chat":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-700">💬 Chat</h1>
            <div className="space-y-3">
              {mockUsers.map((user) => (
                <div
                  key={user.username}
                  className="bg-white p-3 rounded shadow flex justify-between items-center hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        user.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                    <span className="font-medium">{user.username}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedUser(user.username);
                      setShowChat(true);
                      setShowCall(false);
                    }}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Chat
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans">
      {/* Sidebar Menu */}
      <div className="w-[240px] bg-white border-r p-4 flex flex-col space-y-6">
        <h2 className="text-xl font-bold text-blue-600">BIM Social</h2>
        <nav className="flex flex-col gap-3">
          <button
            onClick={() => setActiveTab("feed")}
            className={`text-left px-3 py-2 rounded ${
              activeTab === "feed"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            📰 Feed
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`text-left px-3 py-2 rounded ${
              activeTab === "add"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            ➕ Add Post
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`text-left px-3 py-2 rounded ${
              activeTab === "chat"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            💬 Chat
          </button>
        </nav>
        <div className="mt-auto">
          <h3 className="text-sm text-gray-500">Online</h3>
          <div className="space-y-1 mt-2">
            {mockUsers
              .filter((u) => u.online && u.username !== currentUser)
              .map((u) => (
                <div key={u.username} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">{u.username}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>

      {/* Chat Popup */}
      {showChat && selectedUser && (
        <div className="fixed bottom-4 right-4 w-[350px] bg-white rounded shadow-lg z-50 border border-gray-300">
          <div className="flex items-center justify-between p-3 bg-gray-100 border-b">
            <span className="font-semibold">Chat with {selectedUser}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowCall(true)}
                className="text-blue-600 hover:text-blue-800"
              >
                📞
              </button>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ❌
              </button>
            </div>
          </div>
          <div className="h-[300px] overflow-y-auto">
            <ChatBox currentUser={currentUser} recipientUser={selectedUser} />
          </div>
        </div>
      )}

      {/* Call Modal */}
      {showCall && (
        <CallModal
          localRef={localVideoRef}
          remoteRef={remoteVideoRef}
          onHangup={() => setShowCall(false)}
        />
      )}
    </div>
  );
}
