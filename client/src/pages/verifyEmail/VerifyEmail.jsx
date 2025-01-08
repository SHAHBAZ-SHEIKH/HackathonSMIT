import React, { useState } from "react";

const ForgotPasswordSentPage = () => {
  const [email, setEmail] = useState("ashabaz845@gmail.com"); // Mocked email for demonstration

  const handleResend = () => {
    // Logic to resend verification email (replace with your API call)
    console.log("Resending verification email to:", email);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          We have sent a verification to your email.
        </h2>

        <p className="text-sm text-center text-gray-600 mb-4">
          Please check your inbox, including the spam folder.
        </p>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Email Address: <span className="text-blue-600">{email}</span>
          </p>

          <p className="text-sm text-gray-600 mb-6">
            If you don't see the email, you can resend the verification email.
          </p>

          <button
            onClick={handleResend}
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Resend Verification Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordSentPage;
