import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

const HelpCenter = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click on 'Create Account' on the homepage, fill in your details including name, email, and password, then verify your email address to complete the signup process.",
        },
        {
          q: "How do I reset my password?",
          a: "Click on 'Forgot Password' on the sign-in page, enter your email address, and follow the instructions sent to your email to reset your password.",
        },
        {
          q: "How do I verify my account?",
          a: "After signing up, check your email for a verification link. Click the link to verify your account. You can also request a new verification email from your account settings.",
        },
      ],
    },
    {
      category: "Using the Platform",
      questions: [
        {
          q: "How do I create a post?",
          a: "Click on the post box at the top of your home feed, type your message (up to 280 characters), add images or videos if desired, and click 'Post' to share.",
        },
        {
          q: "How do I follow someone?",
          a: "Visit their profile and click the 'Follow' button. You'll see their posts in your home feed and can interact with their content.",
        },
        {
          q: "How do I send a direct message?",
          a: "Click on 'Messages' in the navigation menu, then click the '+' icon to start a new conversation. Search for the user you want to message and start chatting.",
        },
        {
          q: "How do I like or reply to a post?",
          a: "Click the heart icon to like a post, or click the reply icon to add a comment. You can also repost or share posts with your followers.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "How do I make my account private?",
          a: "Go to Settings > Privacy and Safety, then enable 'Protect your posts'. This means only approved followers can see your posts.",
        },
        {
          q: "How do I block someone?",
          a: "Visit their profile, click the three dots menu, and select 'Block'. Blocked users cannot see your profile or interact with you.",
        },
        {
          q: "How do I report inappropriate content?",
          a: "Click the three dots on any post or profile, select 'Report', choose the reason for reporting, and submit. Our team will review it promptly.",
        },
      ],
    },
    {
      category: "Account Management",
      questions: [
        {
          q: "How do I edit my profile?",
          a: "Go to your profile, click 'Edit Profile', update your information including profile picture, bio, location, and website, then click 'Save'.",
        },
        {
          q: "How do I delete my account?",
          a: "Go to Settings > Account > Delete Account. Note that this action is permanent and cannot be undone. Your data will be deleted after 30 days.",
        },
        {
          q: "How do I change my username?",
          a: "Go to Settings > Account > Username, enter your new username, and save. Your username must be unique and available.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Container maxWidth="lg" className="py-12">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-gray-600 mb-8">
            Find answers to common questions and learn how to use our platform
          </p>

          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full outline-none focus:border-blue-500"
            />
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400" />
          </div>

          {/* FAQ Sections */}
          <div className="space-y-6">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <div className="space-y-2">
                  {category.questions.map((faq, qIdx) => (
                    <Accordion key={qIdx}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h3 className="font-semibold text-gray-800">{faq.q}</h3>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className="text-gray-600">{faq.a}</p>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Still Need Help?
            </h2>
            <p className="text-gray-700 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1d9bf0",
                "&:hover": { bgcolor: "#1a8cd8" },
                borderRadius: "25px",
                textTransform: "none",
                px: 4,
              }}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HelpCenter;
