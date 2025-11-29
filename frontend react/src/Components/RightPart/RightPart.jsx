import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, CircularProgress } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../Store/Theme/Action";
import SubscriptionModel from "./SubscriptionModel";
import { searchUser } from "../../Store/Auth/Action";
import { useNavigate } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const RightPart = () => {
  const { theme, auth } = useSelector((store) => store);
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);
  const handleCloseSubscriptionMadal = () => setOpenSubscriptionModal(false);
  const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoadingNews(true);
    try {
      // Using mock news data - you can replace with real API
      setNews([
        {
          title: "Tech Giants Announce Major AI Breakthrough in Healthcare",
          source: { name: "Tech News" },
          url: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB",
          publishedAt: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          title: "Global Markets Show Strong Recovery Amid Economic Optimism",
          source: { name: "Financial Times" },
          url: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB",
          publishedAt: new Date(Date.now() - 7200000).toISOString(),
        },
        {
          title: "Climate Summit Reaches Historic Agreement on Emissions",
          source: { name: "World News" },
          url: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGs0ZDNJU0FtVnVHZ0pWVXlnQVAB",
          publishedAt: new Date(Date.now() - 10800000).toISOString(),
        },
        {
          title: "New Space Mission Launches Successfully to Mars",
          source: { name: "Space Today" },
          url: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pWVXlnQVAB",
          publishedAt: new Date(Date.now() - 14400000).toISOString(),
        },
        {
          title: "Healthcare Innovation: New Treatment Shows Promise",
          source: { name: "Health Daily" },
          url: "https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ",
          publishedAt: new Date(Date.now() - 18000000).toISOString(),
        },
      ]);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoadingNews(false);
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  const handleChangeTheme = () => {
    dispatch(changeTheme(theme.currentTheme === "dark" ? "light" : "dark"));
  };
  const handleSearchUser = (event) => {
    setSearch(event.target.value);
    dispatch(searchUser(event.target.value));
  };
  const navigateToProfile = (id) => {
    navigate(`/profile/${id}`);
    setSearch("");
  };
  return (
    <div className="py-5 sticky top-0 overflow-y-hidden">
      <div className="hideScrollbar overflow-y-scroll">
        <div className="relative flex items-center">
          <input
            value={search}
            onChange={handleSearchUser}
            type="text"
            placeholder="Search Chirpy"
            className={`py-3 rounded-full outline-none text-gray-500 w-full pl-12 ${
              theme.currentTheme === "light" ? "bg-slate-300" : "bg-[#151515]"
            }`}
          />
          <span className="absolute top-0 left-0 pl-3 pt-3">
            <SearchIcon className="text-gray-500" />
          </span>
          {search && (
            <div
              className={` overflow-y-scroll hideScrollbar absolute z-50 top-14  border-gray-700 h-[40vh] w-full rounded-md ${
                theme.currentTheme === "light"
                  ? "bg-white"
                  : "bg-[#151515] border"
              }`}
            >
              {auth.searchResult.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigateToProfile(item.id)}
                  className="flex items-center hover:bg-slate-800 p-3 cursor-pointer"
                >
                  <Avatar alt={item.fullName} src={item.image} />
                  <div className="ml-2">
                    <p>{item.fullName}</p>
                    <p className="text-sm text-gray-400">
                      @{item.fullName.split(" ").join("_").toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <Brightness4Icon
            onClick={handleChangeTheme}
            className="ml-3 cursor-pointer"
          />
        </div>

        <section
          className={`my-5 ${
            theme.currentTheme === "dark" ? " bg-[#151515] p-5 rounded-md" : ""
          }`}
        >
          <h1 className="text-xl font-bold">Get Verified</h1>
          <h1 className="font-bold my-2">Subscribe to unlock new features</h1>
          <Button
            onClick={handleOpenSubscriptionModal}
            variant="contained"
            sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          >
            {" "}
            Get verified
          </Button>
        </section>

        <section
          className={`mt-7 space-y-5 ${
            theme.currentTheme === "dark" ? " bg-[#151515] p-5 rounded-md" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl py-1">What's happening</h1>
            <NewspaperIcon className="text-blue-500" />
          </div>

          {loadingNews ? (
            <div className="flex justify-center py-5">
              <CircularProgress size={30} />
            </div>
          ) : (
            <>
              {news.map((article, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full cursor-pointer hover:bg-slate-800 p-2 rounded transition-all"
                  onClick={() => window.open(article.url, "_blank")}
                >
                  <div className="flex-1">
                    <p className="text-xs opacity-70">
                      {article.source?.name || "News"} ·{" "}
                      {getTimeAgo(article.publishedAt)}
                    </p>
                    <p className="font-bold text-sm mt-1 line-clamp-2">
                      {article.title}
                    </p>
                  </div>
                  <OpenInNewIcon
                    className="ml-2 opacity-50"
                    sx={{ fontSize: 18 }}
                  />
                </div>
              ))}
            </>
          )}
        </section>
      </div>
      <SubscriptionModel
        open={openSubscriptionModal}
        handleClose={handleCloseSubscriptionMadal}
      />
    </div>
  );
};

export default RightPart;
