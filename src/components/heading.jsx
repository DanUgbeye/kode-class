import React from "react";

const Heading = ({ heading, supportText, extraStyle, headingStyle, supportTextStyle }) => {
  return (
    <div className={` mb-8 text-light-green-30 w-full ${extraStyle} `}>
      <h2 className={`text-8xl mb-4 ${headingStyle}`}>{heading}</h2>
      <p className={` text-sm  ${supportTextStyle} `}>{supportText}</p>
    </div>
  );
};

export default Heading;
