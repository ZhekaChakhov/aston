import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  className: string;
  onClick?: () => void;
  text: string;
}

export const Button = (props: Props) => {
  const { className, onClick, text } = props;

  return (
    <button
      type="button"
      className={`text-sm md:text-md lg:text-lg p-1 lg:p-3 inline-block font-semibold border-4 box-border ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
