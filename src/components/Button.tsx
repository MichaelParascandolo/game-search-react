import React from "react";

const Button = ({ platform, color }) => {
  return (
    <>
      <p className="font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-green-600 rounded-lg"></p>
    </>
  );
};

export default Button;

// {platforms[0] ? (
//     <p className="font-bold text-sm">
//       &nbsp;{platforms[0].platform.name}
//     </p>
//   ) : null}

// font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-green-600 rounded-lg
