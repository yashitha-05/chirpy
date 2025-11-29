import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, TextField, IconButton, Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getAllTweets } from "../../Store/Tweet/Action";

const Messages = () => {
  const { theme, auth, twit } = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [openNewChatModal, setOpenNewChatModal] = useState(false);
  const [followingSearchQuery, setFollowingSearchQuery] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // Fetch all posts to get all users
  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  // Load chats and messages from localStorage
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem('chirpy_chats');
    return savedChats ? JSON.parse(savedChats) : [];
  });

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chirpy_messages');
    return savedMessages ? JSON.parse(savedMessages) : {};
  });

  // Save chats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chirpy_chats', JSON.stringify(chats));
  }, [chats]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chirpy_messages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      const newMessage = {
        id: (messages[selectedChat.id]?.length || 0) + 1,
        text: message,
        sender: "me",
        time: "Just now",
      };
      
      // Update messages
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedChat.id]: [...(prevMessages[selectedChat.id] || []), newMessage],
      }));
      
      // Update chat list with last message
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === selectedChat.id
            ? { ...chat, lastMessage: message, timestamp: "Just now" }
            : chat
        )
      );
      
      setMessage("");
    }
  };

  const handleStartNewChat = (followingUser) => {
    // Check if chat already exists
    const existingChat = chats.find((chat) => chat.user.id === followingUser.id);
    
    if (existingChat) {
      setSelectedChat(existingChat);
    } else {
      // Create new chat
      const newChat = {
        id: followingUser.id,
        user: {
          id: followingUser.id,
          name: followingUser.fullName,
          username: followingUser.fullName?.split(" ").join("_").toLowerCase(),
          image: followingUser.image,
        },
        lastMessage: "Start a conversation",
        timestamp: "Now",
        unread: 0,
      };
      setChats([newChat, ...chats]);
      setMessages({
        ...messages,
        [newChat.id]: [],
      });
      setSelectedChat(newChat);
    }
    setOpenNewChatModal(false);
  };

  // Get all users from tweets
  useEffect(() => {
    if (twit.twits) {
      const usersMap = new Map();
      
      twit.twits.forEach((tweet) => {
        if (tweet.user && !usersMap.has(tweet.user.id)) {
          usersMap.set(tweet.user.id, tweet.user);
        }
      });

      // Add followers and following
      if (auth.user?.followers) {
        auth.user.followers.forEach((user) => {
          if (!usersMap.has(user.id)) {
            usersMap.set(user.id, user);
          }
        });
      }

      if (auth.user?.followings) {
        auth.user.followings.forEach((user) => {
          if (!usersMap.has(user.id)) {
            usersMap.set(user.id, user);
          }
        });
      }

      // Convert to array and filter out current user
      const users = Array.from(usersMap.values()).filter(
        (user) => user.id !== auth.user?.id
      );

      setAllUsers(users);
    }
  }, [twit.twits, auth.user]);

  // Handle incoming user from navigation state
  useEffect(() => {
    if (location.state?.selectedUser) {
      const user = location.state.selectedUser;
      
      // Check if chat already exists
      const existingChat = chats.find((chat) => chat.user.id === user.id);
      
      if (existingChat) {
        setSelectedChat(existingChat);
      } else {
        // Create new chat
        const newChat = {
          id: user.id,
          user: {
            id: user.id,
            name: user.fullName,
            username: user.fullName?.split(" ").join("_").toLowerCase(),
            image: user.image,
          },
          lastMessage: "Start a conversation",
          timestamp: "Now",
          unread: 0,
        };
        setChats((prevChats) => [newChat, ...prevChats]);
        setMessages((prevMessages) => ({
          ...prevMessages,
          [newChat.id]: [],
        }));
        setSelectedChat(newChat);
      }
      
      // Clear the state after using it
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const filteredChats = chats.filter(
    (chat) =>
      chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = allUsers.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(followingSearchQuery.toLowerCase()) ||
      user.fullName?.split(" ").join("_").toLowerCase().includes(followingSearchQuery.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-100px)]">
      {/* Chat List */}
      <div
        className={`w-[380px] min-w-[380px] border-r ${
          theme.currentTheme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">Messages</h1>
            <IconButton
              onClick={() => setOpenNewChatModal(true)}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                width: 40,
                height: 40,
                "&:hover": { bgcolor: "primary.dark" },
              }}
              size="small"
            >
              <AddIcon />
            </IconButton>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-2.5 pl-10 pr-4 rounded-full outline-none text-sm ${
                theme.currentTheme === "light" ? "bg-slate-300" : "bg-[#151515]"
              }`}
            />
            <SearchIcon
              className="absolute left-3 top-2.5 text-gray-500"
              sx={{ fontSize: 20 }}
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-220px)]">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedChat?.id === chat.id 
                    ? theme.currentTheme === "dark" ? "bg-slate-800" : "bg-slate-200"
                    : theme.currentTheme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-100"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Avatar 
                    src={chat.user.image} 
                    alt={chat.user.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-base truncate">{chat.user.name}</p>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{chat.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate pr-2">
                        {chat.lastMessage}
                      </p>
                      {chat.unread > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 flex-shrink-0">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 px-4 text-gray-500">
              <MessageIcon sx={{ fontSize: 48, opacity: 0.3, mb: 2 }} />
              <p className="font-semibold">No conversations yet</p>
              <p className="text-sm mt-2">Start messaging users on the platform</p>
            </div>
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div
              className={`px-6 py-4 border-b ${
                theme.currentTheme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Avatar 
                  src={selectedChat.user.image} 
                  alt={selectedChat.user.name}
                  sx={{ width: 48, height: 48 }}
                />
                <div>
                  <p className="font-bold text-lg">{selectedChat.user.name}</p>
                  <p className="text-sm text-gray-500">@{selectedChat.user.username}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {messages[selectedChat.id]?.length > 0 ? (
                messages[selectedChat.id].map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[65%] rounded-2xl px-4 py-2.5 ${
                        msg.sender === "me"
                          ? "bg-blue-500 text-white rounded-br-sm"
                          : theme.currentTheme === "dark"
                          ? "bg-[#2f3336] rounded-bl-sm"
                          : "bg-slate-200 rounded-bl-sm"
                      }`}
                    >
                      <p className="text-[15px] leading-relaxed">{msg.text}</p>
                      <p
                        className={`text-[11px] mt-1 ${
                          msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageIcon sx={{ fontSize: 48, opacity: 0.3, mb: 2 }} />
                    <p className="text-gray-500 font-semibold">No messages yet</p>
                    <p className="text-sm text-gray-400 mt-1">Start the conversation!</p>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div
              className={`px-6 py-4 border-t ${
                theme.currentTheme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                  }}
                />
                <IconButton
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": { bgcolor: "primary.dark" },
                    "&:disabled": { bgcolor: "grey.300" },
                  }}
                >
                  <SendIcon />
                </IconButton>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageIcon sx={{ fontSize: 60, opacity: 0.5 }} />
              <h2 className="text-2xl font-bold mt-5">Select a message</h2>
              <p className="text-gray-500 mt-3">
                Choose from your existing conversations or start a new one
              </p>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setOpenNewChatModal(true)}
                sx={{ mt: 3, borderRadius: "20px" }}
              >
                New Message
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* New Chat Modal - Show Following Users */}
      <Modal
        open={openNewChatModal}
        onClose={() => setOpenNewChatModal(false)}
        aria-labelledby="new-chat-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            maxHeight: "80vh",
            bgcolor: theme.currentTheme === "dark" ? "#1e1e1e" : "white",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
            overflow: "auto",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">New Message</h2>
            <IconButton onClick={() => setOpenNewChatModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search users to message"
              value={followingSearchQuery}
              onChange={(e) => setFollowingSearchQuery(e.target.value)}
              className={`w-full py-2 pl-10 pr-4 rounded-full outline-none ${
                theme.currentTheme === "light" ? "bg-slate-300" : "bg-[#151515]"
              }`}
            />
            <SearchIcon
              className="absolute left-3 top-2.5 text-gray-500"
              sx={{ fontSize: 20 }}
            />
          </div>

          <div className="space-y-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 hover:bg-slate-800 rounded cursor-pointer"
                  onClick={() => handleStartNewChat(user)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar src={user.image} alt={user.fullName} />
                    <div>
                      <p className="font-semibold">{user.fullName}</p>
                      <p className="text-sm text-gray-500">
                        @{user.fullName?.split(" ").join("_").toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: "20px" }}
                  >
                    Message
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                <p>
                  {allUsers.length > 0
                    ? "No users found"
                    : "No users available"}
                </p>
                <p className="text-sm mt-2">
                  {allUsers.length > 0
                    ? "Try a different search"
                    : "Start by exploring and connecting with users"}
                </p>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Messages;
