import React from "react";

function OrgSignup() {

  const handlesignup = (e) => {
    e.preventDefault();
    const Username = e.target[0].value;
    const Email = e.target[1].value;
    const Password = e.target[2].value;
    console.log(Username, Email, Password);
  }

  return (

    <div class="relative py-20 2xl:py-40 bg-gradient-134 overflow-hidden">
      <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
        <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">

          {/* Text */}
          <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div class="flex flex-wrap items-center -mx-4">
              {/* TEXT */}

              <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div class="max-w-md">
                  {/* <span class="text-lg text-blue-400 font-bold">
                      Register Account
                    </span> */}
                  <h2 class="mt-8 mb-12 text-5xl font-bold font-heading text-white">
                    Start your journey by creating an account.
                  </h2>
                  <p class="text-2xl text-gray-200">
                    <span>The brown fox jumps over the lazy dog.</span>
                    <span class="text-white">Hello</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* box */}
          <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-gray-700 bg-opacity-30 shadow-2xl rounded-xl
            relative z-10"
            >
              <form onSubmit={handlesignup}>
                <p class="w-full text-4xl text-white font-medium text-center leading-snug font-serif">
                  Sign up for an account
                </p>

                <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">

                <div class="relative">
                    {/* <p
                      class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    >
                      Username
                    </p> */}
                    <p className="pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute top-3 right-0"><span className="text-red-500">*</span></p>
                    <input
                      id="Username"
                      placeholder="Username"
                      type="text"
                      required
                      class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"

                    />
                  </div>
                  <div class="relative">
                    <p className="pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute top-3 right-0"><span className="text-red-500">*</span></p>
                    <input
                      id="Email"
                      placeholder="123@google.com"
                      type="email"
                      autoComplete="email"
                      required
                      class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="relative">
                    <input
                      placeholder="Password"
                      type="password"
                      required
                      class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="relative">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      required
                      class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div class="relative">
                    <button
                      type="submit"
                      class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                    rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                    >
                      Submit
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default OrgSignup;
