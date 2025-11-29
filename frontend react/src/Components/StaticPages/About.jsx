import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Container maxWidth="md" className="py-12">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="leading-relaxed">
                We believe in the power of connection and conversation. Our platform
                is designed to give everyone the power to create and share ideas and
                information instantly, without barriers. We're building a global
                community where people can express themselves freely and connect with
                others who share their interests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                What We Do
              </h2>
              <p className="leading-relaxed mb-4">
                Our social media platform enables users to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Share thoughts, ideas, and moments in real-time</li>
                <li>Connect with people from around the world</li>
                <li>Discover trending topics and conversations</li>
                <li>Join communities based on shared interests</li>
                <li>Engage in meaningful discussions</li>
                <li>Stay informed about what's happening globally</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Our Values
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">Freedom of Expression</h3>
                  <p>
                    We believe everyone has the right to share their voice and
                    perspective.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Authenticity</h3>
                  <p>
                    We encourage genuine connections and authentic conversations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Innovation</h3>
                  <p>
                    We continuously evolve to meet the needs of our global community.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Safety</h3>
                  <p>
                    We're committed to creating a safe environment for all users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Our Story
              </h2>
              <p className="leading-relaxed">
                Founded with the vision of connecting people across the globe, our
                platform has grown into a vibrant community where millions of users
                share their stories, ideas, and experiences every day. We started with
                a simple idea: give people a voice and a way to connect with others
                who care about the same things they do.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Join Our Community
              </h2>
              <p className="leading-relaxed">
                Whether you're here to stay informed, share your passions, or connect
                with like-minded individuals, we're glad you're here. Join millions of
                users who are already part of our global conversation.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> support@chirpy.com
                </p>
                <p>
                  <strong>Address:</strong> 1355 Market Street, Suite 900, San
                  Francisco, CA 94103
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
