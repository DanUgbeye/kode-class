import React from "react";

const Heading = ({ heading, supportText, extraStyle, headingStyle, supportTextStyle }) => {
  return (
    <div className={` mb-8 w-full ${extraStyle} `}>
      <h2 className={` mb-4 ${headingStyle}`}>{heading}</h2>
      <p className={` ${supportTextStyle} `}>{supportText}</p>
    </div>
  );
};

export default Heading;
