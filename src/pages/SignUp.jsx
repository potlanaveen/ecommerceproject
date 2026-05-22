import React from "react";

const SignUp = () => {
  return (
    <div>
      <section className="bg-custom-white dark:bg-custom-dark">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-custom-dark dark:border-gray-600">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign Up
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

export default SignUp;
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-custom-green hover:bg-custom-dark-green focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={onSubmit}  
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <button
                    
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <NavLink to="/login" >
                            Sign in
                        </NavLink>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
