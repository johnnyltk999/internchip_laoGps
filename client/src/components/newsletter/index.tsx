// import axios from "axios";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  // const resetEmail = () => {
  //   setEmail("");
  // };

  // const addCustomerEmail = () => {
  //   axios
  //     .post("http://localhost:3001/create", {
  //       email: email,
  //     })
  //     .then((response) => {
  //       console.log("Customer email added:", response.data);
  //       alert("Email added successfully!");
  //       resetEmail();
  //     })
  //     .catch((error) => {
  //       console.error("Error adding customer email:", error);
  //       alert("An error occurred while adding the Email.");
  //     });
  // };

  return (
    <div className="w-full py-16 text-black px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-[#1178bb] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-sky-700"
              // onClick={() => {
              //   if (email.trim() !== "") {
              //     addCustomerEmail();
              //   } else {
              //     alert("Please enter a valid email.");
              //   }
              // }}
            >
              Notify Me
            </button>
          </div>
          <p>We care bout the protection of your data</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
