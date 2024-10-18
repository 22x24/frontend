import React from "react";

function InputField({ label, id, type = "text", placeholder }) {
  return (
    <>
      <label htmlFor={id} className="self-start mt-4 text-xl">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="px-3 py-2.5 mt-1.5 w-full whitespace-nowrap bg-gray-800 rounded-md text-zinc-500 max-md:pr-5 max-md:max-w-full"
      />
    </>
  );
}

export default InputField;