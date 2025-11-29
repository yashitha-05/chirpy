import React, { useState } from "react";
import { useSelector } from "react-redux";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const Communities = () => {
  const { theme } = useSelector((store) => store);
  const [searchQuery, setSearchQuery] = useState("");

  const communities = [
    {
      name: "Tech Enthusiasts",
      platform: "WhatsApp",
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />,
      link: "https://chat.whatsapp.com/invite/tech-community",
      description: "Join our tech community to discuss latest trends",
      members: "2.5K",
      color: "#25D366",
    },
    {
      name: "Developers Hub",
      platform: "Facebook",
      icon: <FacebookIcon sx={{ fontSize: 40, color: "#1877F2" }} />,
      link: "https://www.facebook.com/groups/developers",
      description: "Connect with developers worldwide",
      members: "15K",
      color: "#1877F2",
    },
    {
      name: "Design Community",
      platform: "Instagram",
      icon: <InstagramIcon sx={{ fontSize: 40, color: "#E1306C" }} />,
      link: "https://www.instagram.com/design_community",
      description: "Share and explore creative designs",
      members: "8.3K",
      color: "#E1306C",
    },
    {
      name: "Startup Founders",
      platform: "WhatsApp",
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />,
      link: "https://chat.whatsapp.com/invite/startup-founders",
      description: "Network with fellow entrepreneurs",
      members: "1.2K",
      color: "#25D366",
    },
    {
      name: "AI & ML Enthusiasts",
      platform: "Telegram",
      icon: <TelegramIcon sx={{ fontSize: 40, color: "#0088cc" }} />,
      link: "https://t.me/ai_ml_community",
      description: "Discuss AI, Machine Learning, and Data Science",
      members: "5.7K",
      color: "#0088cc",
    },
    {
      name: "Photography Club",
      platform: "Instagram",
      icon: <InstagramIcon sx={{ fontSize: 40, color: "#E1306C" }} />,
      link: "https://www.instagram.com/photography_club",
      description: "Share your best shots and learn from pros",
      members: "12K",
      color: "#E1306C",
    },
    {
      name: "Fitness & Health",
      platform: "Facebook",
      icon: <FacebookIcon sx={{ fontSize: 40, color: "#1877F2" }} />,
      link: "https://www.facebook.com/groups/fitness",
      description: "Stay fit and healthy together",
      members: "20K",
      color: "#1877F2",
    },
    {
      name: "Book Lovers",
      platform: "WhatsApp",
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />,
      link: "https://chat.whatsapp.com/invite/book-club",
      description: "Discuss books and share recommendations",
      members: "3.8K",
      color: "#25D366",
    },
  ];

  const handleJoinCommunity = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <section className="pb-5">
        <h1 className="py-5 text-xl font-bold opacity-90">Communities</h1>
        <p className="text-sm opacity-70">
          Join communities on WhatsApp, Facebook, Instagram, and Telegram
        </p>
      </section>

      <section className="pb-5">
        <div className="relative flex items-center">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            type="text"
            placeholder="Search communities by name, topic, or platform..."
            className={`py-3 rounded-full outline-none text-gray-500 w-full pl-12 ${
              theme.currentTheme === "light" ? "bg-slate-300" : "bg-[#151515]"
            }`}
          />
          <span className="absolute top-0 left-0 pl-3 pt-3">
            <SearchIcon className="text-gray-500" />
          </span>
        </div>
        {searchQuery && (
          <p className="text-sm opacity-70 mt-2">
            Found {filteredCommunities.length} communities
          </p>
        )}
      </section>

      <section className="space-y-4">
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community, index) => (
          <Box
            key={index}
            className={`p-5 rounded-md cursor-pointer transition-all hover:scale-[1.02] ${
              theme.currentTheme === "dark"
                ? "bg-[#151515] hover:bg-[#1a1a1a]"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
            onClick={() => handleJoinCommunity(community.link)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="mt-1">{community.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{community.name}</h3>
                  <p className="text-sm opacity-70 mt-1">
                    {community.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="text-xs opacity-60 flex items-center">
                      <GroupIcon sx={{ fontSize: 16, marginRight: "4px" }} />
                      {community.members} members
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: community.color }}
                    >
                      {community.platform}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: community.color,
                  "&:hover": {
                    backgroundColor: community.color,
                    opacity: 0.9,
                  },
                  borderRadius: "20px",
                  textTransform: "none",
                  minWidth: "80px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleJoinCommunity(community.link);
                }}
              >
                Join
              </Button>
            </div>
          </Box>
        ))
        ) : (
          <Box
            className={`p-10 rounded-md text-center ${
              theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
            }`}
          >
            <SearchIcon sx={{ fontSize: 60, opacity: 0.3 }} />
            <p className="text-gray-500 mt-3">
              No communities found matching "{searchQuery}"
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Try searching with different keywords
            </p>
          </Box>
        )}
      </section>

      <section
        className={`mt-7 p-5 rounded-md ${
          theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
        }`}
      >
        <h2 className="font-bold text-lg mb-3">Popular Platforms</h2>
        <div className="grid grid-cols-2 gap-4">
          <Box
            className="p-4 rounded-md text-center cursor-pointer hover:opacity-80"
            sx={{ backgroundColor: "#25D366" }}
            onClick={() =>
              window.open("https://www.whatsapp.com", "_blank")
            }
          >
            <WhatsAppIcon sx={{ fontSize: 40, color: "white" }} />
            <p className="text-white font-semibold mt-2">WhatsApp</p>
          </Box>
          <Box
            className="p-4 rounded-md text-center cursor-pointer hover:opacity-80"
            sx={{ backgroundColor: "#1877F2" }}
            onClick={() =>
              window.open("https://www.facebook.com/groups", "_blank")
            }
          >
            <FacebookIcon sx={{ fontSize: 40, color: "white" }} />
            <p className="text-white font-semibold mt-2">Facebook</p>
          </Box>
          <Box
            className="p-4 rounded-md text-center cursor-pointer hover:opacity-80"
            sx={{ backgroundColor: "#E1306C" }}
            onClick={() =>
              window.open("https://www.instagram.com", "_blank")
            }
          >
            <InstagramIcon sx={{ fontSize: 40, color: "white" }} />
            <p className="text-white font-semibold mt-2">Instagram</p>
          </Box>
          <Box
            className="p-4 rounded-md text-center cursor-pointer hover:opacity-80"
            sx={{ backgroundColor: "#0088cc" }}
            onClick={() => window.open("https://t.me", "_blank")}
          >
            <TelegramIcon sx={{ fontSize: 40, color: "white" }} />
            <p className="text-white font-semibold mt-2">Telegram</p>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Communities;
