import React, { useContext } from "react";

import DescriptionContext from "../../contextApi/DescriptionContext";
const Description = () => {
  const { piece } = useContext(DescriptionContext);
  return (
    <>
      <div>Hello</div>
      <div>{piece.name}</div>
    </>
  );
};

export default Description;
