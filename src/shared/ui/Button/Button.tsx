import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  className: string;
  onClick?: () => void;
  text: string;
}

export const Button = (props: Props) => {
  const { className, onClick, text } = props;

  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};
