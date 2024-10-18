import React from "react";

function InputField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-xl text-white mb-2 text-center">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 bg-gray-800 rounded-md text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
      />
    </div>
  );
}

export default InputField;