import React, { ReactNode } from 'react';

interface InputFieldProps {
  icon: ReactNode;
  iconFill: string;
  type: string;
  name: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ icon, iconFill, type, name, placeholder }) => {
  return (
    <div className="flex items-center border py-2 px-4 rounded-xl h-14 bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-400"
        fill={iconFill}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
      <input
        className="pl-4 w-full outline-none border-none text-lg bg-inherit"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;