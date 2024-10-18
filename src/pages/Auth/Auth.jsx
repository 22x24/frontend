import React, { useState } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";

function NetworkManager() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-zinc-700 w-full">
      <section className="flex flex-col items-center w-full max-w-[589px] p-8 bg-gray-900 rounded-lg text-center">
        <h1 className="text-4xl text-white mb-4">Network Manager</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fe4110c8ed1769050f59fb76fd4af99cc4121e6af98319381e4ca8fe33c694?placeholderIfAbsent=true&apiKey=81f24389368b40e99a834df4c07e9c4e"
          alt="Network Manager illustration"
          className="w-full max-w-[500px] mb-8"
        />
        <h2 className="text-4xl font-light text-white mb-8">Sign in</h2>
        <form onSubmit={handleLogin} className="w-full">
          <InputField
            label="User :"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Roza"
          />
          <InputField
            label="Password :"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Test"
          />
          <LoginButton />
        </form>
      </section>
    </main>
  );
}

export default NetworkManager;