import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last Updated: November 29, 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (name, email, username, password)</li>
                <li>Profile information (bio, location, profile picture)</li>
                <li>Content you post (posts, messages, photos, videos)</li>
                <li>Communications with us and other users</li>
                <li>Payment information (for premium features)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience and content</li>
                <li>Send you updates and notifications</li>
                <li>Respond to your comments and questions</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Information Sharing
              </h2>
              <p className="leading-relaxed mb-3">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Public Content:</strong> Posts and profile information you
                  make public are visible to all users
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who help us
                  operate our platform
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to
                  protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with mergers or
                  acquisitions
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly agree to
                  share information
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access, loss,
                destruction, or alteration. However, no method of transmission over
                the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Your Rights and Choices
              </h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Control who can see your posts and profile</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                6. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to collect
                information about your browsing activities. You can control cookies
                through your browser settings. However, disabling cookies may affect
                your ability to use certain features of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                7. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our platform is not intended for children under 13 years of age. We do
                not knowingly collect personal information from children under 13. If
                you believe we have collected information from a child under 13,
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                8. International Data Transfers
              </h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries
                other than your own. We ensure appropriate safeguards are in place to
                protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                9. Changes to Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify
                you of any significant changes by posting the new policy on this page
                and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                10. Contact Us
              </h2>
              <p className="leading-relaxed mb-2">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-1">
                <p>
                  <strong>Email:</strong> privacy@chirpy.com
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

export default Privacy;
