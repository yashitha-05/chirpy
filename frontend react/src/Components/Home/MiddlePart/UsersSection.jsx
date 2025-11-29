import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import MessageIcon from "@mui/icons-material/Message";
import ImageIcon from "@mui/icons-material/Image";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { FollowUserAction } from "../../../Store/Auth/Action";
import { getAllTweets, createTweet } from "../../../Store/Tweet/Action";
import { uploadToCloudinary } from "../../../Utils/UploadToCloudinary";
import BackdropComponent from "../../Backdrop/Backdrop";
import EmojiPicker from "emoji-picker-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Post text is required"),
});

const UsersSection = () => {
  const { auth, theme, twit } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleOpenEmoji = () => setOpenEmoji(!openEmoji);
  const handleCloseEmoji = () => setOpenEmoji(false);

  const handleSubmit = (values, actions) => {
    dispatch(createTweet(values));
    actions.resetForm();
    setSelectedImage("");
    setSelectedVideo("");
    handleCloseEmoji();
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      video: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleSelectImage = async (event) => {
    setUploadingImage(true);
    const imgUrl = await uploadToCloudinary(event.target.files[0], "image");
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  const handleSelectVideo = async (event) => {
    setUploadingImage(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    formik.setFieldValue("video", videoUrl);
    setSelectedVideo(videoUrl);
    setUploadingImage(false);
  };

  const handleEmojiClick = (value) => {
    const { emoji } = value;
    formik.setFieldValue("content", formik.values.content + emoji);
  };

  useEffect(() => {
    // Fetch all posts to get all users who have posted
    dispatch(getAllTweets());
  }, [dispatch]);

  useEffect(() => {
    if (twit.twits) {
      // Extract unique users from posts
      const usersMap = new Map();
      
      twit.twits.forEach((post) => {
        if (post.user && !usersMap.has(post.user.id)) {
          usersMap.set(post.user.id, post.user);
        }
      });

      // Add current user's followers and following
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

      // Convert map to array and filter out current user
      const users = Array.from(usersMap.values()).filter(
        (user) => user.id !== auth.user?.id
      );

      setAllUsers(users);
      setLoading(false);
    }
  }, [twit.twits, auth.user]);

  const handleFollowUser = (userId, event) => {
    event.stopPropagation(); // Prevent navigation when clicking follow button
    dispatch(FollowUserAction(userId));
    // Force re-render by updating the users list after a short delay
    setTimeout(() => {
      if (twit.twits) {
        const usersMap = new Map();
        
        twit.twits.forEach((post) => {
          if (post.user && !usersMap.has(post.user.id)) {
            usersMap.set(post.user.id, post.user);
          }
        });

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

        const users = Array.from(usersMap.values()).filter(
          (user) => user.id !== auth.user?.id
        );

        setAllUsers(users);
      }
    }, 500);
  };

  const handleNavigateToProfile = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const handleMessageUser = (user, event) => {
    event.stopPropagation(); // Prevent navigation when clicking message button
    // Navigate to messages with user data in state
    navigate("/messages", { state: { selectedUser: user } });
  };

  const isFollowing = (userId) => {
    return auth.user?.followings?.some((user) => user.id === userId);
  };

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>

      {/* Post Creation Section */}
      <section
        className={`pb-10 ${
          theme.currentTheme === "dark" ? " bg-[#151515] p-10 rounded-md mb-10" : "bg-slate-100 p-10 rounded-md mb-10"
        }`}
      >
        <div className="flex space-x-5">
          <Avatar alt="Avatar" src={auth.user?.image} sx={{ width: 48, height: 48 }} />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What's happening?"
                  className={`border-none outline-none text-xl bg-transparent w-full ${
                    theme.currentTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <div className="text-red-500 text-sm mt-2">{formik.errors.content}</div>
                )}
              </div>

              {!uploadingImage && (
                <div className="mt-3">
                  {selectedImage && (
                    <img className="w-full max-w-md rounded-md" src={selectedImage} alt="" />
                  )}
                  {selectedVideo && <video autoPlay controls src={selectedVideo} className="w-full max-w-md rounded-md" />}
                </div>
              )}

              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                      accept="image/*"
                    />
                  </label>

                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <SlideshowIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="videoFile"
                      className="hidden"
                      onChange={handleSelectVideo}
                      accept="video/*"
                    />
                  </label>

                  <div className="relative">
                    <TagFacesIcon
                      onClick={handleOpenEmoji}
                      className="text-[#1d9bf0] cursor-pointer"
                    />
                    {openEmoji && (
                      <div className="absolute top-10 z-50">
                        <EmojiPicker
                          theme={theme.currentTheme}
                          onEmojiClick={handleEmojiClick}
                          lazyLoadEmojis={true}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#1d9bf0",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      color: "white",
                    }}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Users Section */}
      <section>
        <h2 className="text-lg font-bold opacity-90 mb-3">Connect with Users</h2>
        <p className="text-sm opacity-70 pb-3">
          {allUsers.length} users on the platform
        </p>
      </section>

      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : (
        <section className="space-y-4">
          {allUsers.length > 0 ? (
            allUsers.map((user) => (
              <div
                key={user.id}
                className={`p-5 rounded-md ${
                  theme.currentTheme === "dark"
                    ? "bg-[#151515] hover:bg-[#1a1a1a]"
                    : "bg-slate-100 hover:bg-slate-200"
                } transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-start space-x-3 cursor-pointer flex-1"
                    onClick={() => handleNavigateToProfile(user.id)}
                  >
                    <Avatar
                      src={user.image}
                      alt={user.fullName}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg">{user.fullName}</h3>
                        {user.verified && (
                          <img
                            className="w-5 h-5"
                            src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                            alt="verified"
                          />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        @{user.fullName?.split(" ").join("_").toLowerCase()}
                      </p>
                      {user.bio && (
                        <p className="text-sm mt-2 opacity-80">{user.bio}</p>
                      )}
                      {user.location && (
                        <p className="text-xs text-gray-500 mt-1">
                          📍 {user.location}
                        </p>
                      )}
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm">
                          <span className="font-semibold">
                            {user.followings?.length || 0}
                          </span>{" "}
                          <span className="text-gray-500">Following</span>
                        </span>
                        <span className="text-sm">
                          <span className="font-semibold">
                            {user.followers?.length || 0}
                          </span>{" "}
                          <span className="text-gray-500">Followers</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-3">
                    <Button
                      variant={isFollowing(user.id) ? "outlined" : "contained"}
                      size="small"
                      startIcon={
                        isFollowing(user.id) ? (
                          <PersonRemoveIcon />
                        ) : (
                          <PersonAddIcon />
                        )
                      }
                      onClick={(e) => handleFollowUser(user.id, e)}
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        minWidth: "120px",
                      }}
                    >
                      {isFollowing(user.id) ? "Unfollow" : "Follow"}
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<MessageIcon />}
                      onClick={(e) => handleMessageUser(user, e)}
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        minWidth: "120px",
                      }}
                    >
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className={`p-10 rounded-md text-center ${
                theme.currentTheme === "dark" ? "bg-[#151515]" : "bg-slate-100"
              }`}
            >
              <PersonAddIcon sx={{ fontSize: 60, opacity: 0.5 }} />
              <h2 className="text-xl font-bold mt-3">No users found</h2>
              <p className="text-gray-500 mt-2">
                Be the first to post and connect with others!
              </p>
            </div>
          )}
        </section>
      )}

      <BackdropComponent open={uploadingImage} />
    </div>
  );
};

export default UsersSection;
