"use client";
import React from "react";

interface NeubrutalismInputProps {
  type?: string; // Input type (text, number, email, etc.)
  placeholder?: string; // Placeholder text
  value?: string; // Input value
  onChange?: (value: string) => void; // Change handler
  label?: string; // Optional label
  name?: string; // Input name
}

const NeubrutalismInput: React.FC<NeubrutalismInputProps> = ({
  type = "text",
  placeholder,
  value = "",
  onChange = () => {},
  label,
  name,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="block font-semibold my-2 font-urbanist">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value || undefined}
        onChange={(e) => onChange(e.target.value)}
        className="w-full neubrutalism-border neubrutalism-shadow rounded-md bg-white text-black font-bold p-3 focus:outline-none focus:neubrutalism-hover font-space"
        name={name}
      />
    </div>
  );
};

export default NeubrutalismInput;
