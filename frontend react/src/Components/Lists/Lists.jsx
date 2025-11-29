import React from "react";
import { useSelector } from "react-redux";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Lists = () => {
  const { theme } = useSelector((store) => store);

  return (
    <div className="space-y-5">
      <section className="pb-5">
        <h1 className="py-5 text-xl font-bold opacity-90">Lists</h1>
      </section>

      <section
        className={`p-10 rounded-md text-center ${
          theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
        }`}
      >
        <ListAltIcon sx={{ fontSize: 60, opacity: 0.5 }} />
        <h2 className="text-2xl font-bold mt-5">Create and manage Lists</h2>
        <p className="text-gray-500 mt-3">
          Lists are a great way to organize posts from accounts you're interested in.
        </p>
      </section>
    </div>
  );
};

export default Lists;
