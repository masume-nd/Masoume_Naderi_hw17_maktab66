import React from "react";
import { v4 as uuidv4 } from "uuid";

const Select = (props) => {
   return (
      <>
         <li key={uuidv4()}>{props.item}</li>
      </>
   );
};

export default Select;
