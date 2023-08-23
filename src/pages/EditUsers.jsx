import React from "react";
import Footer from "../components/Footer";

const EditUsers = () => {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br">
        <div class="relative w-[50%] mt-20 mx-auto break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 rounded-xl">
          <form className="">
            <div className="rounded-xl shadow-xl p-4 px-4 md:p-8">
              <div className="text-center">
                <div className="pt-6 mx-6 text-center border-t border-gray-200 dark:border-gray-700/50"></div>
                <p className="font-bold text-2xl text-gray-300">
                  Edit Personal Details
                </p>
                <p className="text-cyan-500 text-lg">
                  Please fill out all the fields.
                </p>
                <div className="pt-6 mx-6 text-center border-t border-gray-200 dark:border-gray-700/50"></div>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-300">
                  <div class="relative order-first md:order-last h-full md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 mt-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                    <span class="text-gray-400 opacity-75">
                      <svg
                        class="w-14 h-[395px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="0.7"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="rounded-l-lg p-4 bg-gray-800 flex flex-col justify-center items-center">
                    <label
                      class="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md px-2 py-2 bg-gray-700 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                      for="restaurantImage"
                    >
                      Select image
                      <input
                        id="restaurantImage"
                        class="text-sm cursor-pointer w-36 hidden"
                        type="file"
                      />
                    </label>
                    {/* <button
                      class="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-700 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                      remove image
                    </button> */}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label className="text-gray-300" htmlFor="full_name">
                        Full Name
                      </label>
                      <input
                        placeholder="Jane Doe"
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-gray-300" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value=""
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="text-gray-300" htmlFor="city">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value=""
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-gray-300" htmlFor="country">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value=""
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-gray-300" htmlFor="email">
                        Biography
                      </label>
                      <textarea
                        style={{ resize: "none" }}
                        type="text"
                        name="email"
                        id="email"
                        rows="8"
                        className="h-40 border mt-1 rounded px-4 w-full bg-gray-800 pt-3"
                        value=""
                        placeholder="Your bio here ... "
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          class="inline-flex items-center shadow-md my-2 px-4 py-2 bg-gray-700 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EditUsers;
