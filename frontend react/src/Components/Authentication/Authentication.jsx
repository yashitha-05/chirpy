import { Button, Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthModel from "./AuthModel";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogleAction } from "../../Store/Auth/Action";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ExploreIcon from "@mui/icons-material/Explore";

const Authentication = () => {
  const [authModelOpen, setAuthModelOpen] = useState(false);
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthModelClose = () => {
    setAuthModelOpen(false);
    navigate("/");
  };

  const handleAuthModelOpen = (path) => {
    setAuthModelOpen(true);
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      setAuthModelOpen(true);
    }
  }, [location.pathname]);

  const loginWithGoole = (res) => {
    console.log("res : ", res);
    dispatch(loginWithGoogleAction(res));
  };

  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "Follow Your Interests",
      description: "Discover and connect with topics you care about",
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: "Connect with People",
      description: "Join conversations with millions of users worldwide",
    },
    {
      icon: <ChatBubbleIcon sx={{ fontSize: 40 }} />,
      title: "Share Your Voice",
      description: "Express yourself and engage in real-time discussions",
    },
    {
      icon: <ExploreIcon sx={{ fontSize: 40 }} />,
      title: "Explore Communities",
      description: "Find and join communities that match your interests",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Grid container className="min-h-screen">
        {/* Left Side - Auth Form */}
        <Grid
          className="flex items-center justify-center px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
          item
          lg={5}
          xs={12}
        >
          <div className="w-full max-w-md">
            {/* Welcome Text */}
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/chirpy-logo.png"
                  alt="Chirpy Logo"
                  className="w-16 h-16 object-contain"
                />
                <h1 className="text-6xl font-bold text-gray-900">
                  Happening now
                </h1>
              </div>
              <p className="text-2xl font-semibold text-gray-700 mb-2">Join Chirpy today.</p>
            </div>

            {/* Auth Buttons */}
            <div className="space-y-4">
              {/* Google Sign In */}
              <div className="flex justify-center">
                <GoogleLogin
                  width={380}
                  onSuccess={loginWithGoole}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm font-medium">
                  OR
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Create Account Button */}
              <Button
                onClick={() => handleAuthModelOpen("/signup")}
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "50px",
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  bgcolor: "#1d9bf0",
                  boxShadow: "0 4px 15px rgba(29, 155, 240, 0.4)",
                  "&:hover": {
                    bgcolor: "#1a8cd8",
                    boxShadow: "0 6px 20px rgba(29, 155, 240, 0.6)",
                  },
                }}
              >
                Create Account
              </Button>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center px-4">
                By signing up, you agree to the{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                , including Cookie Use.
              </p>

              {/* Sign In Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-lg font-bold text-gray-900 mb-4">
                  Already have an account?
                </p>
                <Button
                  onClick={() => handleAuthModelOpen("/signin")}
                  fullWidth
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderColor: "#1d9bf0",
                    color: "#1d9bf0",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: "#1a8cd8",
                      backgroundColor: "rgba(29, 155, 240, 0.05)",
                      borderWidth: 2,
                    },
                  }}
                >
                  Sign in
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-12 flex justify-center space-x-4 text-xs text-gray-500">
              <a href="/about" className="hover:underline cursor-pointer">
                About
              </a>
              <a href="/help" className="hover:underline cursor-pointer">
                Help Center
              </a>
              <a href="/terms" className="hover:underline cursor-pointer">
                Terms
              </a>
              <a href="/privacy" className="hover:underline cursor-pointer">
                Privacy
              </a>
            </div>
          </div>
        </Grid>

        {/* Right Side - Social Media Image */}
        <Grid
          className="hidden lg:flex items-center justify-center relative overflow-hidden"
          item
          lg={7}
          sx={{
            background: "#1da1f2",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="https://framerusercontent.com/images/sIp3Z6X2Wz1AaYlVqSF63DI9gM.jpg?width=768&height=452"
              alt="Social Media Marketing"
              className="w-full h-full object-cover"
            />
          </div>
        </Grid>
      </Grid>

      <AuthModel isOpen={authModelOpen} handleClose={handleAuthModelClose} />
    </div>
  );
};

export default Authentication;
