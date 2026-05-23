import React from "react";

function User() {
  return (
    <div className="overflow-x-hidden">
      <div className="py-12 px-24">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-2xl font-medium">User Profile</h1>
          <p className="text-gray-600 mt-4">
            Authentication has been removed. User profile is not available.
          </p>
          <a href="#/" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default User;
