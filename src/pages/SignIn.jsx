import React from "react";

const SignIn = () => {
  return (
    <div>
      <section className="bg-custom-white dark:bg-custom-dark">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-custom-dark dark:border-gray-600">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign In
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Authentication has been removed. Please browse our products using the ecommerce features.
              </p>
              <a href="#/" className="text-blue-600 hover:underline">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;

export default SignIn;
