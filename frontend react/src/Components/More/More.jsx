import React, { useState } from "react";
import { useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BlockIcon from "@mui/icons-material/Block";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Box, Collapse, Avatar } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const More = () => {
  const { theme, auth } = useSelector((store) => store);
  const [expandedSettings, setExpandedSettings] = useState(false);
  const [expandedHelp, setExpandedHelp] = useState(false);

  const toggleSettings = () => setExpandedSettings(!expandedSettings);
  const toggleHelp = () => setExpandedHelp(!expandedHelp);

  return (
    <div className="space-y-5">
      <section className="pb-5">
        <h1 className="py-5 text-xl font-bold opacity-90">More</h1>
      </section>

      {/* Settings and Privacy */}
      <section
        className={`rounded-md ${
          theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
        }`}
      >
        <Box
          className="flex items-center justify-between p-4 hover:bg-slate-700 rounded cursor-pointer"
          onClick={toggleSettings}
        >
          <div className="flex items-center space-x-4">
            <SettingsIcon sx={{ fontSize: 28 }} />
            <div>
              <p className="font-semibold">Settings and Privacy</p>
              <p className="text-sm text-gray-500">
                Manage your account settings
              </p>
            </div>
          </div>
          {expandedSettings ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </Box>

        <Collapse in={expandedSettings}>
          <div className="px-4 pb-4 space-y-2">
            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <SecurityIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Account Security</p>
                <p className="text-xs text-gray-500">
                  Password, two-factor authentication
                </p>
              </div>
            </Box>

            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <NotificationsIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-xs text-gray-500">
                  Manage notification preferences
                </p>
              </div>
            </Box>

            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <VisibilityIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Privacy and Safety</p>
                <p className="text-xs text-gray-500">
                  Control who can see your content
                </p>
              </div>
            </Box>

            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <BlockIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Blocked and Muted</p>
                <p className="text-xs text-gray-500">
                  Manage blocked and muted accounts
                </p>
              </div>
            </Box>

            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <DataUsageIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Data Usage</p>
                <p className="text-xs text-gray-500">
                  Manage your data and download
                </p>
              </div>
            </Box>

            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <AccessibilityIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Accessibility</p>
                <p className="text-xs text-gray-500">
                  Display and language settings
                </p>
              </div>
            </Box>
          </div>
        </Collapse>
      </section>

      {/* Help Center */}
      <section
        className={`rounded-md ${
          theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
        }`}
      >
        <Box
          className="flex items-center justify-between p-4 hover:bg-slate-700 rounded cursor-pointer"
          onClick={toggleHelp}
        >
          <div className="flex items-center space-x-4">
            <HelpOutlineIcon sx={{ fontSize: 28 }} />
            <div>
              <p className="font-semibold">Help Center</p>
              <p className="text-sm text-gray-500">Get help using Chirpy</p>
            </div>
          </div>
          {expandedHelp ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </Box>

        <Collapse in={expandedHelp}>
          <div className="px-4 pb-4 space-y-2">
            <Box
              className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer"
              onClick={() =>
                window.open("https://help.twitter.com", "_blank")
              }
            >
              <InfoIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Help Articles</p>
                <p className="text-xs text-gray-500">
                  Browse help topics and FAQs
                </p>
              </div>
            </Box>

            <Box
              className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer"
              onClick={() =>
                window.open("https://help.twitter.com/contact", "_blank")
              }
            >
              <FeedbackIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">Contact Support</p>
                <p className="text-xs text-gray-500">
                  Get in touch with our support team
                </p>
              </div>
            </Box>

            <Box className="flex items-center space-x-3 p-3 hover:bg-slate-700 rounded cursor-pointer">
              <InfoIcon sx={{ fontSize: 22 }} />
              <div>
                <p className="font-medium">About Chirpy</p>
                <p className="text-xs text-gray-500">
                  Terms, privacy policy, and more
                </p>
              </div>
            </Box>
          </div>
        </Collapse>
      </section>
    </div>
  );
};

export default More;
