import React from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";

function NetworkManager() {
  return (
    <main className="flex overflow-hidden flex-col text-3xl text-white bg-zinc-700">
      <section className="flex flex-col justify-center items-center px-20 py-56 w-full bg-gray-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[589px] max-md:mb-2.5">
          <h1 className="self-center text-4xl">Network Manager</h1>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fe4110c8ed1769050f59fb76fd4af99cc4121e6af98319381e4ca8fe33c694?placeholderIfAbsent=true&apiKey=81f24389368b40e99a834df4c07e9c4e" alt="Network Manager illustration" className="object-contain mt-3.5 w-full aspect-[500] max-md:max-w-full" />
          <h2 className="self-center mt-14 text-4xl font-light max-md:mt-10">Sign in</h2>
          <form>
            <InputField label="User :" id="username" placeholder="Roza" />
            <InputField label="Password :" id="password" type="password" placeholder="Test" />
            <LoginButton />
          </form>
        </div>
      </section>
    </main>
  );
}

export default NetworkManager;