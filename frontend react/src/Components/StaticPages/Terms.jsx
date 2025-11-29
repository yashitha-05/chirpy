import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last Updated: November 29, 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using this social media platform, you accept and
                agree to be bound by the terms and provision of this agreement. If
                you do not agree to these Terms of Service, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. User Accounts
              </h2>
              <p className="leading-relaxed mb-3">
                When you create an account with us, you must provide accurate,
                complete, and current information. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. User Content
              </h2>
              <p className="leading-relaxed mb-3">
                You retain ownership of content you post on our platform. However, by
                posting content, you grant us a worldwide, non-exclusive, royalty-free
                license to use, reproduce, and distribute your content.
              </p>
              <p className="leading-relaxed">
                You agree not to post content that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Violates any laws or regulations</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains hate speech or promotes violence</li>
                <li>Harasses, threatens, or bullies others</li>
                <li>Contains spam or misleading information</li>
                <li>Impersonates another person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Prohibited Activities
              </h2>
              <p className="leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use automated systems to access the platform</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the platform's functionality</li>
                <li>Collect user information without consent</li>
                <li>Create multiple accounts for abusive purposes</li>
                <li>Sell or transfer your account to others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                The platform and its original content, features, and functionality are
                owned by us and are protected by international copyright, trademark,
                patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                6. Termination
              </h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account immediately, without prior
                notice or liability, for any reason, including if you breach these
                Terms. Upon termination, your right to use the platform will
                immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                7. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                In no event shall we be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use or
                inability to use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                8. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. We
                will provide notice of any significant changes. Your continued use of
                the platform after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                9. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@chirpy.com
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
