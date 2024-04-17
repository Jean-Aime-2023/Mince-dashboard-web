import React from 'react';

const Button = ({ action, icon, bg, hoverBg,onClick }) => {
  const buttonStyle = {
    backgroundColor: bg,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: hoverBg,
    },
  };

  return (
    <div>
      <button
      onClick={onClick}
        style={buttonStyle}
        className="text-white text-md rounded-md flex max-md:text-sm items-center text-center px-11 py-2 justify-center flex-row gap-2"
      >
        <span>{icon}</span>
        <span>{action}</span>
      </button>
    </div>
  );
};

export default Button;
