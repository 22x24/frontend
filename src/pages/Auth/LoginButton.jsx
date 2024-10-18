import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full max-w-[305px] px-14 py-1.5 mt-8 bg-indigo-500 text-white text-3xl rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto block"
    >
      Login
    </button>
  );
}

export default LoginButton;