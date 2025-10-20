import React, { use } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";

const Homepage = () => {
  const {user,loading,signOutFnc,setUser }= use(AuthContext)
  const handleNotify = () => {
    toast.success("🎉 You’ll be notified when the homepage is ready!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

   const handleSignout = () => {
    signOutFnc()
      .then(() => {
        toast("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 via-purple-500 to-purple-300 text-center">
      
      
      {loading ? (
  <CircleLoader color="#00ff12" />
) : user ? (
  // ✅ User is logged in
  <div className="text-center space-y-3">
    <button
      className=""
      popoverTarget="popover-1"
      style={{ anchorName: "--anchor-1" }}
    >
      <img
        src={user?.photoURL || "https://i.ibb.co.com/QFCyYkhY/mr-bean.png"}
        className="w-10 rounded-full mx-auto"
        alt=""
      />
    </button>

    <ul
      className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm relative"
      popover="auto"
      id="popover-1"
      style={{ positionAnchor: "--anchor-1" }}
    >
      <h2 className="text-xl font-semibold">{user?.displayName}</h2>
      <p className="text-white/80">{user?.email}</p>
      <button onClick={handleSignout} className="my-btn">
        Sign Out
      </button>
    </ul>
  </div>
) : (
  // 🚀 User is NOT logged in
  <>
    

    <h1 className="text-5xl md:text-6xl font-bold text-white animate-bounce drop-shadow-lg mt-10">
      🚀 Homepage is Coming Soon
    </h1>

    <p className="mt-5 text-lg text-white/90 animate-pulse">
      Stay tuned! We’re crafting something amazing for you ✨
    </p>

    <div className="mt-10">
      <button
        onClick={handleNotify}
        className="btn btn-outline btn-accent animate-[pulse_2s_infinite]"
      >
        Notify Me
      </button>
    </div>
  </>
)}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Homepage;
