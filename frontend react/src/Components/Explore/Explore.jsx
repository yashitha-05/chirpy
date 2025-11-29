import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Chip } from "@mui/material";

const Explore = () => {
  const { theme } = useSelector((store) => store);
  const [hashtag, setHashtag] = useState("");
  const [searchedHashtag, setSearchedHashtag] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (hashtag.trim()) {
      // Remove # if user typed it
      const cleanHashtag = hashtag.replace(/^#/, "");
      setSearchedHashtag(cleanHashtag);
    }
  };

  const handleInputChange = (e) => {
    setHashtag(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="py-5">
      <section className="pb-5">
        <h1 className="py-5 text-xl font-bold opacity-90">Explore</h1>
        <div className="relative flex items-center">
          <input
            value={hashtag}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Search hashtags (e.g., #trending)"
            className={`py-3 rounded-full outline-none text-gray-500 w-full pl-12 ${
              theme.currentTheme === "light" ? "bg-slate-300" : "bg-[#151515]"
            }`}
          />
          <span className="absolute top-0 left-0 pl-3 pt-3">
            <SearchIcon className="text-gray-500" />
          </span>
        </div>
      </section>

      {searchedHashtag && (
        <section
          className={`mt-5 p-5 rounded-md ${
            theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
          }`}
        >
          <h2 className="text-lg font-bold mb-4">
            Search results for #{searchedHashtag}
          </h2>

          <div className="space-y-4">
            <Box className="flex items-center space-x-3">
              <a
                href={`https://www.instagram.com/explore/tags/${searchedHashtag}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Chip
                  icon={<InstagramIcon />}
                  label={`#${searchedHashtag}`}
                  sx={{
                    backgroundColor: "#E1306C",
                    color: "white",
                    fontSize: "16px",
                    padding: "20px 10px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#C13584",
                    },
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                  }}
                />
              </a>
              <span className="text-sm opacity-70">View on Instagram</span>
            </Box>

            <Box className="flex items-center space-x-3">
              <a
                href={`https://www.facebook.com/hashtag/${searchedHashtag}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Chip
                  icon={<FacebookIcon />}
                  label={`#${searchedHashtag}`}
                  sx={{
                    backgroundColor: "#1877F2",
                    color: "white",
                    fontSize: "16px",
                    padding: "20px 10px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#166FE5",
                    },
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                  }}
                />
              </a>
              <span className="text-sm opacity-70">View on Facebook</span>
            </Box>
          </div>
        </section>
      )}

      <section
        className={`mt-7 space-y-5 p-5 rounded-md ${
          theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
        }`}
      >
        <h1 className="font-bold text-xl py-1">Trending Hashtags</h1>

        <div className="space-y-4">
          <div
            className="cursor-pointer hover:bg-slate-800 p-2 rounded"
            onClick={() => {
              setHashtag("TheMarvels");
              setSearchedHashtag("TheMarvels");
            }}
          >
            <p className="text-sm opacity-70">Entertainment · Trending</p>
            <p className="font-bold">#TheMarvels</p>
            <p className="text-sm opacity-70">34.3K Tweets</p>
          </div>

          <div
            className="cursor-pointer hover:bg-slate-800 p-2 rounded"
            onClick={() => {
              setHashtag("WorldCup");
              setSearchedHashtag("WorldCup");
            }}
          >
            <p className="text-sm opacity-70">Sports · Trending</p>
            <p className="font-bold">#WorldCup</p>
            <p className="text-sm opacity-70">125K Tweets</p>
          </div>

          <div
            className="cursor-pointer hover:bg-slate-800 p-2 rounded"
            onClick={() => {
              setHashtag("Technology");
              setSearchedHashtag("Technology");
            }}
          >
            <p className="text-sm opacity-70">Tech · Trending</p>
            <p className="font-bold">#Technology</p>
            <p className="text-sm opacity-70">89.2K Tweets</p>
          </div>

          <div
            className="cursor-pointer hover:bg-slate-800 p-2 rounded"
            onClick={() => {
              setHashtag("AI");
              setSearchedHashtag("AI");
            }}
          >
            <p className="text-sm opacity-70">Technology · Trending</p>
            <p className="font-bold">#AI</p>
            <p className="text-sm opacity-70">256K Tweets</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
