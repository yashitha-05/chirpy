import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../../Store/Tweet/Action";
import TwitCard from "../Home/MiddlePart/TwitCard/TwitCard";
import { CircularProgress } from "@mui/material";

const Notifications = () => {
  const dispatch = useDispatch();
  const { twit, theme } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  return (
    <div className="space-y-5">
      <section className="pb-5">
        <h1 className="py-5 text-xl font-bold opacity-90">Notifications</h1>
        <p className="text-sm opacity-70">
          See all posts from users on the platform
        </p>
      </section>

      {twit.loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CircularProgress />
        </div>
      ) : (
        <section className={`${theme.currentTheme === "dark" ? "pt-5" : ""} space-y-5`}>
          {twit.twits && twit.twits.length > 0 ? (
            twit.twits.map((item) => (
              <div
                key={item.id}
                className={`${
                  theme.currentTheme === "dark"
                    ? "bg-[#151515] p-5 rounded-md"
                    : "bg-slate-50 p-5 rounded-md"
                }`}
              >
                <TwitCard twit={item} />
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No posts available yet</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Notifications;
