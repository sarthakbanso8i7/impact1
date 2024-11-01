import React, { useState } from "react";
// import "./SignupForm.css";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(""); // State to hold the selected radio button value
  // eslint-disable-next-line

  const [warnings, setWarnings] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false,
    status: false,
    matchPassword: false,
  });

  const handlesignup = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const repeatpassword = e.target[3].value;
    const status = selected;

    const newWarnings = {
      name: !name,
      email: !email,
      password: !password,
      repeatPassword: !repeatpassword,
      status: status === "",
      matchPassword: password !== repeatpassword,
    };

    setWarnings(newWarnings);

    if (!Object.values(newWarnings).includes(true)) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          uid: user.uid,
          role: status,
        });
        navigate("/Signin");
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please fill all fields correctly");
    }
  };
  console.log(warnings.matchPassword)

  return (
    <div class="relative py-20 2xl:py-40 bg-gradient-135 overflow-hidden">
      <div class="relative container px-4 mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div class="max-w-md">
                <span class="text-lg text-blue-400 font-bold">
                  Register Account
                </span>
                <h2 class="mt-8 mb-12 text-5xl font-bold font-heading text-white">
                  Start your journey by creating an account.
                </h2>

              </div>
            </div>
            {/* form */}
            <div class="w-full lg:w-1/2 px-4">
              <div class="px-6 lg:px-20 py-12 lg:py-24 bg-clay rounded-lg">
                <form onSubmit={handlesignup}>

                  <h3 class="mb-10 text-2xl text-white font-bold font-heading">
                    Register Account
                  </h3>
                  

                  <div class="flex items-center pl-6 mb-3 bg-white rounded-full">
                    <span class="inline-block pr-3 py-2 border-r border-gray-50">

                      <svg
                        class="w-5 h-5"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 0.5C7.23858 0.5 5 2.73858 5 5.5C5 8.26142 7.23858 10.5 10 10.5C12.7614 10.5 15 8.26142 15 5.5C15 2.73858 12.7614 0.5 10 0.5ZM6 5.5C6 3.567 7.567 2 9.5 2C11.433 2 13 3.567 13 5.5C13 7.433 11.433 9 9.5 9C7.567 9 6 7.433 6 5.5Z"
                          fill="black"
                        ></path>
                        <path
                          d="M1.5 18.5V16.5C1.5 14.57 3.07 13 5 13H15C16.93 13 18.5 14.57 18.5 16.5V18.5C18.5 18.7761 18.2761 19 18 19H2C1.72386 19 1.5 18.7761 1.5 18.5Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                    <input
                      className={`w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none ${warnings.name ? "border-2 border-red-500" : ""
                        }`}
                      type="Text"
                      placeholder="Full Name"
                     
                    />
                  </div>

                  <div class="flex items-center pl-6 mb-3 bg-white rounded-full">
                    <span class="inline-block pr-3 py-2 border-r border-gray-50">
                      <svg
                        class="w-5 h-5"
                        width="20"
                        height="21"
                        viewbox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z"
                          fill="black"
                        ></path>
                        <path
                          d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z"
                          fill="black"
                        ></path>
                        <rect
                          x="15"
                          y="15"
                          width="5"
                          height="1"
                          rx="0.5"
                          fill="black"
                        ></rect>
                        <rect
                          x="17"
                          y="18"
                          width="5"
                          height="1"
                          rx="0.5"
                          transform="rotate(-90 17 18)"
                          fill="black"
                        ></rect>
                      </svg>
                    </span>
                    <input
                      className={`w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none ${warnings.email ? "border-2 border-red-500" : ""
                        }`}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="flex items-center pl-6 mb-3 bg-white rounded-full">
                    <span class="inline-block pr-3 py-2 border-r border-gray-50">
                      <svg
                        class="w-5 h-5"
                        width="17"
                        height="21"
                        viewbox="0 0 17 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z"
                          fill="black"
                        ></path>
                        <path
                          d="M8.49957 8.93567C7.26775 8.93567 6.26562 9.93779 6.26562 11.1696C6.26562 11.8679 6.60247 12.5283 7.1592 12.9474V14.7439C7.1592 15.4829 7.76062 16.0843 8.49957 16.0843C9.2381 16.0843 9.83994 15.4829 9.83994 14.7439V12.9474C10.3966 12.5278 10.7335 11.8679 10.7335 11.1696C10.7335 9.93779 9.7309 8.93567 8.49957 8.93567ZM9.16793 12.3228C9.03032 12.4023 8.94636 12.5502 8.94636 12.7088V14.7439C8.94636 14.9906 8.74572 15.1907 8.49957 15.1907C8.25342 15.1907 8.05278 14.9906 8.05278 14.7439V12.7088C8.05278 12.5502 7.96833 12.4032 7.83072 12.3228C7.41026 12.078 7.1592 11.6468 7.1592 11.1696C7.1592 10.4307 7.76062 9.82925 8.49957 9.82925C9.2381 9.82925 9.83994 10.4307 9.83994 11.1696C9.83994 11.6468 9.58881 12.078 9.16793 12.3228Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                    <input
                      className={`w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none ${warnings.password ? "border-2 border-red-500" : ""
                        }`}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="flex items-center pl-6 mb-6 bg-white rounded-full">
                    <span class="inline-block pr-3 py-2 border-r border-gray-50">
                      <svg
                        class="w-5 h-5"
                        width="20"
                        height="21"
                        viewbox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14V16.4517C15.2077 18.2573 14.0443 20.125 12.0973 20.125H5.42975C3.56848 20.125 1.87435 18.3741 1.87435 16.4517V10.5H15.6243C15.8547 10.5 16.041 10.3044 16.041 10.0625C16.041 9.82058 15.8547 9.625 15.6243 9.625H15.2077V5.95175C15.2077 2.39183 12.8635 0 9.37435 0H7.70768C4.21855 0 1.87435 2.39183 1.87435 5.95175V9.625H1.45768C1.22728 9.625 1.04102 9.82058 1.04102 10.0625V16.4517C1.04102 18.8322 3.13268 21 5.42975 21H12.0972C14.3089 21 16.0409 19.0023 16.0409 16.4517V14C16.041 13.7581 15.8547 13.5625 15.6243 13.5625ZM2.70768 5.95175C2.70768 2.86783 4.67022 0.875 7.70768 0.875H9.37435C12.4119 0.875 14.3743 2.86783 14.3743 5.95175V9.625H2.70768V5.95175Z"
                          fill="black"
                        ></path>
                        <path
                          d="M18.8815 9.3711C18.7482 9.17377 18.4878 9.12827 18.3003 9.26701L8.58655 16.4919L6.75235 14.5655C6.58942 14.3944 6.32608 14.3944 6.16322 14.5655C6.00028 14.7366 6.00028 15.0131 6.16322 15.1842L8.24655 17.3717C8.32695 17.4561 8.43362 17.4999 8.54115 17.4999C8.62488 17.4999 8.70868 17.4732 8.78282 17.4194L18.7828 9.98185C18.9703 9.84143 19.0141 9.56843 18.8815 9.3711Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                    <input
                      className={`w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none ${warnings.repeatPassword || warnings.matchPassword ? "border-2 border-red-500" : ""
                        }`}
                      type="password"
                      placeholder="Repeat password"
                    />
                  </div>

                  {/* dsjfbkfgdskfgskdj */}
                  {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
                  <div className="p-6 bg-white rounded shadow-md"> */}
                  {/* ksfbhjkgsdf */}
                  <div className="flex flex-col items-start ">
                    <label className={`-mt-2 ml-2 text-m font-bold text-gray-200 mb-2 ${warnings.status ? "text-red-500" : ""
                      } `}>
                      Choose Your Status:
                    </label>
                    <div className="flex space-x-4 ml-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="student"
                          name="status"
                          value="Student"
                          checked={selected === "Student"}
                          onChange={() => setSelected("Student")}
                          className="mr-2"
                        />
                        <label
                          htmlFor="student"
                          className="-mt-1 text-sm text-gray-200"
                        >
                          Student
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="alumni"
                          name="status"
                          value="Alumni"
                          checked={selected === "Alumni"}
                          onChange={() => setSelected("Alumni")}
                          className="mr-2"
                        />
                        <label
                          htmlFor="alumni"
                          className="-mt-0 text-sm text-gray-200"
                        >
                          Alumni
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />

                  {/* </div>
              </div> */}

                  <div class="inline-flex mb-10">
                    <input class="mr-4" type="checkbox" />
                    <p class="-mt-2 text-sm text-gray-200">
                      By singning up, you agree to our{" "}
                      <a class="text-white" href="google.com">
                        Terms, Data Policy
                      </a>
                      and{" "}
                      <a class="text-white" href="google.com">
                        Cookies.
                      </a>
                    </p>
                  </div>
                  <button class="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                    Get started
                  </button>
                </form>
                <Link to="/Signin" className="flex items-center justify-center mt-5">
                  <span class="-mt-2 text-sm text-gray-200">
                    Already have an account? Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
