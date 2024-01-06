import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('Username', username);
    formData.append('Password', password);

    try {
      const response = await fetch('http://localhost:8000/oauth/token', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Access the access token from the response
        const token = data.accessToken;
        console.log(token);
        localStorage.setItem('accessToken', token);

        // You can now use the access token for further requests or store it as needed.
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    let htmlTag = document.getElementsByTagName("html");
    htmlTag[0].classList.add("bg-white");
    htmlTag[0].classList.remove("bg-gray-100");
  }, []);
  
  return (
    <>
    <div className="flex min-h-full flex-1 flex-row justify-center ml-10 mr-10">
      <div
        id="SignIn"
        className="w-96"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-6 text-gray-900 hidden"
                >
                  Email address
                </label>
                <div className="">
                  <input
                    placeholder="Email address"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-t-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-6 text-gray-900 hidden"
                  >
                    Password
                  </label>
                </div>
                <div className="">
                  <input
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-b-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row justify-between ">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="Remember me"
                    defaultValue="false"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 min-w-0 flex-1 text-sm leading-6">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Yourself
            </Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignInForm;
